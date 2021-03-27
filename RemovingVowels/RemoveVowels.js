


function removevowel(str1)
{
  str1=document.getElementById("inp").value;
  var vowList = 'aeiouAEIOU';
  var A=[];
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowList.indexOf(str1[x]) !== -1)
    {
      continue;
    }
    else{
        A.push(str1[x])
    }
  
  }
  document.getElementById("Des").innerHTML = 'After Removing vowels from the given words...';
  document.getElementById("result").innerHTML = A.join("");;
}


var a1=document.getElementById("butn");

a1.addEventListener('click',removevowel);

