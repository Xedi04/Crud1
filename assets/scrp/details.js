let id = new URLSearchParams(window.location.search).get("id");
let divAll = document.querySelector(".m-divs");

fetch("http://localhost:3000/Crud/"+id)
.then(res=>res.json())
.then(data=>{

        divAll.innerHTML+=`
        <div class="div10">
        <div class="img-text">
            <div class="img">
                <img src="${data.img}" alt="">
            </div>
            <div class="text">
                <h3>
                   ${data.name}
                </h3>
                <p>  ${data.des}</p>
            </div>
        </div>
        <div class="num">$  ${data.price}
      </div>
    </div>
        `

})