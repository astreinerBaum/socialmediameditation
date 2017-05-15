var last_known_scroll_position = 0;
var divHeight = 412;
var scrollPosition = 0;
var ticking = false;

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      if(last_known_scroll_position >= scrollPosition){
        var rand = Math.floor((Math.random()*400)+100);
        var div = document.createElement("div");
        div.className = "container";
        div.style.height = rand.toString() +'px';
        document.body.appendChild(div);
        //console.log(last_known_scroll_position)
        scrollPosition += rand;
      }
      ticking = false;
    });
  }
  ticking = true;
});

function removeText() {
  document.getElementById("first").innerHTML = "";
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
