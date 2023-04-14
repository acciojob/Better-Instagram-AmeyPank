// //your code here
const divs = document.querySelectorAll('.image');


let dragSrcEl = null;

function handleDragStart(e) {
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  if (dragSrcEl !== this) {
    // swap background image
    const tempBgImg = dragSrcEl.style.backgroundImage;
    dragSrcEl.style.backgroundImage = this.style.backgroundImage;
    this.style.backgroundImage = tempBgImg;

    // swap text content
    const tempText = dragSrcEl.innerText;
    dragSrcEl.innerText = this.innerText;
    this.innerText = tempText;

  }
  return false;
}

function handleDragEnd(e) {
  divs.forEach((div) => {
    div.classList.remove('over');
  });
}

divs.forEach((div) => {
  div.addEventListener('dragstart', handleDragStart, false);
  div.addEventListener('dragenter', () => {
    this.classList.add('over');
  }, false);
  div.addEventListener('dragover', handleDragOver, false);
  div.addEventListener('dragleave', () => {
    this.classList.remove('over');
  }, false);
  div.addEventListener('drop', handleDrop, false);
  div.addEventListener('dragend', handleDragEnd, false);
});



// const divs = document.querySelectorAll('.image');

// let dragSrcEl = null;

// function handleDragStart(e) {
//   dragSrcEl = this;
//   e.dataTransfer.effectAllowed = 'move';
//   e.dataTransfer.setData('text/html', this.innerHTML);
// }

// function handleDragOver(e) {
//   if (e.preventDefault) {
//     e.preventDefault();
//   }
//   e.dataTransfer.dropEffect = 'move';
//   return false;
// }

// function handleDrop(e) {
//   if (e.stopPropagation) {
//     e.stopPropagation();
//   }
//   if (dragSrcEl !== this) {
//     const temp = this.innerHTML;
//     this.innerHTML = dragSrcEl.innerHTML;
//     dragSrcEl.innerHTML = temp;

//     // swap background image
//     const tempBgImg = dragSrcEl.style.backgroundImage;
//     dragSrcEl.style.backgroundImage = this.style.backgroundImage;
//     this.style.backgroundImage = tempBgImg;

//     // swap text content
//     const tempText = dragSrcEl.innerText;
//     dragSrcEl.innerText = this.innerText;
//     this.innerText = tempText;
//   }
//   return false;
// }

// function handleDragEnd(e) {
//   divs.forEach((div) => {
//     div.classList.remove('over');
//   });
// }

// divs.forEach((div) => {
//   div.addEventListener('dragstart', handleDragStart, false);
//   div.addEventListener('dragenter', (e) => {
//     e.target.classList.add('over');
//   }, false);
//   div.addEventListener('dragover', handleDragOver, false);
//   div.addEventListener('dragleave', (e) => {
//     e.target.classList.remove('over');
//   }, false);
//   div.addEventListener('drop', handleDrop, false);
//   div.addEventListener('dragend', handleDragEnd, false);
// });


// Using JQUERY
// $(document).ready(function() {
//     $(".image").draggable({
//       revert: "invalid",
//       start: function() {
//         $(this).addClass("dragging");
//       },
//       stop: function() {
//         $(this).removeClass("dragging");
//       }
//     });
    
//     $(".image").droppable({
//       drop: function(event, ui) {
//         var draggableBg = ui.draggable.css("background-image");
//         var droppableBg = $(this).css("background-image");
//         ui.draggable.css("background-image", droppableBg);
//         $(this).css("background-image", draggableBg);
//       }
//     });
//   });
  