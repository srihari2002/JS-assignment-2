function myFunc() {
    var x = document.getElementById("fname").value;
    var s=x;
    let r=s.split("").reverse().join("");
    
    document.getElementById("demo").innerHTML = r;
  }