
function dropMenu() {
    document.getElementById("clothesMenu").classList.toggle("show");
}
  

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDrop = dropdowns[i];
        if (openDrop.classList.contains('show')) {
          openDrop.classList.remove('show');
        }
      }
    }
}


var tipDiv = document.querySelectorAll('#tip1, #tip2, #tip3, #tip4, #tip5, #tip6, #tip7, #tip8');
var iconColor = document.getElementById("st1");
var pantColor = document.getElementById("pant1");
var coatColor = document.getElementById("coat1");
var sweaterColor = document.getElementById("sweater0");

const whiteDefault = "#FFFFFF";


function showDivshirt() {
  
  document.getElementById('shirt').style.display = "flex";
  document.getElementById('pants').style.display = "none";
  document.getElementById('coat').style.display = "none";
  document.getElementById('sweater').style.display = "none";
  document.getElementById("shirt-form").reset();
  iconColor.style.fill = whiteDefault;

  
  tipDiv.forEach(function (div) {
      div.style.display = 'none';
    });

}


function showDivpants() {
  document.getElementById('pants').style.display = "flex";
  document.getElementById('shirt').style.display = "none";
  document.getElementById('coat').style.display = "none";
  document.getElementById('sweater').style.display = "none";
  document.getElementById("pants-form").reset();
  pantColor.style.fill = whiteDefault;
  
  for (var i = 0; i < tipDiv.length; i++) {
    tipDiv[i].style.display = 'none';}
}

function showDivcoat() {
  document.getElementById('coat').style.display = "flex";
  document.getElementById('pants').style.display = "none";
  document.getElementById('shirt').style.display = "none";
  document.getElementById('sweater').style.display = "none";
  document.getElementById("coat-form").reset();
  coatColor.style.fill = whiteDefault;
  
  tipDiv.forEach(function (div) {
    div.style.display = 'none';
  });
}



function showDivsweater() {
  document.getElementById('sweater').style.display = "flex";
  document.getElementById('coat').style.display = "none";
  document.getElementById('pants').style.display = "none";
  document.getElementById('shirt').style.display = "none";
  document.getElementById("sweater-form").reset();
  sweaterColor.style.fill = whiteDefault;
  
  tipDiv.forEach(function (div) {
    div.style.display = 'none';
  });
}



const shirtSubmitButton = document.getElementById('shirt-submit');
const pantsSubmitButton = document.getElementById('pants-submit');
const coatSubmitButton = document.getElementById('coat-submit');
const sweaterSubmitButton = document.getElementById('sweater-submit');

const shakeBucket = document.getElementById('bucketpic');
const rotateWash = document.getElementById('washerpic');
const rotateDry = document.getElementById('dryerpic');



shirtSubmitButton.addEventListener('click', function() {
  if (document.getElementById('topb').style.display !== "none") {
    showSort();
    setTimeout(function() {
      shakeBucket.classList.add('animate');
      setTimeout(function() {
        shakeBucket.classList.remove('animate');
      }, 1000);
    });

    

  } else if (document.getElementById('midb').style.display !== "none") {
    showWash();
    setTimeout(function() {
      rotateWash.classList.add('animate');
      setTimeout(function() {
        rotateWash.classList.remove('animate');
      }, 1000);});

  } else if (document.getElementById('lastb').style.display !== "none") {
    showDry();
    setTimeout(function() {
      rotateDry.classList.add('animate');
      setTimeout(function() {
        rotateDry.classList.remove('animate');
      }, 1000);});
  }
});




pantsSubmitButton.addEventListener('click', function() {
  if (document.getElementById('topb').style.display !== "none") {
    showpantsSort();
    setTimeout(function() {
      shakeBucket.classList.add('animate');
      setTimeout(function() {
        shakeBucket.classList.remove('animate');
      }, 1000);
    });

  
    
  } else if (document.getElementById('midb').style.display !== "none") {
    showWash();
    setTimeout(function() {
      rotateWash.classList.add('animate');
      setTimeout(function() {
        rotateWash.classList.remove('animate');
      }, 1000);});


  } else if (document.getElementById('lastb').style.display !== "none") {
    showDry();
    setTimeout(function() {
      rotateDry.classList.add('animate');
      setTimeout(function() {
        rotateDry.classList.remove('animate');
      }, 1000);});
  }
});



