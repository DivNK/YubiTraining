const stats =[
    {
        name:"Tom",
        sport:"Cricket",
        Rank:10
    },
    {
        name:"Ronaldo",
        sport:"TT",
        Rank:1
    },
    {
        name:"Micky",
        sport:"Basketball",
        Rank:7
    },
    {
        name:"Chang",
        sport:"TT",
        Rank:1
    },
    {
        name:"Mike",
        sport:"Cricket",
        Rank:10
    },
    {
        name:"Missi",
        sport:"Footfall",
        Rank:1
    },
    {
        name:"Peter",
        sport:"Basketball",
        Rank:7
    },
    {
        name:"Louis",
        sport:"TT",
        Rank:1
    },
]
function display()
{
console.log("HI")
 const Elenxt=document.getElementById("nxt")
 

 while (Elenxt.firstChild)
 {
    Elenxt.removeChild(Elenxt.firstChild)
 }
const Elein=document.getElementById("nmin")
const Elespin=document.getElementById("spin")

var arrayLength = stats.length;

var frst=true
for (var i = 0; i < arrayLength; i++) {
    let Ele1=document.createElement("tr")

if( Elein.value!=""){
     if(stats[i].name==Elein.value )
    {
    if(frst)
    {frst=false
    const eletr=document.createElement("tr")
    const eletd=document.createElement("td")
    eletd.innerHTML="Search Results"
    eletd.colSpan=3
    eletr.appendChild(eletd)
    Elenxt.appendChild(eletr)
    const Elenth1=document.createElement("th")
    const Elenth2=document.createElement("th")
    const Elenth3=document.createElement("th")
 
    Elenth1.innerHTML="Name"
    Elenth2.innerHTML="Sport"
    Elenth3.innerHTML="Rank"
    Elenth1.className="fmt"
    Elenth2.className="fmt"
    Elenth3.className="fmt"
    Elenxt.appendChild(Elenth1)
    Elenxt.appendChild(Elenth2)
    Elenxt.appendChild(Elenth3)
    console.log(i)
    }
    
    const Ele2=document.createElement("td")

    const Ele3=document.createElement("td")
    const Ele4=document.createElement("td")
    Ele2.innerHTML=stats[i].name
    Ele3.innerHTML=stats[i].sport
    Ele4.innerHTML=stats[i].Rank
    Ele2.className="fmt"
    Ele3.className="fmt"
    Ele4.className="fmt"
    console.log("Element "+Ele2.innerHTML);
    Ele1.appendChild(Ele2)
    Ele1.appendChild(Ele3)
    Ele1.appendChild(Ele4)
} }else{
if(stats[i].sport==Elespin.value && Elespin.value!="")
{ if(frst)
    {frst=false
        const eletr=document.createElement("tr")
    const eletd=document.createElement("td")
    eletd.innerHTML="Search Results"
    eletd.colSpan=3
    eletr.appendChild(eletd)
    Elenxt.appendChild(eletr)
    const Elenth1=document.createElement("th")
    const Elenth2=document.createElement("th")
    const Elenth3=document.createElement("th")
    Elenth1.innerHTML="Name"
    Elenth2.innerHTML="Sport"
    Elenth3.innerHTML="Rank"
    Elenth1.className="fmt"
    Elenth2.className="fmt"
    Elenth3.className="fmt"
    Elenxt.appendChild(Elenth1)
    Elenxt.appendChild(Elenth2)
    Elenxt.appendChild(Elenth3)
    }
    console.log("Array "+stats[i].name);
    const Ele2=document.createElement("td")

    const Ele3=document.createElement("td")
    const Ele4=document.createElement("td")
    Ele2.innerHTML=stats[i].name
    Ele3.innerHTML=stats[i].sport
    Ele4.innerHTML=stats[i].Rank
    Ele2.className="fmt"
    Ele3.className="fmt"
    Ele4.className="fmt"
    console.log("Element "+Ele2.innerHTML);
    Ele1.appendChild(Ele2)
    Ele1.appendChild(Ele3)
    Ele1.appendChild(Ele4)
}   }
Elenxt.appendChild(Ele1)
console.log("display"+stats[i]);

}
if (frst)
{
    Elenxt.innerHTML=`<div>No Players Found</div>` 
}
else{
    // Elenxt.innerHTML=`<div>Search Results</div>` 
}
}
function addnm()
{
    const Elenxt=document.getElementById("nxt")
const Elein=document.getElementById("nmin")
const Elespin=document.getElementById("spin")
const Elrkin=document.getElementById("rkin")
var arrayElenm=Elein.value
var arrayElesp=Elespin.value
var arrayElerk=Elrkin.value
if(Elein.value!="" && Elespin.value!="" && Elrkin.value!="")
{

    stats.push({name:arrayElenm,sport:arrayElesp,Rank:arrayElerk})
    console.log("test")
    Elenxt.innerHTML=`<div class="test">Player added</div>` 

}
else
{
    alert("Fill all values")
}
Elein.value=""
Elespin.value=""
Elrkin.value=""

}
function clear()
{
    console.log("ok")
    const Elenxt=document.getElementById("nxt")

    Elenxt.innerHTML=``

}