var excessPaper = document.getElementById('excess-paper');
var excessPaperText = document.getElementById('excess-paper-text');

if (excessPaper) {
    excessPaper.addEventListener('click', function() {
        excessPaperText.classList.toggle('visible');
    });
}