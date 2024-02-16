document.addEventListener('DOMContentLoaded', function() {
    const magicNumber = document.getElementById('magicNumber');
    setTimeout(() => {
        magicNumber.classList.add('magic');
    }, 500); // Delay to ensure the user sees the effect
});