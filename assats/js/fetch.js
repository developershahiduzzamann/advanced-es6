
 const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => {
    console.log(data)
})
 }

 const allDataLOad = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(rec => rec.json())
    .then(json => console.log(json))
 }