const form = document.querySelector("form")
const tBody=document.querySelector("tbody")
let oldValue = JSON.parse(localStorage.getItem("USER")) ?? []
console.log(oldValue);

form.addEventListener("submit", (event) => {
    event.preventDefault()
    let obj = {
        name: event.target.name.value,
        email: event.target.eml.value,
        phone: event.target.ph.value
    }
    console.log(obj);
    oldValue.push(obj)

    localStorage.setItem("USER", JSON.stringify(oldValue))
    console.log(oldValue)
    form.reset()
    showList()
})

const showList = () => {
    let items = ""
    oldValue.forEach((value, index) => {
        items += `<tr>
                    <td>${index+1}</td>
                    <td>${value.name}</td>
                    <td>${value.email}</td>
                    <td>${value.phone}</td>
                </tr>`
    })
    tBody.innerHTML=items
}
showList()