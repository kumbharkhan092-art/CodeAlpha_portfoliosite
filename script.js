document.getElementById('year').textContent = new Date().getFullYear();


const sections = document.querySelectorAll('section[id]');
const tabs = document.querySelectorAll('.tab');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      const id = entry.target.getAttribute('id');
      tabs.forEach(tab => {
        tab.classList.toggle('active', tab.getAttribute('href') === '#' + id);
                   });
    }
                      });
}, { rootMargin: '-40% 0px -55% 0px' });

              sections.forEach(s => observer.observe(s));