coatSubmitButton.addEventListener('click', function() {
  if (document.getElementById('topb').style.display !== "none") {
    showcoatSort();
    setTimeout(function() {
      shakeBucket.classList.add('animate');
      setTimeout(function() {
        shakeBucket.classList.remove('animate');
      }, 1000);
    });


  } else if (document.getElementById('midb').style.display !== "none") {
    showWash();
    setTimeout(function() {
      rotateWash.classList.add('animate');
      setTimeout(function() {
        rotateWash.classList.remove('animate');
      }, 1000);});


  } else if (document.getElementById('lastb').style.display !== "none") {
    showDry();
    setTimeout(function() {
      rotateDry.classList.add('animate');
      setTimeout(function() {
        rotateDry.classList.remove('animate');
      }, 1000);});
  }
});



sweaterSubmitButton.addEventListener('click', function() {
  if (document.getElementById('topb').style.display !== "none") {
    showsweaterSort();
    setTimeout(function() {
      shakeBucket.classList.add('animate');
      setTimeout(function() {
        shakeBucket.classList.remove('animate');
      }, 1000);
    });


  } else if (document.getElementById('midb').style.display !== "none") {
    showWash();
    setTimeout(function() {
      rotateWash.classList.add('animate');
      setTimeout(function() {
        rotateWash.classList.remove('animate');
      }, 1000);});


  } else if (document.getElementById('lastb').style.display !== "none") {
    showDry();
    setTimeout(function() {
      rotateDry.classList.add('animate');
      setTimeout(function() {
        rotateDry.classList.remove('animate');
      }, 1000);});
  }
});




function showSort() {
  var colorInputs = document.querySelectorAll("#color-option-shirt");
  var darkColors = ['red', 'blue', 'black', 'green', 'brown'];
  var noValue = ['select'];
  
  
  for (var i = 0; i < colorInputs.length; i++) {
    if (noValue.includes(colorInputs[i].value)) {
      document.getElementById('tip1').style.display = "none";
      document.getElementById('tip2').style.display = "none";
      document.getElementById('tip3').style.display = "none";
      document.getElementById('tip4').style.display = "none";
      document.getElementById('tip5').style.display = "none";
      document.getElementById('tip6').style.display = "none";
      document.getElementById('tip7').style.display = "none";
      document.getElementById('tip8').style.display = "none";
      return;
    }
    if (!darkColors.includes(colorInputs[i].value)) {
      document.getElementById('tip1').style.display = "none";
      document.getElementById('tip2').style.display = "flex";
      document.getElementById('tip3').style.display = "none";
      document.getElementById('tip4').style.display = "none";
      document.getElementById('tip5').style.display = "none";
      document.getElementById('tip6').style.display = "none";
      document.getElementById('tip7').style.display = "none";
      document.getElementById('tip8').style.display = "none";
      return;
    }
    if (darkColors.includes(colorInputs[i].value)) {
      document.getElementById('tip1').style.display = "flex";
      document.getElementById('tip2').style.display = "none";
      document.getElementById('tip3').style.display = "none";
      document.getElementById('tip4').style.display = "none";
      document.getElementById('tip5').style.display = "none";
      document.getElementById('tip6').style.display = "none";
      document.getElementById('tip7').style.display = "none";
      document.getElementById('tip8').style.display = "none";
      return;
    }
  }
  
}





