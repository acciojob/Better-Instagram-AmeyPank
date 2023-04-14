//your code here
const divs = document.querySelectorAll('.image');


let dragSrcEl = null;

function handleDragStart(e) {
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.id);
  this.classList.add('dragging');
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function handleDragEnter(e) {
  e.target.classList.add('over');
}

function handleDragLeave(e) {
  e.target.classList.remove('over');
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  if (dragSrcEl !== this) {
    const dragSrcBg = dragSrcEl.style.backgroundImage;
    dragSrcEl.style.backgroundImage = this.style.backgroundImage;
    this.style.backgroundImage = dragSrcBg;
  }
  return false;
}

function handleDragEnd(e) {
  divs.forEach((div) => {
    div.classList.remove('over', 'dragging');
  });
}

divs.forEach((div) => {
  div.addEventListener('dragstart', handleDragStart, false);
  div.addEventListener('dragenter', handleDragEnter, false);
  div.addEventListener('dragover', handleDragOver, false);
  div.addEventListener('dragleave', handleDragLeave, false);
  div.addEventListener('drop', handleDrop, false);
  div.addEventListener('dragend', handleDragEnd, false);
});

