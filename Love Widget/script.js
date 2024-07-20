if(localStorage.getItem('IMG1')){
      $('.profile1 > .profile1IMG > img').attr('src', JSON.parse(localStorage.getItem('IMG1')))
}
if(localStorage.getItem('IMG2')){
      $('.profile2 > .profile2IMG > img').attr('src', JSON.parse(localStorage.getItem('IMG2')))
}
if(localStorage.getItem('name1')){
      $('.inputNameButton1').text(JSON.parse(localStorage.getItem('name1')))
      $('.name_content1').text(JSON.parse(localStorage.getItem('name1')))
}
if(localStorage.getItem('name2')){
      $('.inputNameButton2').text(JSON.parse(localStorage.getItem('name2')))
      $('.name_content2').text(JSON.parse(localStorage.getItem('name2')))
}
if(localStorage.getItem('starteddate')){
      var starteddate = JSON.parse(localStorage.getItem('starteddate'))
      var date = new Date()
      $('.dateinput').val(starteddate)
      days1 = new Date(`'${starteddate}'`)
      $('.starteddate').text(`${Math.round((date - days1) / (1000 * 60 * 60 * 24)) - 1} days`)
      $('#10days').text(`Days left: ${11 - Math.round((date - days1) / (1000 * 60 * 60 * 24))}`)
      $('#30days').text(`Days left: ${31 - Math.round((date - days1) / (1000 * 60 * 60 * 24)) }`)
      $('#50days').text(`Days left: ${51 - Math.round((date - days1) / (1000 * 60 * 60 * 24)) }`)
      $('#100days').text(`Days left: ${101 - Math.round((date - days1) / (1000 * 60 * 60 * 24)) }`)
      $('#200days').text(`Days left: ${201 - Math.round((date - days1) / (1000 * 60 * 60 * 24)) }`)
      $('#300days').text(`Days left: ${301 - Math.round((date - days1) / (1000 * 60 * 60 * 24)) }`)
      $('#1year').text(`Days left: ${366 - Math.round((date - days1) / (1000 * 60 * 60 * 24)) }`)
      $('#400days').text(`Days left: ${401 - Math.round((date - days1) / (1000 * 60 * 60 * 24)) }`)
      $('#500days').text(`Days left: ${501 - Math.round((date - days1) / (1000 * 60 * 60 * 24)) }`)
      $('#600days').text(`Days left: ${601 - Math.round((date - days1) / (1000 * 60 * 60 * 24)) }`)
      $('#700days').text(`Days left: ${701 - Math.round((date - days1) / (1000 * 60 * 60 * 24)) }`)
      $('#2years').text(`Days left: ${731 - Math.round((date - days1) / (1000 * 60 * 60 * 24)) }`)
      $('#1000days').text(`Days left: ${1001 - Math.round((date - days1) / (1000 * 60 * 60 * 24)) }`)
      $('#3years').text(`Days left: ${1096 - Math.round((date - days1) / (1000 * 60 * 60 * 24)) }`)
      $('#4years').text(`Days left: ${1462 - Math.round((date - days1) / (1000 * 60 * 60 * 24)) }`)
      $('#5years').text(`Days left: ${1827 - Math.round((date - days1) / (1000 * 60 * 60 * 24)) }`)
      $('#10years').text(`Days left: ${3653 - Math.round((date - days1) / (1000 * 60 * 60 * 24)) }`)
      $('#15years').text(`Days left: ${5479 - Math.round((date - days1) / (1000 * 60 * 60 * 24)) }`)
      $('#20years').text(`Days left: ${7306 - Math.round((date - days1) / (1000 * 60 * 60 * 24)) }`)
      $('#30years').text(`Days left: ${10958 - Math.round((date - days1) / (1000 * 60 * 60 * 24)) }`)
      $('#40years').text(`Days left: ${14611 - Math.round((date - days1) / (1000 * 60 * 60 * 24)) }`)
      $('#50years').text(`Days left: ${18263 - Math.round((date - days1) / (1000 * 60 * 60 * 24)) }`)
      $('#100years').text(`Days left: ${36526 - Math.round((date - days1) / (1000 * 60 * 60 * 24)) }`)
      $('#1000years').text(`Days left: ${365251 - Math.round((date - days1) / (1000 * 60 * 60 * 24)) }`)
}
if(localStorage.getItem('theme')){
      var theme = JSON.parse(localStorage.getItem('theme'))
      if(theme == "blue"){
            $('.head').css({"background-color": "rgb(81 81 222)"})
            $('.asidepanel').css({"background-color": "rgb(57 52 143)"})
            $('.love_profile').css({"background-color": "rgb(51 69 219)"})
            $('.inputNameButton1').css({"background-color": "rgb(162 175 214)"})
            $('.inputNameButton2').css({"background-color": "rgb(162 175 214)"})
            $('.overall').css({"background-color": "rgb(104 109 198)"})
            $('.inputName1, .inputName2').css({"background-color": "#c0c0ff"})
            $('.acceptButton1, .acceptButton2').css({"background-color": "rgb(102 81 222)"})
            $('.dateSettings').css({"background-color":"rgb(47 62 188)"})
            $('body').css({"background-color":"rgb(36 75 143 / 21%)"})
      }else if(theme == "orange"){
            $('.head').css({"background-color": "rgb(222 131 81)"})
            $('.asidepanel').css({"background-color": "rgb(185 107 64)"})
            $('.love_profile').css({"background-color": "rgb(219 137 51)"})
            $('.inputNameButton1').css({"background-color": "rgb(214 178 162)"})
            $('.inputNameButton2').css({"background-color": "rgb(214 178 162)"})
            $('.overall').css({"background-color": "rgb(190 121 63)"})
            $('.inputName1, .inputName2').css({"background-color": "rgb(255 215 192)"})
            $('.acceptButton1, .acceptButton2').css({"background-color": "rgb(222 153 81)"})
            $('.dateSettings').css({"background-color":"rgb(214 145 34)"})
            $('body').css({"background-color":"rgb(143 102 36 / 21%)"})
      }else if(theme == "purple"){
            $('.head').css({"background-color": "rgb(131 81 222)"})
            $('.asidepanel').css({"background-color": "rgb(101 64 185)"})
            $('.love_profile').css({"background-color": "rgb(128 51 219)"})
            $('.inputNameButton1').css({"background-color": "rgb(191 162 214)"})
            $('.inputNameButton2').css({"background-color": "rgb(191 162 214)"})
            $('.overall').css({"background-color": "rgb(115 63 190)"})
            $('.inputName1, .inputName2').css({"background-color": "rgb(231 192 255)"})
            $('.acceptButton1, .acceptButton2').css({"background-color": "rgb(146 81 222)"})
            $('.dateSettings').css({"background-color":"rgb(144 34 214)"})
            $('body').css({"background-color":"rgb(36 36 143 / 21%)"})
      }else if(theme == "green"){
            $('.head').css({"background-color": "rgb(42 125 33)"})
            $('.asidepanel').css({"background-color": "rgb(25 109 25)"})
            $('.love_profile').css({"background-color": "rgb(28 120 38)"})
            $('.inputNameButton1').css({"background-color": "rgb(45 167 44)"})
            $('.inputNameButton2').css({"background-color": "rgb(45 167 44)"})
            $('.overall').css({"background-color": "rgb(10 103 25)"})
            $('.inputName1, .inputName2').css({"background-color": "rgb(83 196 76)"})
            $('.acceptButton1, .acceptButton2').css({"background-color": "rgb(44 129 44)"})
            $('.dateSettings').css({"background-color":"rgb(15 116 35)"})
            $('body').css({"background-color":"rgb(36 143 57 / 21%)"})
      }
}
function uploadphoto1(input){
      var file = input.files[0]

      var reader = new FileReader()

      reader.readAsDataURL(file)

      reader.onload = () => {
            $('.profile1 > .profile1IMG > img').attr('src', reader.result)
            localStorage.setItem('IMG1', JSON.stringify(reader.result))   
            location.reload()
      }
}
function uploadphoto2(input){
      var file = input.files[0]

      var reader = new FileReader()

      reader.readAsDataURL(file)

      reader.onload = () => {
            $('.profile2 > .profile2IMG > img').attr('src', reader.result)   
            localStorage.setItem('IMG2', JSON.stringify(reader.result))
            location.reload()
      }
}
$('.inputNameButton1').click(() => {
      $('.overallblack1').css({"display": "block"})
      $('.acceptButton1').click(() => {
            if($('.inputName1').val() != ""){
                  $('.inputNameButton1').text($('.inputName1').val())
                  $('.overallblack1').css({"display": "none"})
                  localStorage.setItem('name1', JSON.stringify($('.inputName1').val()))
                  location.reload()
            }
      })
})
$('.inputNameButton2').click(() => {
      $('.overallblack2').css({"display": "block"})
      $('.acceptButton2').click(() => {
            if($('.inputName2').val() != ""){
                  $('.inputNameButton2').text($('.inputName2').val())
                  $('.overallblack2').css({"display": "none"})
                  localStorage.setItem('name2', JSON.stringify($('.inputName2').val()))
                  location.reload()
            }
      })
})
$('.head > button').click(() => {
      $('.asidepanel').css({"display":"block"})
})
$('.closePage').click(() => {
      $('.asidepanel').css({"display":"none"})
})
function setdate(){
      localStorage.setItem('starteddate', JSON.stringify($('.dateinput').val()))
      location.reload()
}
$('#blueTheme').click(() => {
      localStorage.setItem('theme', JSON.stringify('blue'))
      location.reload()
})
$('#pinkTheme').click(() => {
      localStorage.setItem('theme', JSON.stringify('pink'))
      location.reload()
})
$('#orangeTheme').click(() => {
      localStorage.setItem('theme', JSON.stringify('orange'))
      location.reload()
})
$('#purpleTheme').click(() => {
      localStorage.setItem('theme', JSON.stringify('purple'))
      location.reload()
})
$('#greenTheme').click(() => {
      localStorage.setItem('theme', JSON.stringify('green'))
      location.reload()
})