function showpantsSort() {
  var colorInputs = document.querySelectorAll("#color-option-pants");
  var darkColors = ['red', 'jeans', 'black', 'green', 'brown'];
  var noValue = ['select'];
  
  for (var i = 0; i < colorInputs.length; i++) {
    if (noValue.includes(colorInputs[i].value)) {
      document.getElementById('tip1').style.display = "none";
      document.getElementById('tip2').style.display = "none";
      document.getElementById('tip3').style.display = "none";
      document.getElementById('tip4').style.display = "none";
      document.getElementById('tip5').style.display = "none";
      document.getElementById('tip6').style.display = "none";
      document.getElementById('tip7').style.display = "none";
      document.getElementById('tip8').style.display = "none";
      return;
    }
    if (!darkColors.includes(colorInputs[i].value)) {
      document.getElementById('tip1').style.display = "none";
      document.getElementById('tip2').style.display = "flex";
      document.getElementById('tip3').style.display = "none";
      document.getElementById('tip4').style.display = "none";
      document.getElementById('tip5').style.display = "none";
      document.getElementById('tip6').style.display = "none";
      document.getElementById('tip7').style.display = "none";
      document.getElementById('tip8').style.display = "none";
      return;
    }
    if (darkColors.includes(colorInputs[i].value)) {
      document.getElementById('tip1').style.display = "flex";
      document.getElementById('tip2').style.display = "none";
      document.getElementById('tip3').style.display = "none";
      document.getElementById('tip4').style.display = "none";
      document.getElementById('tip5').style.display = "none";
      document.getElementById('tip6').style.display = "none";
      document.getElementById('tip7').style.display = "none";
      document.getElementById('tip8').style.display = "none";
      return;
    }
  }
  
}
 

function showcoatSort() {
  var colorInputs = document.querySelectorAll("#color-option-coat");
  var darkColors = ['red', 'denim', 'black', 'green', 'brown'];
  var noValue = ['select'];
  
  for (var i = 0; i < colorInputs.length; i++) {
    if (noValue.includes(colorInputs[i].value)) {
      document.getElementById('tip1').style.display = "none";
      document.getElementById('tip2').style.display = "none";
      document.getElementById('tip3').style.display = "none";
      document.getElementById('tip4').style.display = "none";
      document.getElementById('tip5').style.display = "none";
      document.getElementById('tip6').style.display = "none";
      document.getElementById('tip7').style.display = "none";
      document.getElementById('tip8').style.display = "none";
      return;
    }
    if (!darkColors.includes(colorInputs[i].value)) {
      document.getElementById('tip1').style.display = "none";
      document.getElementById('tip2').style.display = "flex";
      document.getElementById('tip3').style.display = "none";
      document.getElementById('tip4').style.display = "none";
      document.getElementById('tip5').style.display = "none";
      document.getElementById('tip6').style.display = "none";
      document.getElementById('tip7').style.display = "none";
      document.getElementById('tip8').style.display = "none";
      return;
    }
    if (darkColors.includes(colorInputs[i].value)) {
      document.getElementById('tip1').style.display = "flex";
      document.getElementById('tip2').style.display = "none";
      document.getElementById('tip3').style.display = "none";
      document.getElementById('tip4').style.display = "none";
      document.getElementById('tip5').style.display = "none";
      document.getElementById('tip6').style.display = "none";
      document.getElementById('tip7').style.display = "none";
      document.getElementById('tip8').style.display = "none";
      return;
    }
  }
  
}

function showsweaterSort() {
  var colorInputs = document.querySelectorAll("#color-option-sweater");
  var darkColors = ['red', 'blue', 'black', 'green', 'brown'];
  var noValue = ['select'];
  
  for (var i = 0; i < colorInputs.length; i++) {
    if (noValue.includes(colorInputs[i].value)) {
      document.getElementById('tip1').style.display = "none";
      document.getElementById('tip2').style.display = "none";
      document.getElementById('tip3').style.display = "none";
      document.getElementById('tip4').style.display = "none";
      document.getElementById('tip5').style.display = "none";
      document.getElementById('tip6').style.display = "none";
      document.getElementById('tip7').style.display = "none";
      document.getElementById('tip8').style.display = "none";
      return;
    }
    if (!darkColors.includes(colorInputs[i].value)) {
      document.getElementById('tip1').style.display = "none";
      document.getElementById('tip2').style.display = "flex";
      document.getElementById('tip3').style.display = "none";
      document.getElementById('tip4').style.display = "none";
      document.getElementById('tip5').style.display = "none";
      document.getElementById('tip6').style.display = "none";
      document.getElementById('tip7').style.display = "none";
      document.getElementById('tip8').style.display = "none";
      return;
    }
    if (darkColors.includes(colorInputs[i].value)) {
      document.getElementById('tip1').style.display = "flex";
      document.getElementById('tip2').style.display = "none";
      document.getElementById('tip3').style.display = "none";
      document.getElementById('tip4').style.display = "none";
      document.getElementById('tip5').style.display = "none";
      document.getElementById('tip6').style.display = "none";
      document.getElementById('tip7').style.display = "none";
      document.getElementById('tip8').style.display = "none";
      return;
    }
  }
  
}



