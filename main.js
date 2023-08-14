var delItem = document.getElementsByClassName("delete");
var doneItem = document.getElementsByClassName("workDone");
var editItem = document.getElementsByClassName("edit");
var submitBtn = document.getElementById("btn1")
var userInput = document.getElementById("input");
var ediitDiv = document.getElementById("todoEdit")
ediitDiv.style.visibility="hidden";
var  secondInput = document.getElementById("secondInput");

function addElement(){
    var list = document.createElement("li");
    var input = document.getElementById("input");
    var inputValue = input.value;
    var text = document.createTextNode(inputValue);
    list.className="li";
    list.appendChild(text);
    document.getElementById("listDiv").appendChild(list);
    document.getElementById("input").value="";

// for start here to give power to complete tast
    var donework = document.createElement("span"); //  for done mark 
    var text_3 = document.createTextNode("done");
    donework.className="workDone";
    donework.appendChild(text_3);
    list.appendChild(donework);
    for( i = 0 ;i < doneItem.length ; i++ ){
        doneItem[i].onclick = function (){
            var div = this.parentElement;
            div.innerHTML= inputValue + " " + "done ";
            div.style.background="green";
            div.style.textDecorationLine="line-through"
        }
    }

// for edit tast 

    var editTast = document.createElement("span");
    var text_4 = document.createTextNode("edit");
    editTast.className="edit";
    editTast.appendChild(text_4);
    list.appendChild(editTast);
    for(i = 0 ; i < editItem.length; i++){
        editItem[i].onclick =function(){
         
           div4 = donework.remove();
           div5= del.remove();
           div6 = editTast.remove();
           var div3 = list.innerText;
           //console.log(div3);
           userInput.value=div3;
           div7 = list.remove(); 

        }
    }

    var del = document.createElement("span");// for delete task
    var text_1 = document.createTextNode("delete");
    del.appendChild(text_1);
    list.appendChild(del);
    del.className="delete";
    for(i = 0 ; i < delItem.length; i++ ){
        delItem[i].onclick = function (){
            var div = this.parentElement;
            div.style.display= "none";
        }
       
    }
    
}



var listSries = document.getElementsByTagName("li");
var i;
for(i = 0 ; i < listSries.length; i++){
    var del = document.createElement("span");
    var test_1 = document.createTextNode("delete")
    del.className = "delete";
    del.appendChild(test_1);
    listSries[i].appendChild(del);
}
var delItem = document.getElementsByClassName("delete");
var i;
for (i = 0; i < delItem.length; i++) {
  delItem[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var done = document.querySelector("ul");



