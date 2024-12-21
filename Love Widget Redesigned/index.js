const MAX_SIZE = 5 * 1024 * 1024
let days = [11,31,51,101,201,301,366,401,501,601,701,731,1001,2001,3001,4001]
if(localStorage.getItem('date')){
    $('#dateIn').val(JSON.parse(localStorage.getItem('date')))
    let d = new Date()
    let dn = new Date(JSON.parse(localStorage.getItem('date')))
    $('.days').text(`${Math.round((d - dn) / (1000 * 60 * 60 * 24)) - 1} days`)
    days.forEach(el => {
        $('.daysBlock').append(`
            <div class="dBlock">
                <p>${el - 1} days</p>
                <span>${el - Math.round((d - dn) / (1000 * 60 * 60 * 24))} days left</span> <br>
            </div>
            `)
    })
}
if(localStorage.getItem('profile_image1')){
    $('.img1').attr("src", JSON.parse(localStorage.getItem('profile_image1')))
}
if(localStorage.getItem('profile_image2')){
    $('.img2').attr("src", JSON.parse(localStorage.getItem('profile_image2')))
}
if(localStorage.getItem('name1')){
    $('#name1').val(JSON.parse(localStorage.getItem('name1')))
    $('.name1').text(JSON.parse(localStorage.getItem('name1')))
}
if(localStorage.getItem('name2')){
    $('#name2').val(JSON.parse(localStorage.getItem('name2')))
    $('.name2').text(JSON.parse(localStorage.getItem('name2')))
}
$('.openMenuButton').click(() => {
    document.getElementById("settings").style.display = "block"
    $('.settings').animate({opacity:"100%"}, "fast")
})
$('.saveBtn').click(() => {
    $('.settings').animate({opacity:"0%"}, "fast")
    document.getElementById("settings").style.display = "none"
    localStorage.setItem('name1', JSON.stringify($('#name1').val()))
    localStorage.setItem('name2', JSON.stringify($('#name2').val()))
    localStorage.setItem('date', JSON.stringify($('#dateIn').val()))
    location.reload()
})
function upload1(input){
    let file = input.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
        if(reader.result.length >= MAX_SIZE){
            return alert('This file is larger than 5mb. Please, choose another one.')
        }
        localStorage.setItem('profile_image1', JSON.stringify(reader.result))
        $('.img1').attr("src", JSON.parse(localStorage.getItem('profile_image1')))
    }
}
function upload2(input){
    let file = input.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
        if(reader.result.length >= MAX_SIZE){
            return alert('This file is larger than 5mb. Please, choose another one.')
        }
        localStorage.setItem('profile_image2', JSON.stringify(reader.result))
        $('.img2').attr("src", JSON.parse(localStorage.getItem('profile_image2')))
    }
}
function clearThemes(){
    $('.theme1').text('')
    $('.theme2').text('')
    $('.theme3').text('')
    $('.theme4').text('')
    $('.theme5').text('')
    $('.theme6').text('')
}
function renderTheme(){
    switch(localStorage.getItem('theme')){
        case "blue": 
            $('body').animate({backgroundColor:"#191b4f"}, "slow")
            $('.dBlock').animate({backgroundColor:"#0a0d47"}, "slow")
            $('.theme1').text('⩗')
            break
        case "pink": 
            $('body').animate({backgroundColor:"#4f1943"}, "slow")
            $('.dBlock').animate({backgroundColor:"#5d0b3d"}, "slow")
            $('.theme2').text('⩗')
            break
        case "green": 
            $('body').animate({backgroundColor:"#1d4f19"}, "slow")
            $('.dBlock').animate({backgroundColor:"#0a470b"}, "slow")
            $('.theme3').text('⩗')
            break
        case "purple": 
            $('body').animate({backgroundColor:"#220a21"}, "slow")
            $('.dBlock').animate({backgroundColor:"#360034"}, "slow")
            $('.theme4').text('⩗')
            break
        case "red": 
            $('body').animate({backgroundColor:"#4f1919"}, "slow")
            $('.dBlock').animate({backgroundColor:"#470a0a"}, "slow")
            $('.theme5').text('⩗')
            break
        case "yellow": 
            $('body').animate({backgroundColor:"#4f4f19"}, "slow")
            $('.dBlock').animate({backgroundColor:"#47390a"}, "slow")
            $('.theme6').text('⩗')
            break
    }
}
renderTheme()
$('.theme1').click(() => {
    clearThemes()
    localStorage.setItem('theme', 'blue')
    $('.theme1').text('⩗')
    renderTheme()
})
$('.theme2').click(() => {
    clearThemes()
    localStorage.setItem('theme', 'pink')
    $('.theme2').text('⩗')
    renderTheme()
})
$('.theme3').click(() => {
    clearThemes()
    localStorage.setItem('theme', 'green')
    $('.theme3').text('⩗')
    renderTheme()
})
$('.theme4').click(() => {
    clearThemes()
    localStorage.setItem('theme', 'purple')
    $('.theme4').text('⩗')
    renderTheme()
})
$('.theme5').click(() => {
    clearThemes()
    localStorage.setItem('theme', 'red')
    $('.theme5').text('⩗')
    renderTheme()
})
$('.theme6').click(() => {
    clearThemes()
    localStorage.setItem('theme', 'yellow')
    $('.theme6').text('⩗')
    renderTheme()
})