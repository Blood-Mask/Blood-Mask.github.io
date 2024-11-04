var date = new Date()
if(localStorage.getItem('notate_massive')){
    var notate_massive = JSON.parse(localStorage.getItem('notate_massive'))
    notate_massive.forEach(el => {
        $('.c').append(`
                <button class="notateP" id="${el.noteId}">
                <span style="font-size: 13px; font-family: serif">${el.noteDate}</span>
                <span style="max-width: 220px">${el.noteName}</span>
                <p class="noteBack">${el.noteContent}</>
            </button> `)
        $(`#${el.noteId}`).click(() => {
            localStorage.setItem('thisNote', JSON.stringify(el))
            $(".window").css({display:"block"})
            $(".noteNameP").text(JSON.parse(localStorage.getItem('thisNote')).noteName)
            var searchTerm = JSON.parse(localStorage.getItem('thisNote')).noteId
            var index;
            for(var i = 0; i < notate_massive.length; i++) {
                if (notate_massive[i].noteId == searchTerm) {
                    index = i
                    break
                }
            }
            document.getElementById("textarea").value = notate_massive[index].noteContent
                })
            })
}else{
    var notate_massive = []
}
$(".addButton").click(() => {
      $("#input").css({display:"block"})
      $(".submitButton").css({display:"block"})
})
$(".submitButton").click(() => {
    if($("#input").val() != ''){
        var nId = Date.now()
        notate_massive.push({
            noteId: nId,
            noteName: $("#input").val(),
            noteContent: ".",
            noteDate: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
        })
        localStorage.setItem('notate_massive', JSON.stringify(notate_massive))
        location.reload()
    }
})
$('.window > button').click(() => {
    var searchTerm = JSON.parse(localStorage.getItem('thisNote')).noteId
    var index;
    for(var i = 0; i < notate_massive.length; i++) {
        if (notate_massive[i].noteId == searchTerm) {
            index = i
            break
        }
    }
    notate_massive[index].noteContent = $("#textarea").val()
    localStorage.setItem('notate_massive', JSON.stringify(notate_massive))
    $(".window").css({display:'none'})
    location.reload()
})
$(".deleteBtn").click(() => {
    var searchTerm = JSON.parse(localStorage.getItem('thisNote')).noteId
    var index;
    for(var i = 0; i < notate_massive.length; i++) {
        if (notate_massive[i].noteId == searchTerm) {
            index = i
            break
        }
    }
    notate_massive.splice(index, 1)
    localStorage.setItem('notate_massive', JSON.stringify(notate_massive))
    location.reload()
})