
const btn = document.querySelector('#add')

const valInput = document.querySelector("#inpt")


const listSite = document.querySelector("#list")

let arrSite = []
load()



function addBtn()
{
    
    if (valInput.value.trim() ==="")
        return

    arrSite.push(valInput.value)
    save()
    listSite.innerHTML=""
    arrSite.forEach(e=>drawElem(e))
    console.log(valInput.value)
    valInput.value= ""
}

function save()
{
    localStorage.setItem("sitelist", arrSite.toString())
    
}

function load()
{
    let tmp = localStorage.getItem("sitelist")
    
    if (!tmp)  return 
    tmp= tmp.split(",")
    
  
    // console.log(tmp)
    arrSite = tmp
    arrSite.forEach(e=>drawElem(e))

}

function drawElem(value)
{
    let elem = document.createElement("li")
    elem.innerText = value
    listSite.append(elem)

}

btn.addEventListener("click", addBtn)
valInput.addEventListener("keypress", (e)=> {
if (e.key === "Enter") {
    addBtn()
} 
})