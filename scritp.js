function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}


let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
     if(entry.isIntersecting) {
       entry.target.classList.add('fadeIn');
     } else {
       entry.target.classList.remove('fadeIn');
     }
    });
   });
   
   document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
   });