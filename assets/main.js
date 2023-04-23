window.stateCallback = () => {
	console.log('Something changed!')
}



function dropMenu() {
    document.getElementById("clothesMenu").classList.toggle("show");
}
  

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}

window.stateCallback = () => {
  let selectElement = document.querySelector('[name="some-option"]');
  console.log(selectElement.value);
}



function showDivshirt() {
  document.getElementById('shirt').style.display = "flex";
  document.getElementById('pants').style.display = "none";
  document.getElementById('coat').style.display = "none";
  document.getElementById('sweater').style.display = "none";
}


function showDivpants() {
  document.getElementById('pants').style.display = "flex";
  document.getElementById('shirt').style.display = "none";
  document.getElementById('coat').style.display = "none";
  document.getElementById('sweater').style.display = "none";
}

function showDivcoat() {
  document.getElementById('coat').style.display = "flex";
  document.getElementById('pants').style.display = "none";
  document.getElementById('shirt').style.display = "none";
  document.getElementById('sweater').style.display = "none";
}



function showDivsweater() {
  document.getElementById('sweater').style.display = "flex";
  document.getElementById('coat').style.display = "none";
  document.getElementById('pants').style.display = "none";
  document.getElementById('shirt').style.display = "none";
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



coatSubmitButton.addEventListener('click', function() {
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



sweaterSubmitButton.addEventListener('click', function() {
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




function showSort() {
  var colorInputs = document.querySelectorAll("#color-option-shirt, #color-option-pants, #color-option-coat,#color-option-sweater");
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
      return;
    }
    if (!darkColors.includes(colorInputs[i].value)) {
      document.getElementById('tip1').style.display = "none";
      document.getElementById('tip2').style.display = "flex";
      document.getElementById('tip3').style.display = "none";
      document.getElementById('tip4').style.display = "none";
      document.getElementById('tip5').style.display = "none";
      document.getElementById('tip6').style.display = "none";
      return;
    }
    if (darkColors.includes(colorInputs[i].value)) {
      document.getElementById('tip1').style.display = "flex";
      document.getElementById('tip2').style.display = "none";
      document.getElementById('tip3').style.display = "none";
      document.getElementById('tip4').style.display = "none";
      document.getElementById('tip5').style.display = "none";
      document.getElementById('tip6').style.display = "none";
      return;
    }
  }
  
}


 


function showWash() {
  var cottonInputs = document.querySelectorAll("#cotton-shirt, #cotton-pants, #cotton-coat,#cotton-sweater");
  for (var i = 0; i < cottonInputs.length; i++) {
    if (cottonInputs[i].value > 20) {
      document.getElementById('tip1').style.display = "none";
      document.getElementById('tip2').style.display = "none";
      document.getElementById('tip3').style.display = "flex";
      document.getElementById('tip4').style.display = "none";
      document.getElementById('tip5').style.display = "none";
      document.getElementById('tip6').style.display = "none";
      return; 
    }else{
  
      document.getElementById('tip1').style.display = "none";
      document.getElementById('tip2').style.display = "none";
      document.getElementById('tip3').style.display = "none";
      document.getElementById('tip4').style.display = "flex";
      document.getElementById('tip5').style.display = "none";
      document.getElementById('tip6').style.display = "none";
}}
}






function showDry() {
  var cottonInputs = document.querySelectorAll("#cotton-shirt, #cotton-pants, #cotton-coat,#cotton-sweater");
  for (var i = 0; i < cottonInputs.length; i++) {
    if (cottonInputs[i].value > 20) {
      document.getElementById('tip1').style.display = "none";
      document.getElementById('tip2').style.display = "none";
      document.getElementById('tip3').style.display = "none";
      document.getElementById('tip4').style.display = "none";
      document.getElementById('tip5').style.display = "flex";
      document.getElementById('tip6').style.display = "none";
      return; 
    }else{
  
  document.getElementById('tip1').style.display = "none";
  document.getElementById('tip2').style.display = "none";
  document.getElementById('tip3').style.display = "none";
  document.getElementById('tip4').style.display = "none";  
  document.getElementById('tip5').style.display = "none";
  document.getElementById('tip6').style.display = "flex";
}}
}






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
  var tipDiv = document.getElementById('tip1', 'tip2', 'tip3', 'tip4', 'tip5', 'tip6');

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
    tipDiv.style.display = 'none';
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
    tipDiv.style.display = 'none';

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
  var tipDiv = document.getElementById('tip1', 'tip2', 'tip3', 'tip4', 'tip5', 'tip6');

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
    tipDiv.style.display = 'none';


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
    tipDiv.style.display = 'none';

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
  var tipDiv = document.getElementById('tip1', 'tip2', 'tip3', 'tip4', 'tip5', 'tip6');


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
    tipDiv.style.display = 'none';
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
    tipDiv.style.display = 'none';
  }
}










function changeColor(color) {
  var iconColor = document.getElementById("st1");
  if (color === "red") {
      iconColor.style.fill = "red";
      iconColor.style.fill = "red";
  } else if (color === "blue") {
       iconColor.style.fill = "blue";
      iconColor.style.fill = "blue";
  } else if (color === "white") {
    iconColor.style.fill = "white";
   iconColor.style.fill = "white";
  } else if (color === "black") {
    iconColor.style.fill = "black";
   iconColor.style.fill = "black";
  } else if (color === "beige") {
    iconColor.style.fill = "beige";
   iconColor.style.fill = "beige";
  } else if (color === "brown") {
    iconColor.style.fill = "brown";
   iconColor.style.fill = "brown";
  } else if (color === "green") {
    iconColor.style.fill = "green";
   iconColor.style.fill = "green";
  }else{
    iconColor.style.fill = "lightpink";
   iconColor.style.fill = "lightpink";
  }
}


function changepantsColor(color) {
  var pantColor = document.getElementById("pant1");
  if (color === "red") {
      pantColor.style.fill = "red";
      pantColor.style.fill = "red";
  } else if (color === "blue") {
    pantColor.style.fill = "blue";
    pantColor.style.fill = "blue";
  } else if (color === "white") {
    pantColor.style.fill = "white";
    pantColor.style.fill = "white";
  } else if (color === "black") {
    pantColor.style.fill = "black";
    pantColor.style.fill = "black";
  } else if (color === "beige") {
    pantColor.style.fill = "beige";
    pantColor.style.fill = "beige";
  } else if (color === "brown") {
    pantColor.style.fill = "brown";
    pantColor.style.fill = "brown";
  } else if (color === "green") {
    pantColor.style.fill = "green";
    pantColor.style.fill = "green";
  }else{
    pantColor.style.fill = "lightpink";
   pantColor.style.fill = "lightpink";
  }
}

function changecoatColor(color) {
  var coatColor = document.getElementById("coat1");
  if (color === "red") {
    coatColor.style.fill = "red";
    coatColor.style.fill = "red";
  } else if (color === "blue") {
    coatColor.style.fill = "blue";
    coatColor.style.fill = "blue";
  } else if (color === "white") {
    coatColor.style.fill = "white";
    coatColor.style.fill = "white";
  } else if (color === "black") {
    coatColor.style.fill = "black";
    coatColor.style.fill = "black";
  } else if (color === "beige") {
    coatColor.style.fill = "beige";
    coatColor.style.fill = "beige";
  } else if (color === "brown") {
    coatColor.style.fill = "brown";
    coatColor.style.fill = "brown";
  } else if (color === "green") {
    coatColor.style.fill = "green";
    coatColor.style.fill = "green";
  }else{
    coatColor.style.fill = "lightpink";
    coatColor.style.fill = "lightpink";
  }
}


function changesweaterColor(color) {
  var sweaterColor = document.getElementById("sweater0");
  if (color === "red") {
    sweaterColor.style.fill = "red";
    sweaterColor.style.fill = "red";
  } else if (color === "blue") {
    sweaterColor.style.fill = "blue";
    sweaterColor.style.fill = "blue";
  } else if (color === "white") {
    sweaterColor.style.fill = "white";
    sweaterColor.style.fill = "white";
  } else if (color === "black") {
    sweaterColor.style.fill = "black";
    sweaterColor.style.fill = "black";
  } else if (color === "beige") {
    sweaterColor.style.fill = "beige";
    sweaterColor.style.fill = "beige";
  } else if (color === "brown") {
    sweaterColor.style.fill = "brown";
    sweaterColor.style.fill = "brown";
  } else if (color === "green") {
    sweaterColor.style.fill = "green";
    sweaterColor.style.fill = "green";
  }else{
    sweaterColor.style.fill = "lightpink";
    sweaterColor.style.fill = "lightpink";
  }
}