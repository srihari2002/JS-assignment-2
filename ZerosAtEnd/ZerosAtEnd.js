var a=[]; 
var o=[]; 
var result =[];
var n =parseInt(prompt("Enter the total number of number"));
alert(`Enter ${n} numbers one by one`)
for (let i = 0; i < n; i++){
   var b= parseInt(prompt());
  if (b==0){
    o.push(b)
  }
  else{
    a.push(b)
    
  }
}
for (let i of a) {
  result.push(i);
}
for (let i of o) {
  result.push(i);
  
}
alert(`The resultant array is ${result}`)