if (document.getElementById("nav"))
  document.getElementById("nav").innerHTML = '<a href="tournaments.html" id="menu_tournaments">Tournaments</a><a href="index.html" id="menu_home"><img src="assets/images/da_chess_logo.png" alt="The De Anza Chess Club Logo"></a><a href="notes.html" id="menu_notes">Meeting Notes</a>';

if (document.getElementById("footer"))
  document.getElementById("footer").innerHTML = '<p>Consider following us on <a href="https://facebook.com/deanza.chess.9">Instagram</a> and <a href="https://instagram.com/deanzachess">Facebook</a>, or hangout with us on <a href="#">Discord</a>! If you have any questions please refer to the <a href="https://docs.google.com/document/d/16hkCBBiRBab0R5cbWGACp3aBkty7rf8jSpmA3pfYhrE/edit?usp=sharing" target="_blank">club constitution</a> or contact us at <a href="mailto:deanzachess@gmail.com">deanzachess@gmail.com</a></p><a href="tournaments.html" id="menu_tournaments">Tournaments</a><a href="index.html" id="menu_home"><img src="assets/images/da_chess_logo.png" alt="The De Anza Chess Club Logo"></a><a href="notes.html" id="menu_notes">Meeting Notes</a>';

if (window.location.href.indexOf("index.html") > -1) {
  document.getElementById("menu_home").style.backgroundColor = "orange";
  document.getElementById("menu_tournaments").style.backgroundColor = "none";
  document.getElementById("menu_notes").style.backgroundColor = "none";
} else if (window.location.href.indexOf("tournaments.html") > -1) {
  document.getElementById("menu_home").style.backgroundColor = "none";
  document.getElementById("menu_tournaments").style.backgroundColor = "orange";
  document.getElementById("menu_notes").style.backgroundColor = "none";
} else if (window.location.href.indexOf("notes.html") > -1) {
  document.getElementById("menu_home").style.backgroundColor = "none";
  document.getElementById("menu_tournaments").style.backgroundColor = "none";
  document.getElementById("menu_notes").style.backgroundColor = "orange";
} else {
  window.alert("Bruh, 404. Going back home.");
  window.location.replace("http://google.com");
  // TODO: change above to da chess ^^
}