function showWash() {
  var cottonInputs = document.querySelectorAll("#cotton-shirt, #cotton-pants, #cotton-coat, #cotton-sweater");
  var polyInputs = document.querySelectorAll("#poly-shirt, #poly-pants, #poly-coat, #poly-sweater");
  var acrylicInputs = document.querySelectorAll("#acrylic-shirt, #acrylic-pants, #acrylic-coat, #acrylic-sweater");
  for (var i = 0; i < cottonInputs.length; i++){
    if (cottonInputs[i].value < 20 && cottonInputs[i].value > 0 && cottonInputs[i].value !== "") {
      document.getElementById('tip1').style.display = "none";
      document.getElementById('tip2').style.display = "none";
      document.getElementById('tip3').style.display = "flex";
      document.getElementById('tip4').style.display = "none";
      document.getElementById('tip5').style.display = "none";
      document.getElementById('tip6').style.display = "none";
      document.getElementById('tip7').style.display = "none";
      document.getElementById('tip8').style.display = "none";
      return; 
    } else if (cottonInputs[i].value > 19 && cottonInputs[i].value < 100) {
    document.getElementById('tip1').style.display = "none";
    document.getElementById('tip2').style.display = "none";
    document.getElementById('tip3').style.display = "none";
    document.getElementById('tip4').style.display = "flex";
    document.getElementById('tip5').style.display = "none";
    document.getElementById('tip6').style.display = "none";
    document.getElementById('tip7').style.display = "none";
    document.getElementById('tip8').style.display = "none";
    return true;
  }else if (cottonInputs[i].value > 99 && cottonInputs[i].value <101) {
    document.getElementById('tip1').style.display = "none";
    document.getElementById('tip2').style.display = "none";
    document.getElementById('tip3').style.display = "none";
    document.getElementById('tip4').style.display = "none";
    document.getElementById('tip5').style.display = "flex";
    document.getElementById('tip6').style.display = "none";
    document.getElementById('tip7').style.display = "none";
    document.getElementById('tip8').style.display = "none";
    return true;
  }}

  for (var ii = 0; ii < polyInputs.length; ii++) {
    if (polyInputs[ii].value > 40 && polyInputs[i].value < 80 ) {
      document.getElementById('tip1').style.display = "none";
      document.getElementById('tip2').style.display = "none";
      document.getElementById('tip3').style.display = "flex";
      document.getElementById('tip4').style.display = "none";
      document.getElementById('tip5').style.display = "none";
      document.getElementById('tip6').style.display = "none";
      document.getElementById('tip7').style.display = "none";
      document.getElementById('tip8').style.display = "none";}
      else if (polyInputs[ii].value > 80)  {
        document.getElementById('tip1').style.display = "none";
        document.getElementById('tip2').style.display = "none";
        document.getElementById('tip3').style.display = "none";
        document.getElementById('tip4').style.display = "flex";
        document.getElementById('tip5').style.display = "none";
        document.getElementById('tip6').style.display = "none";
        document.getElementById('tip7').style.display = "none";
        document.getElementById('tip8').style.display = "none";  
      }
  }

  for (var o = 0; o < acrylicInputs.length; o++) {
    if (acrylicInputs[o].value > 50) {
      document.getElementById('tip1').style.display = "none";
      document.getElementById('tip2').style.display = "none";
      document.getElementById('tip3').style.display = "none";
      document.getElementById('tip4').style.display = "none";
      document.getElementById('tip5').style.display = "none";
      document.getElementById('tip6').style.display = "flex";
      document.getElementById('tip7').style.display = "none";
      document.getElementById('tip8').style.display = "none";   
    }
  }
}






