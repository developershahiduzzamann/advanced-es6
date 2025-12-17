
const loadUserBtn = () =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data =>{
        loadUser(data)
    })
}

const loadUser = (users) =>{
    const listItems = document.getElementById("list_Item");
    for(const user of users){
        console.log(user.name)
        const li = document.createElement("li");
        li.innerText = user.name;
        listItems.appendChild(li)
        
    }
        
        

}