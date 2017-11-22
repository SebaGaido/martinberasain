// JavaScript Document

// menu-content-responsive
function openNav() {
    document.getElementById("mySidenav").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
}



// popup -prologo Emociones positivas
function openPopUp1() {
	document.getElementById("myPopUp1").style.display = "block";
}

function closePopUp1() {
	document.getElementById("myPopUp1").style.display = "none";
}



// popup -cap4 Emociones positivas
function openPopUp2() {
	document.getElementById("myPopUp2").style.display = "block";
}

function closePopUp2() {
	document.getElementById("myPopUp2").style.display = "none";
}



// popup -Introduccion Saber sobre las emociones
function openPopUp3() {
	document.getElementById("myPopUp3").style.display = "block";
}

function closePopUp3() {
	document.getElementById("myPopUp3").style.display = "none";
}



// preload	
(function(){
    $('.preload').fadeOut(100);
})();



// fade out content page after click item menu
function fadeOutContent() {
	$('body').fadeOut(60);
}




// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-modal")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    popupmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == popupmodal) {
        popupmodal.style.display = "none";
    }
}

