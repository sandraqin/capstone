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


function showDiv() {
  document.getElementById('vest').style.display = "flex";
}

function showDivshirt() {
  document.getElementById('shirt').style.display = "flex";
}

const colorInput = document.getElementById('color-option');
if (colorInput.value === 'Red' || colorInput.value === 'Blue' || colorInput.value === 'Black' || colorInput.value === 'Green' || colorInput.value === 'Brown') {
  console.log('dark');
} else {
  console.log('light');
}



const cotton = document.getElementById('cotton');




function showDivtip() {
  if (parseInt(cotton.value) > 20 && colorInput.value === 'Red' || colorInput.value === 'Blue' || colorInput.value === 'Black' || colorInput.value === 'Green' || colorInput.value === 'Brown') {
  document.getElementById('tip1').style.display = "flex";}
  else{
    document.getElementById('tip1').style.display = "none";
  }
}

