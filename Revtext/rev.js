function revStr(){   
    var string=document.getElementById("text").value;
    let strRev=string.split("").reverse().join("");
    
    document.getElementById("result").innerHTML= strRev;
}