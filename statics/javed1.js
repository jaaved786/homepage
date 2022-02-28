
function addBtnClickedFn(){    //Additon 1 (function on button clicked)
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click",function(e){
    
    var notesObj;  //Defined Variable

    let addTxt=document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if(notes== null){
         notesObj = [ ];
    }
    else{
        notesObj= JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value= "";
    console.log(notesObj);  // Corrected Var Name

})    
}


    
