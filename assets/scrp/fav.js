let id = new URLSearchParams(window.location.search).get("id");
let divAll = document.querySelector(".m-divs");

fetch("http://localhost:3000/Fav")
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
        divAll.innerHTML+=`
        <div class="div10">
        <div class="img-text">
            <div class="img">
                <img src="${element.img}" alt="">
            </div>
            <div class="text">
                <h3>
                   ${element.name}
                </h3>
                <p>  ${element.des}</p>
            </div>
        </div>
        <div class="num">$  ${element.price}
        <div class="btn">
        <button onclick="Fav(${element.id})">Fav</button>
        <button onclick="Delete(${element.id})">Delete</button>
      </div>
      </div>
    </div>
        `
    });
})

function Delete (id){
    axios.delete("http://localhost:3000/Fav/"+id)
    then(res=>window.location="./fav.html")
}