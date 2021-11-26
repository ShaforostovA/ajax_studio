const PORT = 3000

$(document).ready(async () => {
    let isSuccessfully = await GetPersonsInfoRequest("/person/list", PORT)

    if(isSuccessfully.status === 200)
    {
        const elementInput = $("#input")
        let personData = isSuccessfully.data
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