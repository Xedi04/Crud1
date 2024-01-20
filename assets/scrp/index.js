let divAll = document.querySelector(".m-divs");
let Sort = document.querySelector("#sort");
let Search = document.querySelector("#search");
let filterArr = []
let copyArr = []

function Show() {
    fetch("http://localhost:3000/Crud")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            copyArr = data;
            divAll.innerHTML = ""
            filterArr = filterArr.length || Search.value ? filterArr : data
            filterArr.forEach(element => {
                divAll.innerHTML += `
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
                        <button  onclick="Details(${element.id})">Detal</button>
                      </div>
                      </div>
                    </div>
        `
            });
        })
}
Show()

Search.addEventListener("input", (e)=>{
    filterArr=copyArr;
    filterArr=filterArr.filter((el)=>
    el.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    )
    Show()
})

Sort.addEventListener("change", (e)=>{
    if(e.target.value==="as"){
        filterArr.sort((a,b)=>a.price-b.price)
    }else if(e.target.value==="des"){
        filterArr.sort((a,b)=>b.price-a.price)
    }else{
        filterArr=[]
    }
    Show()
})

function Fav (id){
    axios.get("http://localhost:3000/Crud/"+id)
    .then(res=>{
        console.log(res.data);
        axios.post("http://localhost:3000/Fav", res.data)
    }).then(res=>window.location=`./fav.html`)
}

function Details (id){
    window.location=`./details.html?id=${id}`
}