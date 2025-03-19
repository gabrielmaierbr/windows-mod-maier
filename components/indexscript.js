window.onload = () => {
    const elements = document.querySelectorAll('.fade-element');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('fade-in');
        }, index * 3000);
    });
};

document.addEventListener('DOMContentLoaded', function() {
    const githubButton = document.querySelector('.git');
    
    githubButton.addEventListener('click', function() {
        window.open('https://github.com/gabrielmaierbr', '_blank');
    });
});