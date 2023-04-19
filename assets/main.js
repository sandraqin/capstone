window.stateCallback = () => {
	console.log('Something changed!')
}


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
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
  console.log(select.Element.value);
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



const submitButton = document.getElementById('submitbtn');

submitButton.addEventListener('click', function() {
  if (document.getElementById('topb').style.display !== "none") {
    showSort();
  } else if (document.getElementById('midb').style.display !== "none") {
    showWash();
  } else if (document.getElementById('lastb').style.display !== "none") {
    showDry();
  }
});







function showSort() {
  const colorInput = document.getElementById('color-option');
  if (colorInput.value === 'Red' || colorInput.value === 'Blue' || colorInput.value === 'Black' || colorInput.value === 'Green' || colorInput.value === 'Brown') {
    document.getElementById('tip1').style.display = "flex";
    document.getElementById('tip2').style.display = "none";
    document.getElementById('tip3').style.display = "none";
    document.getElementById('tip4').style.display = "none";
    document.getElementById('tip5').style.display = "none";
    document.getElementById('tip6').style.display = "none";
  } else {
    document.getElementById('tip2').style.display = "flex";
    document.getElementById('tip1').style.display = "none";
    document.getElementById('tip3').style.display = "none";
    document.getElementById('tip4').style.display = "none";
    document.getElementById('tip5').style.display = "none";
    document.getElementById('tip6').style.display = "none";
  }
}

function showWash() {
  const cottonInput = document.getElementById('cotton');
  if (cottonInput.value > 20){
    document.getElementById('tip1').style.display = "none";
    document.getElementById('tip2').style.display = "none";
    document.getElementById('tip3').style.display = "flex";
    document.getElementById('tip4').style.display = "none";
    document.getElementById('tip5').style.display = "none";
    document.getElementById('tip6').style.display = "none";
  } else {
    document.getElementById('tip1').style.display = "none";
    document.getElementById('tip2').style.display = "none";
    document.getElementById('tip3').style.display = "none";
    document.getElementById('tip4').style.display = "flex";
    document.getElementById('tip5').style.display = "none";
    document.getElementById('tip6').style.display = "none";
  }
}

function showDry() {
  const cottonInput = document.getElementById('cotton');
  if (cottonInput.value > 20){
    document.getElementById('tip1').style.display = "none";
    document.getElementById('tip2').style.display = "none";
    document.getElementById('tip3').style.display = "none";
    document.getElementById('tip4').style.display = "none";
    document.getElementById('tip5').style.display = "flex";
    document.getElementById('tip6').style.display = "none";
  } else {
    document.getElementById('tip1').style.display = "none";
    document.getElementById('tip2').style.display = "none";
    document.getElementById('tip3').style.display = "none";
    document.getElementById('tip4').style.display = "none";
    document.getElementById('tip5').style.display = "none";
    document.getElementById('tip6').style.display = "flex";
  }
}











function showDivwash() {
  var midbDiv = document.getElementById('midb');
  var midDiv = document.getElementById('mid');
  var topbDiv = document.getElementById('topb');
  var topDiv = document.getElementById('top');
  var lastDiv = document.getElementById('last');
  var lastbDiv = document.getElementById('lastb');
  var washpicDiv = document.getElementsByClassName('washer')[0];
  var sortpicDiv = document.getElementsByClassName('bucket')[0];
  var drypicDiv = document.getElementsByClassName('dryer')[0];
  var tipDiv = document.getElementById('tip1', 'tip2', 'tip3', 'tip4', 'tip5', 'tip6');


  if (midbDiv.style.display === 'none') {
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
  var washpicDiv = document.getElementsByClassName('washer')[0];
  var sortpicDiv = document.getElementsByClassName('bucket')[0];
  var drypicDiv = document.getElementsByClassName('dryer')[0];
  var tipDiv = document.getElementById('tip1', 'tip2', 'tip3', 'tip4', 'tip5', 'tip6');


  if (lastbDiv.style.display === 'none') {
    midbDiv.style.display = 'none';
    midDiv.style.display= 'block';
    topbDiv.style.display= 'none';
    topDiv.style.display='block';
    lastDiv.style.display='none';
    lastbDiv.style.display='block';
    washpicDiv.style.display = 'none';
    sortpicDiv.style.display = 'none';
    drypicDiv.style.display = 'block';

  } else {
    midbDiv.style.display = 'none';
    topbDiv.style.display= 'block';
    topDiv.style.display='none';
    lastDiv.style.display='block';
    lastbDiv.style.display='none';
    washpicDiv.style.display = 'none';
    sortpicDiv.style.display = 'block';
    drypicDiv.style.display = 'none';
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
  var washpicDiv = document.getElementsByClassName('washer')[0];
  var sortpicDiv = document.getElementsByClassName('bucket')[0];
  var drypicDiv = document.getElementsByClassName('dryer')[0];
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
  }
}
