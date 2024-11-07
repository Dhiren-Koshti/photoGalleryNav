let imgDiv = document.querySelector(".imgDiv");
let btnDiv = document.querySelector(".btnDiv");
let removeActive = "";
let Images = {
    1:"https://t4.ftcdn.net/jpg/04/15/79/09/360_F_415790935_7va5lMHOmyhvAcdskXbSx7lDJUp0cfja.jpg",
    2:"https://cdn.pixabay.com/photo/2024/05/08/17/45/animal-8748794_640.jpg",
    3:"https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
    4:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh-lRGIDdYpcZBSptIvwgaTLZcMe7FdopPuNTW5u3EQSf7fq6OfOTTxf-YBJwX_w27PJ0&usqp=CAU",
    5:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvC1pGhW7_BRwnGuBguLE99tfA0faYflekCA&s",
    6:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZylLZLdEOnpA7xCFv_tEqFvcThCY70wK7Q&s",
    7:"https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg",
}

function AddImages(start,end){

    for(let i=start; i<=end; i++){
       let img = document.createElement("img");
       img.setAttribute("src",Images[i]);
       imgDiv.append(img);
    }
   
}

btnDiv.addEventListener("click",(evt) => {
    evt.preventDefault();

    if(removeActive.classList){
        removeActive.classList.remove('active');
    }
    

    if(evt.target.className == "all"){
        imgDiv.innerHTML = "";
        evt.target.classList.add('active');
        removeActive = evt.target;
        AddImages(1,7);

    }else if(evt.target.className == "Food"){
        imgDiv.innerHTML = "";
        evt.target.classList.add('active');
        removeActive = evt.target;
        AddImages(5,7);

    }else if(evt.target.className == "Animal"){
        imgDiv.innerHTML = "";
        evt.target.classList.add('active');
        removeActive = evt.target;
        AddImages(1,2);

    }else if(evt.target.className == "nature"){
        imgDiv.innerHTML = "";
        evt.target.classList.add('active');
        removeActive = evt.target;
        AddImages(3,4);

    }

})