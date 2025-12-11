const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach((collapsible) => {
    collapsible.addEventListener('click', () => {
        collapsible.classList.toggle('collapsible-expanded'); });
});

 document.getElementById("year").textContent = new Date().getFullYear();