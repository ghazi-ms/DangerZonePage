document.addEventListener('DOMContentLoaded', function () {
    var google = document.getElementById('googleDownloadBtn');
    var apple = document.getElementById('appleDownloadBtn');
    var modalSheet = document.getElementById('modalSheet');
    var closeModalBtn = document.getElementById('CloseBtnn');
    var closeModalTxtBtn = document.getElementById('CloseTxtBtnn');
    google.addEventListener('click', function () {
      modalSheet.classList.remove('hidden');
    });
    apple.addEventListener('click', function () {
        modalSheet.classList.remove('hidden');
      });
    closeModalBtn.addEventListener('click', function () {
      modalSheet.classList.add('hidden');
    });
    closeModalTxtBtn.addEventListener('click', function () {
        modalSheet.classList.add('hidden');
      });
  });