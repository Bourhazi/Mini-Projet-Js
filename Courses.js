//afficher les courses : 
function manupCourses(Image,titre,prix){
    let div1= document.querySelector('#manup');
    div2 = document.createElement('div'),
    img= document.createElement('img'),
    p = document.createElement('p'),
    p.setAttribute('id','p');
    span= document.createElement('span');
    span.setAttribute('id','span');
    div2.setAttribute('class','card p-0 text-center col-3 me-3 mb-3');
    div2.setAttribute('id','divcouse');
    div2.setAttribute('style','width: 18em;');
    img.setAttribute('class','card-img-top');
    img.src=Image;
    let contenu = document.createTextNode(titre);
    p.appendChild(contenu);
    let contenu2 = document.createTextNode(prix);
    span.appendChild(contenu2);
    div2.appendChild(img);
    div2.appendChild(p);
    div2.appendChild(span);
    div1.append(div2);


}

courses.forEach(v => {
    manupCourses(v.image,v.title,v.price);
});

//afficher les categories :

function catCourses(categorie){
    divcat= document.querySelector('#cat');
    ul = document.getElementById('list');
    li = document.createElement('li');
    a = document.createElement('a');
    catdiv = document.getElementById('catdiv');
    a.href="#";
    a.setAttribute('id','a');
    a.setAttribute('onclick',`filtrerPar('${categorie}')`)
    //a.setAttribute('onclick','filtreCategory()');
    contenu3 = document.createTextNode(categorie);
    a.appendChild(contenu3);
    li.appendChild(a);
    ul.appendChild(li);
    catdiv.append(ul);
    console.log(i);   
}

//filtrage Categories  : 

function onlyUnique(cat,index,self) {
    return self.indexOf(cat) === index;
}

var cat=[];
var cat1=[];
var catRep=[];
for(i=0;i<courses.length;i++){
cours =(courses[i].category).toLowerCase();
cat.push(cours);
}
catRep.push(cat.filter(onlyUnique));
catrep1=catRep.shift();

catrep1.forEach(c =>{
catCourses(c);
});


function filtrerPar(c){


let div1= document.querySelector('#manup');
div1.innerHTML="";

console.log(c);
if(c.toUpperCase()=='ALL'){
   courses.forEach((v)=>{
       manupCourses(v.image,v.title,v.price);
   })
}

else{
   courses.forEach((v)=>{
       if(c.toUpperCase()==v.category.toUpperCase()){
           manupCourses(v.image,v.title,v.price);
       }
   })
}

}


//Recherche par nom :

 function SearchFunction() {
    var input, filter,i, txtValuep,txtValuespan,pa,spana,div1,div2;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();  
    div1 = document.getElementById('manup');
    div2 = div1.getElementsByTagName("div");
    console.log(div2.length);
    for (i = 0; i < courses.length; i++) {
        var pa     
        pa = div2[i].getElementsByTagName("p")[0];
        spana = div2[i].getElementsByTagName("span")[0];     
        txtValuep = pa.innerText;
        //console.log(txtValuep);
        txtValuespan = spana.innerText;
            if ((txtValuep.toUpperCase().indexOf(filter) > -1)) {
                        console.log(div2[i]);
                        div2[i].style.display = "";
                    } else {
                        div2[i].style.display = "none"; 
                }
    }
}

//Recherche par Prix : 
function SearchValue() {

    var input, filter,i, txtValuep,txtValuespan,pa,spana,div1,div2;
    input = document.getElementById('amount').value;
    div1 = document.getElementById('manup');
    div2 = div1.getElementsByTagName("div");

    for (i = 0; i < courses.length; i++) {
        spana = div2[i].getElementsByTagName("span")[0];
        //console.log(txtValuep);
        txtValuespan = spana.innerText;
        console.log(input);
        console.log(parseInt(txtValuespan));     
            if (input >= parseFloat(txtValuespan)) {
                        //console.log(div2[i]);
                        div2[i].style.display = "";
                    } else {
                        div2[i].style.display = "none"; 
                }
    }
}