function showDry() {
    if ( document.getElementById('sweater').style.display !== "none" || document.getElementById('pants').style.display !== "none") {
      document.getElementById('tip1').style.display = "none";
      document.getElementById('tip2').style.display = "none";
      document.getElementById('tip3').style.display = "none";
      document.getElementById('tip4').style.display = "none";
      document.getElementById('tip5').style.display = "none";
      document.getElementById('tip6').style.display = "none";
      document.getElementById('tip7').style.display = "none";
      document.getElementById('tip8').style.display = "flex";
  

  } else{
  
    document.getElementById('tip1').style.display = "none";
    document.getElementById('tip2').style.display = "none";
    document.getElementById('tip3').style.display = "none";
    document.getElementById('tip4').style.display = "none";
    document.getElementById('tip5').style.display = "none";
    document.getElementById('tip6').style.display = "none";
    document.getElementById('tip7').style.display = "flex";
    document.getElementById('tip8').style.display = "none";

}}







function showDivwash() {
  var midbDiv = document.getElementById('midb');
  var midDiv = document.getElementById('mid');
  var topbDiv = document.getElementById('topb');
  var topDiv = document.getElementById('top');
  var lastDiv = document.getElementById('last');
  var lastbDiv = document.getElementById('lastb');
  var washpicDiv = document.getElementById('washerpic');
  var sortpicDiv = document.getElementById('bucketpic');
  var drypicDiv = document.getElementById('dryerpic');
  var tipDiv = document.querySelectorAll('#tip1, #tip2, #tip3, #tip4, #tip5, #tip6,#tip7,#tip8');


  if(midDiv.style.display === 'none'){
    midbDiv.style.display = 'none';
    midDiv.style.display= 'block';
    topbDiv.style.display= 'block';
    topDiv.style.display='none';
    lastDiv.style.display='block';
    lastbDiv.style.display='none';
    washpicDiv.style.display = 'none';
    sortpicDiv.style.display = 'block';
    drypicDiv.style.display = 'none';
    tipDiv.forEach(function (div) {
        div.style.display = 'none';
      });
  }else{
    midbDiv.style.display = 'block';
    midDiv.style.display= 'none';
    topbDiv.style.display= 'none';
    topDiv.style.display='block';
    lastDiv.style.display='block';
    lastbDiv.style.display='none';
    washpicDiv.style.display = 'block';
    sortpicDiv.style.display = 'none';
    drypicDiv.style.display = 'none';
    tipDiv.forEach(function (div) {
      div.style.display = 'none';
    });

  } 
  
}









function showDivdry() {
  var midbDiv = document.getElementById('midb');
  var midDiv = document.getElementById('mid');
  var topbDiv = document.getElementById('topb');
  var topDiv = document.getElementById('top');
  var lastDiv = document.getElementById('last');
  var lastbDiv = document.getElementById('lastb');
  var washpicDiv = document.getElementById('washerpic');
  var sortpicDiv = document.getElementById('bucketpic');
  var drypicDiv = document.getElementById('dryerpic');
  var tipDiv = document.querySelectorAll('#tip1, #tip2, #tip3, #tip4, #tip5, #tip6,#tip7,#tip8');


  if (lastDiv.style.display === 'none') {
    midbDiv.style.display = 'none';
    midDiv.style.display= 'block';
    topbDiv.style.display= 'block';
    topDiv.style.display='none';
    lastDiv.style.display='block';
    lastbDiv.style.display='none';
    washpicDiv.style.display = 'none';
    sortpicDiv.style.display = 'block';
    drypicDiv.style.display = 'none';
    tipDiv.forEach(function (div) {
      div.style.display = 'none';
    });


  } else {
    midbDiv.style.display = 'none';
    midDiv.style.display= 'block';
    topbDiv.style.display= 'none';
    topDiv.style.display='block';
    lastDiv.style.display='none';
    lastbDiv.style.display='block';
    washpicDiv.style.display = 'none';
    sortpicDiv.style.display = 'none';
    drypicDiv.style.display = 'block';
    tipDiv.forEach(function (div) {
      div.style.display = 'none';
    });

  }
}


