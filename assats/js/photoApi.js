const showPhotoBtn = () => {
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(res => res.json())
    .then(data =>{
        allPicture(data)
    })
}

const allPicture = (pictures) =>{
    const newContainer = document.getElementById("sabbir")
    for(const picture of pictures){
        console.log(picture)
        const div = document.createElement("div")
        div.classList.add("picture-add")
        div.innerHTML =`<h3>${picture.title}</h3>`
        newContainer.appendChild(div)
    }
}