
async function plusfunc(id,cena){

    const liczba = parseInt(document.getElementById("cena"+id).innerHTML)
    console.log(liczba)
    const popliczba =  liczba+10
    document.getElementById("cena"+id).innerHTML = popliczba
    document.getElementById("cena"+id).style.color = "red"
   /* const pcena = cena+10

    const data = await fetch(`http://localhost/wordpresstest/wp-json/wc/v3/products/${id}?regular_price=${pcena}`,{
        method: "POST",
        headers:{
            Authorization: `Basic ${btoa("FajnyKuba784:Paruwkatoja150")}`
        }
    })
    const json = data.json()*/

}

async function minusfunc(id, cena){

    const liczba = parseInt(document.getElementById("cena"+id).innerHTML)
    const popliczba =  liczba-10
    document.getElementById("cena"+id).innerHTML = popliczba
    document.getElementById("cena"+id).style.color = "red"
   
   /* const pcena = cena-10
    console.log(cena)
    const data = await fetch(`http://localhost/wordpresstest/wp-json/wc/v3/products/${id}?regular_price=${pcena}`,{
        method: "POST",
        headers:{
            Authorization: `Basic ${btoa("FajnyKuba784:Paruwkatoja150")}`
        }
    })
    const json = data.json()*/

}

async function przeslij(id){

    const liczba = parseInt(document.getElementById("cena"+id).innerHTML)


    const data = await fetch(`http://localhost/wordpresstest/wp-json/wc/v3/products/${id}?regular_price=${liczba}`,{
        method: "POST",
        headers:{
            Authorization: `Basic ${btoa("FajnyKuba784:Paruwkatoja150")}`
        }
    })
    const json = data.json()

}

async function dodajfunc(){
    const  nazwa =   document.getElementById("nazwa").value
    const cena = document.getElementById("cena").value
    console.log(cena)
    const data = await fetch(`http://localhost/wordpresstest/wp-json/wc/v3/products?name=${nazwa}&regular_price=${cena}`,{
        method: "POST",
        headers:{
            Authorization: `Basic ${btoa("FajnyKuba784:Paruwkatoja150")}`
        }
    })
    const json = await data.json()
    console.log("zrobione")


}




async function getData(){

    const data = await fetch("http://localhost/wordpresstest/wp-json/wc/v3/products",{
    headers:{

        Authorization: `Basic ${btoa("FajnyKuba784:Paruwkatoja150")}`
    }    }
        
    )
    const json = await data.json()

    console.log(json)

    for(let i in json){
        const body = document.getElementById("body")
        const divg = document.createElement("div")
        const divgura = document.createElement("div")
        divgura.classList.add("gura")
        const divdol = document.createElement("div")
        divdol.classList.add("dol")
        divg.classList.add("glowny")
        const nazwa = document.createElement("h1")
        const cena = document.createElement("h2")
        const liczbasprzedanych = document.createElement("h3")
        const plus = document.createElement("button")
        const minus = document.createElement("button")
        const zatwiedz = document.createElement("button")
        if(json[i].price<=10){
            minus.style.backgroundColor = "black"
        }
        nazwa.innerHTML = json[i].name
        cena.innerHTML = parseInt(json[i].price)
        cena.setAttribute("id","cena"+json[i].id)
        liczbasprzedanych.innerHTML = "Liczba sprzedanych: "+ json[i].total_sales
        plus.innerHTML = "+10"  
        minus.innerHTML = "-10"
        zatwiedz.innerHTML = "Zatwiedz"
        zatwiedz.setAttribute("id","zatwiedz")
        plus.classList.add("buttony")
        plus.addEventListener('click',()=>{

            plusfunc(json[i].id , parseInt(json[i].price))

        })
        minus.classList.add("buttony")
        minus.addEventListener('click',()=>{

            minusfunc(json[i].id, parseInt(json[i].price))

        })
        zatwiedz.addEventListener('click',()=>{

            przeslij(json[i].id)

        })
        divgura.appendChild(nazwa)
        divgura.appendChild(cena)
        divgura.appendChild(liczbasprzedanych)
        divdol.appendChild(plus)
        divdol.appendChild(minus)
        divdol.appendChild(zatwiedz)
        divg.appendChild(divgura)
        divg.appendChild(divdol)
        body.appendChild(divg) 
    }
    const body = document.getElementById("body")
    const divg = document.createElement("div")
    const divgura = document.createElement("div")
    divgura.classList.add("gura")
    const divdol = document.createElement("div")
    divg.classList.add("glowny")
    divdol.classList.add("dol")
    const nazwa = document.createElement("input")
    nazwa.setAttribute("placeholder","Nazwa")
    nazwa.setAttribute("id","nazwa")
    const cena = document.createElement("input")
    cena.setAttribute("placeholder","Cena")
    cena.setAttribute("id","cena")
    const dodaj = document.createElement("button")
    dodaj.innerHTML = "DODAJ"
    dodaj.addEventListener('click', ()=>{

        dodajfunc()

    })
    dodaj.setAttribute("id","dodaj")
    divgura.appendChild(nazwa)
    divgura.appendChild(cena)
    divdol.appendChild(dodaj)
    divg.appendChild(divgura)
    divg.appendChild(divdol)
    body.appendChild(divg)
}
