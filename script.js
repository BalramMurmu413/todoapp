



let userDetails = document.querySelector("form").addEventListener("submit", (event) => {
    let userName= document.querySelector(".userName").value
    let userNumber= document.querySelector(".userNumber").value
    let UserEmail= document.querySelector(".userEmail").value
    console.log(userName, userNumber, UserEmail)
    event.preventDefault()
    reset(FormData)
})
 

localStorage.setItem("user" , userDetails)

