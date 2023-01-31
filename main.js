//{}[]


const userTemplate = document.querySelector("[template-element]")
const userCard = document.querySelector("[card-user]")
const userSearch = document.querySelector("[search-element]")



let users = []

userSearch.addEventListener("input", e=>{
    const value = e.target.value.toLowerCase()
    users.forEach(user=>{
        const isVisible = user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value)
        user.element.classList.toggle("hide",!isVisible)
    })

})

fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then(data=>{
   users =  data.map(user=>{
        const card = userTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("[card-name]")
        const body = card.querySelector("[card-email]")
        header.textContent =user.name
        body.textContent =user.email
        userCard.append(card)
        return {name: user.name, email: user.email, element:card}
    })
})
