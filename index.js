// TASK 1 -TEMPRATURE


 function Celcius(){
   let x=document.getElementById("input1").value;
  
   let cel=( (x - 32) * 5/9 ) ;
   document.getElementById("outputc").innerHTML=cel+" *C";
   
}

function Fahrenheit(){
    let y=document.getElementById("input2").value;
   
    let fah= ( ( 9*(y/5))+32 );
    document.getElementById("outputf").innerHTML=fah+" *F";
}


//TASK 2 -
let students=["karan", "charan","pawan","dimpi","tinki","pinki","guddu","neema","seema"];
console.log(students.slice(6,)); 

let toppers=students.slice(6,);

document.getElementById("top").innerHTML=toppers;


// TASK 3

var course={
  'title':'Learn to code JavaScript',
  'categories':['programming','cs','JavaScript'],
  '5_star_reviews':480,
  '4_star_reviews':80,
  '3_star_reviews':33,
  '2_star_reviews':20,
  '1_star_reviews':4
}

document.getElementById("titles").innerHTML=course.title;
document.getElementById("category").innerHTML=course.categories[2];

total=480+80+33+20+4;
per=(course["5_star_reviews"]/total)*100;
document.getElementById("percentages").innerHTML=per;


// TASK 4

var shoppingList=['apple','banana','beetroot','grapes','kiwi'];
shoppingList.pop();

document.getElementById('xx').innerHTML=shoppingList;

shoppingList.unshift('kiwi');

document.getElementById('yy').innerHTML=shoppingList;


var shoppingList2=['apple','banana','beetroot','grapes','kiwi'];

shoppingList2.splice(4,0,'cheese','eggs');
document.getElementById('added').innerHTML=shoppingList2;