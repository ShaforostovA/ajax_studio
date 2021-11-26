const PORT = 3000

$(document).ready(async () => {
    let isSuccessfully = await GetPersonsInfoRequest("/person/list", PORT)

    console.log(isSuccessfully)

    if(isSuccessfully.status === 200)
    {
        /*
         * Получить <input>
         * Получить данные из запроса
         * И заполнить comboBox данными из запроса
         */
        const elementInput = $("#input")
        const personData = isSuccessfully.data
        AddDataInComboBox(personData)

        let idPerson = elementInput.val()
        let personInfo = personData[idPerson]
        AddInfoPersonOnHTML(personData[idPerson])

        elementInput.on("input", () => {
            idPerson = elementInput.val()
            personInfo = personData[idPerson]
            AddInfoPersonOnHTML(personInfo)
        });
    }
})