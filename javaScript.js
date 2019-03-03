function addred($node) {
  $node
    .addClass("red")
    .siblings(".red")
    .removeClass("red");
}
function setTimer() {
  return setInterval(() => {
    n += 1;
    active(n % size);
  }, 3000);
}
function active(index) {
  pictures.eq(index).trigger("click");
  addred(pictures.eq(n % size));
}
let pictures = $("#button>span");
for (let i = 0; i < pictures.length; i++) {
  $(pictures[i]).on("click", function(x) {
    let index = $(x.currentTarget).index();
    let p = index * -300;
    $("#images").css({
      transform: "translate(" + p + "px)"
    });
    n = index;
    addred(pictures.eq(n));
  });
}

let n = 0;
let size = pictures.length;
active(n % size);
let timeId = setTimer();

$(".window").on("mouseenter", function() {
  window.clearInterval(timeId);
});

$(".window").on("mouseleave", function() {
  timeId = setTimer();
});
