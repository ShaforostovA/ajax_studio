const PORT = 3000

$("document").ready( async () => {
    const response = await GetInfoRequest("/order_materials/list", PORT)

    if(response.status === 200)
    {
        const responseData = response.data

        console.log(responseData)

        $(".field").change(() => {
            let sum

            const dfkhgdfjl = GetPriceFromService(responseData, "Ворота")

            console.log(dfkhgdfjl)

            let sum_sheet =
                (Number($("#fence_height").val()) * Number($("#fence_length").val()))
                    * Number($("#sheet_thickness").val())
                        * GetPriceFromService(responseData, "Лист")

            let gateAndWicket =
                Number($("#the_presence_of_agate").val()) * GetPriceFromService(responseData, "Ворота")
                    + Number($("#the_presence_of_wickets").val())
                        * GetPriceFromService(responseData, "Калитка")

            sum = sum_sheet + gateAndWicket

            $("#send_info_btn")
                .text(`Итоговая стоимость ${sum}`)
        })

        $("#send_info_btn").click( async () => {

        })
    }
})

function GetPriceFromService(data, nameField)
{
    data.forEach( iter => {
        const servicename = iter.servicename
        const price = Number(iter.price)
        if(servicename === nameField)
            return price
    })
}

/**
 * @param apiPath = api маршрут
 * @param port - порт
 * @return - успешность выполнения
 */
async function GetInfoRequest(apiPath, port)
{
    const request = await axios.post(`http://localhost:${port}${apiPath}`)

    const statusQuery = request.status

    let response = {
        status: statusQuery,
        data: null
    }

    if(statusQuery === 200)
    {
        response.data = request.data
        response.status = statusQuery
    }

    return response
}