function revWords() {
    var result = document.getElementById("result");
    var rev=document.getElementById("text").value
        var display = "";
        var separate = rev.split(" ");
        for (var i = 0; i < separate.length; i++) {
          if (display) display += ' ';
          if (separate[i].length >= 5) {
            display += separate[i].split("").reverse().join("");
          } else {
            display += separate[i];
          }
        }
        result.innerHTML= display;
      }