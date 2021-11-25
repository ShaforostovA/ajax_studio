const PORT = 3000

let person = ""

$(document).ready(() => {
    let responseData

    axios.get(`http://localhost:${PORT}/test`)
        .then(response => {
            if(response.status === 200)
            {
                // Массив объетов
                responseData = response.data

                // Заполняем comboBox
                responseData.forEach(iter => {
                    $('#input').append($('<option>', {
                        value: iter.status,
                        text: iter.author
                    }));
                })
                console.log("GOOD")
            }
        })
        .catch(error => {
            console.log(error)
        })


    $("#input").on("input", () => {
        const input = $("#input")
        person = input.val()
        console.log(person)
    });
})