const postBtn = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data =>{
        postAllData(data)
    })
}

const postAllData = (users) => {
    const divContainer = document.getElementById('div-container');
    for(const user of users){
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML=`
        <h1> ${user.userId}</h1>
        <h2>${user.id}</h2>
        <h1>${user.title}</h1>
        <p>${user.body}</p>`


        divContainer.appendChild(div)
    }
        
}
postBtn ()