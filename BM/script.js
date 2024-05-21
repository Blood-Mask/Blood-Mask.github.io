var telegramInput = document.getElementById("telegramInput")
var legendInput = document.getElementById('legendInput')
            var submitInput = document.getElementById("submitInput")

            emailjs.init("yOpJBpe_ajbdC3zrq");

            submitInput.onclick = function(){
                  if(telegramInput.value != ''){
                        emailjs.send("service_2bd3bwl", "template_96892ys", { to_name: "Ostap", message: telegramInput.value, reply_to: "ostap7534@gmail.com" }) .then(response = function(){ 
                              legendInput.innerHTML = `SUCCESS`
                              setTimeout(() => {
                                    legendInput.innerHTML = "Your telegram"
                              }, 5000);
                        }
                        ) .catch(error => console.log('Возникла ошибка...', error));
                  }else{
                        console.error();
                  }
            }