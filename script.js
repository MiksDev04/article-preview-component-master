const shareBtn = document.querySelector('.show-share');
const shareBtnIcon = document.querySelector('.show-share svg path');
const shareOptions = document.querySelector('.share-icons');

shareBtn.addEventListener('click', function() {
    shareBtnIcon.classList.toggle('btn-icon-color')
    shareBtn.classList.toggle('btn-color');
    shareOptions.classList.toggle('toggle');
   
})