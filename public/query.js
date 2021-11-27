/**
 * @param apiPath = api маршрут
 * @param port - порт
 * @return - успешность выполнения
 */
async function GetPersonsInfoRequest(apiPath, port)
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

/**
 * Добавить поля в comboBox
 * @param data - объект данных
 */
function AddDataInComboBox(data)
{
    data.forEach((value, idx) => {
        $('#input')
            .append($('<option>', {
                value: idx,
                text: value.name
            }))
    })
}

/**
 * Заполнить html елемент инфомарцией о пользователе
 * @param personInfo - информация о пользователе
 */
function AddInfoPersonOnHTML(personInfo)
{
    $("h6#name")
        .html(`Имя: ${personInfo.name}`)
    $("h6#lastname")
        .html(`Фамилия: ${personInfo.lastname}`)
    $("h6#age")
        .html(`Возраст: ${personInfo.age}`)
    $("h6#city")
        .html(`Город: ${personInfo.city}`)
    $("h6#work")
        .html(`Работа: ${personInfo.work}`)
}