const PORT = 3000

$("document").ready( async () => {
    const response = await GetInfoRequest("/order_materials/list", PORT)

    if(response.status === 200)
    {
        const responseData = response.data

        console.log(responseData)

        $(".field").change(() => {
            let sum = 0

            let sum_sheet =
                (Number($("#fence_height").val()) * Number($("#fence_length").val()))
                    * Number($("#sheet_thickness").val())
                        * GetPriceFromService(responseData, "Лист")

            if($("#coating").val() === "2")
                sum_sheet *= 2

            let gateAndWicket =
                Number($("#the_presence_of_agate").val()) * GetPriceFromService(responseData, "Ворота")
                    + Number($("#the_presence_of_wickets").val())
                        * GetPriceFromService(responseData, "Калитка")

            let logs = Number($("#fence_strengthening_with_logs").val()) * GetPriceFromService(responseData, "Лаги")

            let delivery = 0
            if($("#delivery_direction").val() === "1")
                delivery = GetPriceFromService(responseData, "Доставка")

            sum = sum_sheet + gateAndWicket + logs + delivery

            $("#send_info_btn")
                .text(`Итоговая стоимость ${sum}`)
        })

        $("#send_info_btn").click( async () => {
            await axios.post
        })
    }
})

function GetPriceFromService(data, nameField)
{
    for(let iter in data)
    {
        if(data[iter][0] === nameField)
            return Number(data[iter][1])
    }
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