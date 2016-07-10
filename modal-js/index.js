window.onload = function () {
  var buttons = document.getElementsByClassName('button')
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', toggleWindow)
  }
}

function toggleWindow () {
  var modalWindow = document.getElementById('modal-window')
  modalWindow.classList.toggle('hidden')
}
