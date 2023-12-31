document.querySelector("#category").addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.target.id);
  if (e.target.tagName == "LI") {
    window.location.href = "/" + e.target.id;
  }
});

document.querySelector("#form").addEventListener("keyup", (e) => {
  if (e.target.dataset.uppercase !== undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});

// limitation
// all the event are not bubbled up some event
// blur, focus, resize, window, scroll not acutly bubbled up the Hierarchy
// some are not propogat to Hierarchy, we need to handle them
