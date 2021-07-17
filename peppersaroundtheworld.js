function myFunction(){
    var inputVal=document.getElementById("addItemInput").value;
    var node=document.createElement("LI");
  
    var textnode=document.createTextNode(inputVal);
    node.appendChild(textnode);
    document.getElementById("shoppinglist").appendChild(node);
}






