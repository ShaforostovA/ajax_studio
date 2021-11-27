$("#full_info").click(async () => {
    await axios.get("/person/all_infa")
})

$("#main_page").click(async () => {
    await axios.get("/")
})