/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


/* this is for the user to create a shopping list*/

function myFunctionlist(){
    var inputVal=document.getElementById("addItemInput").value;
    var node=document.createElement("LI");
  
    var textnode=document.createTextNode(inputVal);
    node.appendChild(textnode);
    document.getElementById("shoppinglist").appendChild(node);
}



/* this code is to help user determine area of garden and how many plants can fit*/
function area(length, width) {
const lengtha = parseInt(document.getElementById('length').value);
const widtha= parseInt(document.getElementById('width').value);
const areaofGarden = lengtha*widtha;
const numberofPlants=Math.floor(areaofGarden/2);


if (areaofGarden >= 1) {
  document.querySelector(".area").innerText=areaofGarden;
  document.querySelector(".noPlants").innerText=numberofPlants;


} else if (areaofGarden < 0) {
  area = Math.abs(areaofGarden);
  alert(`Please enter a number greater than zero!`);
} else if (areaofGarden === 0) {
  alert(`Please enter a number greater than zero!`);
} else {
  alert('Please enter a number!');
}  
}


