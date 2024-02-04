let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")

let sizePassword = document.querySelector("#valor")
let password = document.querySelector("#password")

let containerPassword = document.querySelector("#container-password")

let charset = "qwertyuiopasdfghjklçzxcvbnm12345678890!@#$%¨&()"
let novaSenha = ""

sizePassword.innerHTML = sliderElement.value

slider.oninput = function(){
  sizePassword.innerHTML = this.value
}

function generetePassword(){
  let pass = ""
  for(let i = 0, n = charset.length; i < sliderElement.value; i++)
  {
    pass += charset.charAt(Math.floor(Math.random() * n))
  }

  containerPassword.classList.remove("hide")
  password.innerHTML = pass
  novaSenha = pass
}

function copy(){
  alert("Senha copiada com sucesso!")
  navigator.clipboard.writeText(novaSenha)
}