
let form = document.querySelector('form');

form.addEventListener('submit',(event) => {
    let name = event.target.uname.value;
    // let number = event.target.unumber.value;
    // let email = event.target.uemail.value;

    let userData= JSON.parse(localStorage.getItem('userDetails')) ?? []

    userData.push({
        "name": name
        // "number": number,
        // "email": email
    })
    
    localStorage.setItem('userDetails', JSON.stringify(userData))
    event.target.reset()
    displayData()



    event.preventDefault();
})



let taskCard = document.querySelector(".output-child")

let displayData = ()=>{
    let userData= JSON.parse(localStorage.getItem('userDetails')) ?? []
// console.log(userData)
let result = ""
userData.forEach((element, index )=> {
    result += 
   `  <div class="task-card">
   <h2>${element.name}</h2>
   <div>
   
   <span class="remove-btn" onclick="remove(${index})">&#10060</span>
   </div>
</div>
`
});

taskCard.innerHTML= result
}
    
const done =(ele)=>{
    element.innerHTML = red
    ele.document.body.style.textDecoration="underline"
}
    
const remove =(index)=>{
    let userData= JSON.parse(localStorage.getItem('userDetails')) ?? []
    userData.splice(index, 1)
    localStorage.setItem('userDetails', JSON.stringify(userData))
    displayData()
    


}
    
const clearAll =()=>{
    let userData= JSON.parse(localStorage.getItem('userDetails')) ?? []
    userData.splice(0, userData.length)
    localStorage.setItem('userDetails', JSON.stringify(userData))
    displayData()
}

displayData()

