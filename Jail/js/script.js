const submit = document.getElementById("submit");

/*submit.addEventListener( "click", display);
function display() {
    let firstName = document.getElementById("first_name").value;
    let lastName = document.getElementById("last_name").value;
    let name = firstName + " " + lastName;
    console.log(name);
    document.getElementById("affirm").style.display = "block";
    document.getElementById("affirm").innerHTML = name;
}*/

//submit.addEventListener( "click", myFunction);
function myFunction() {
    let firstName = document.getElementById("first_name").value;
    let lastName = document.getElementById("last_name").value;
    let name = firstName + " " + lastName;
   // confirm("confirm your Purchase \nEither OK or Cancel.");
  if (confirm(name) == true) {
      name = "request submitted";
  }else{
      name = " "
  }
  document.getElementById("affirm").style.display = "block";
    document.getElementById("affirm").innerHTML = name;

  }