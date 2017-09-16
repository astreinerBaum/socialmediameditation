/*********************************************************
  This JavaScript section contains all the magic for the
  artwork "mindful scrolling" by Matthias Pitscher.
  No changes shall be made on the original code without
  getting in contact with the artist first. If this is
  not possible the code should be changed according
  to the comments that explain the general concept.
  The code is licensed under GNU GPL and therefore can
  be used as free software. As mentioned before,
  the artwork belongs to "Archiv der Moderne", who have
  the solitary right to exhibit this work.
 *********************************************************/

 /********************************************************
                          CONCEPT
  White boxes are centered on the screen with a border-
  radius of 4px. The background is greyblue (#E9EBEE).
  The first box reads "What's on your Mind", which dis-
  appears when the user clicks on it.
  The second and all additional boxes are underneath with
  a gap of 12px.
  New boxes with a random height between 100px and 500px
  are generated when the user scrolls down.
  ********************************************************/

var scroll_position = 0; //Current scroll position
var end_scroll_position = 0; //Position when new Divs get created
var ticking = false;

window.addEventListener('scroll', function(e) {
  scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      if( scroll_position >= end_scroll_position){
        var rand = Math.floor((Math.random()*400)+100);
        var div = document.createElement("div");
        div.className = "container";
        div.style.height = rand.toString() +'px';
        document.body.appendChild(div);
        end_scroll_position += rand;
      }
      ticking = false;
    });
  }
  ticking = true;
});

function removeText(e) {
  e.innerHTML = "";
}

window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  if (event.key == "A" || event.key == "a"){
    pageScroll();
  }
  if (event.key == "S" || event.key == "s"){
    pageScrollStop();
  }
})

function pageScroll(){
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,10);
}

function pageScrollStop(){
    clearTimeout(scrolldelay);
}
