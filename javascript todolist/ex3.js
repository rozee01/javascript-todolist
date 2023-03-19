// les éléments a manipuler dans le fichier js

const x=document.getElementById("nom");
const y=document.getElementById("content");
const z=document.getElementById("button");
const liste=document.getElementById("liste");

// les eventlistener qui vont declencher les changements

z.addEventListener("click",addelement);
x.addEventListener("input",khallih);
y.addEventListener("input",khallih);

//fonction qui ajoute l'element au fichier js

function addelement(){
    if(x.value.trim()!==""&&y.value.trim()!==""){
    let a= document.createElement("li");
    a.innerText=x.value+": "+y.value+"        ";
    liste.appendChild(a);

    //creation du bouton qui va supprimer
    
    let b=document.createElement("button");
    b.innerText="x";
    a.appendChild(b);

    // le bouton supprime l'element 

    b.addEventListener("click",()=>{
        liste.removeChild(a);
    });

    //retourner les champs vide apres ajout

    x.value="";
    y.value="";}
}
/* fonction qui ne nous permet d'ajouter un element que si les champs ne sont
 pas vides et ne contiennet pas des espaces*/
function khallih(){
    if(x.value.trim()!==""&&y.value.trim()!==""){
        z.disabled=false;
    }
    else{
        z.disabled=true;
    }
}