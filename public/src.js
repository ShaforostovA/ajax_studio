let persons = [
    "Sasha",
    "Masha",
    "Каша"
]

let person = ""

$(document).ready(() => {
    persons.forEach(iter => {
        $('#input').append($('<option>', {
            value: {

            },
            text: iter
        }));
    })

    $("#input").on("input", () => {
        const input = $("#input")
        person = input.val()
        console.log(person)
    });
})