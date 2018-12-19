var excessPaper = document.getElementById('excess-paper');
var excessPaperText = document.getElementById('excess-paper-text');

excessPaper.addEventListener('click', function() {
    excessPaperText.classList.toggle('visible');
});