let form = document.getElementById("form")

if (localStorage.getItem("username") && localStorage.getItem("password")) {

}

form.addEventListener("submit", e => {
          e.preventDefault()

          let username = document.getElementById("username").value
          let password = document.getElementById("password").value

          localStorage.setItem("username", JSON.stringify(username))
          localStorage.setItem("password", JSON.stringify(password))
})