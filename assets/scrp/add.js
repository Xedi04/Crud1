let id = new URLSearchParams(window.location.search).get("id");
let Form = document.querySelector("#form");
let imgDiv = document.querySelector("#imgdiv");
let fileImg = document.querySelector("#file");
let Name = document.querySelector("#name");
let Des = document.querySelector("#des");
let Price = document.querySelector("#price");
let P1 = document.querySelector("#p1");
let P2 = document.querySelector("#p2");
let P3 = document.querySelector("#p3");
let P4 = document.querySelector("#p4");
let Table = document.querySelector("table");


fileImg.addEventListener("input", (e) => {
    let file = e.target.files[0]
    if (file) {
        let reader = new FileReader;
        reader.readAsDataURL(file);
        reader.onload = function () {
            imgDiv.src = reader.result
        }
    }
})

Form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (fileImg.value !=="" && Price.value[0] !=="-" && Name.value !=="" && Des.value !=="" && Price.value !=="") {
        axios.post("http://localhost:3000/Crud", {
            name: Name.value,
            des: Des.value,
            price: Price.value,
            img: imgDiv.src
        }).then(res => window.location = "./index.html")

    }else if(fileImg.value==""){
            P1.style.display="flex"
        }else if (Name.value==""){
            P2.style.display="flex"
        }else if (Price.value==""){
            P3.style.display="flex"
        }else {
            P4.style.display="flex"
        }
        
    }
    
)

fetch("http://localhost:3000/Crud")
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
        Table.innerHTML+=`
        <tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.des}</td>
        <td>${element.price}</td>
        <td> <button onclick="Delete(${element.id})">Delete</button></td>
    </tr>
        `
    });
})

function Delete (id){
    axios.delete("http://localhost:3000/Crud/"+id)
    then(res=>window.location="./add.html")
}