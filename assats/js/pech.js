const url = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/albums'
];
Promise.all(url.map(url =>{
    return fetch(url).then(res => res.json()).then
    (data => data)
}))
.then(res => res)
.then(data => console.log(data))