function showDivhome() {
  var midbDiv = document.getElementById('midb');
  var midDiv = document.getElementById('mid');
  var topbDiv = document.getElementById('topb');
  var topDiv = document.getElementById('top');
  var lastDiv = document.getElementById('last');
  var lastbDiv = document.getElementById('lastb');
  var washpicDiv = document.getElementById('washerpic');
  var sortpicDiv = document.getElementById('bucketpic');
  var drypicDiv = document.getElementById('dryerpic');
  var tipDiv = document.querySelectorAll('#tip1, #tip2, #tip3, #tip4, #tip5, #tip6,#tip7,#tip8');



  if (topbDiv.style.display === 'none') {
    midbDiv.style.display = 'none';
    midDiv.style.display= 'block';
    topbDiv.style.display= 'block';
    topDiv.style.display='none';
    lastDiv.style.display='block';
    lastbDiv.style.display='none';
    washpicDiv.style.display = 'none';
    sortpicDiv.style.display = 'block';
    drypicDiv.style.display = 'none';
    tipDiv.forEach(function (div) {
      div.style.display = 'none';
    });
  }else {
    midbDiv.style.display = 'none';
    midDiv.style.display= 'block';
    topbDiv.style.display= 'none';
    topDiv.style.display='block';
    lastDiv.style.display='block';
    lastbDiv.style.display='none';
    washpicDiv.style.display = 'none';
    sortpicDiv.style.display = 'none';
    drypicDiv.style.display = 'none';
    tipDiv.forEach(function (div) {
      div.style.display = 'none';
    });
  }
}



const red = "#C76565";
const blue = "#608CCF";
const white = "#FBFAF1";
const black = "#595959";
const beige = "#FFEACB";
const brown = "#8C7655";
const green = "#689A64";
const lightcolor = "#F8E1E1";



function changeColor(color) {
  var iconColor = document.getElementById("st1");
  if (color === "red") {
      iconColor.style.fill = red;

  } else if (color === "blue") {
       iconColor.style.fill = blue;

  } else if (color === "white") {
    iconColor.style.fill = white;

  } else if (color === "black") {
    iconColor.style.fill = black;

  } else if (color === "beige") {
    iconColor.style.fill = beige;

  } else if (color === "brown") {
    iconColor.style.fill = brown;

  } else if (color === "green") {
    iconColor.style.fill = green;

  }else{
    iconColor.style.fill = lightcolor;

  }
}


function changepantsColor(color) {
  var pantColor = document.getElementById("pant1");
  if (color === "red") {
      pantColor.style.fill = red;

  } else if (color === "jeans") {
    pantColor.style.fill = blue;

  } else if (color === "white") {
    pantColor.style.fill = white;

  } else if (color === "black") {
    pantColor.style.fill = black;

  } else if (color === "beige") {
    pantColor.style.fill = beige;

  } else if (color === "brown") {
    pantColor.style.fill = brown;

  } else if (color === "green") {
    pantColor.style.fill = green;

  }else{
    pantColor.style.fill = lightcolor;

  }
}

function changecoatColor(color) {
  var coatColor = document.getElementById("coat1");
  if (color === "red") {
    coatColor.style.fill = red;

  } else if (color === "denim") {
    coatColor.style.fill = blue;

  } else if (color === "white") {
    coatColor.style.fill = white;

  } else if (color === "black") {
    coatColor.style.fill = black;

  } else if (color === "beige") {
    coatColor.style.fill = beige;

  } else if (color === "brown") {
    coatColor.style.fill = brown;

  } else if (color === "green") {
    coatColor.style.fill = green;

  }else{
    coatColor.style.fill = lightcolor;

  }
}


function changesweaterColor(color) {
  var sweaterColor = document.getElementById("sweater0");
  if (color === "red") {
    sweaterColor.style.fill = red;

  } else if (color === "blue") {
    sweaterColor.style.fill = blue;

  } else if (color === "white") {
    sweaterColor.style.fill = white;

  } else if (color === "black") {
    sweaterColor.style.fill = black;

  } else if (color === "beige") {
    sweaterColor.style.fill = beige;

  } else if (color === "brown") {
    sweaterColor.style.fill = brown;

  } else if (color === "green") {
    sweaterColor.style.fill = green;

  }else{
    sweaterColor.style.fill = lightcolor;

  }
}