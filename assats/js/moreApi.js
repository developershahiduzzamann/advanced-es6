const moreApi = () =>{
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data =>{
    console.log(data)
    usersData(data)
   })
}
 const usersData = (user) =>{
    console.log(user)
 }