// challange 1 age in days:
function ageInDays(){
 var birthday =prompt('what year were you born..Good friend?');
 var ageInDayss= (2022 -birthday)*365;
 var h1 = document.createElement('h1');
 var textAnswer =document.createTextNode('you are'+ageInDayss+'days old');
 h1.setAttribute('id','ageInDays');
 h1.appendChild(textAnswer);
 document.getElementById('flex-box-result').appendChild(h1);

}
function reset(){
    document.getElementById('ageInDays').remove();

}


function fun(){
var image = document.createElement('img'); 
var div = document.getElementById('flex-cat-gen');
image.src= "http://thecatapi.com/api/images/get?format=src&type=gif";
div.appendChild(image); 
}

    
