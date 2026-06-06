
// PROGRESS BAR

window.addEventListener('scroll', ()=>{

  const scrollTop =
    document.documentElement.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercent =
    (scrollTop / height) * 100;

  document.getElementById('progress-bar')
    .style.width = scrollPercent + '%';

});

// PARTICLES

const particles = document.getElementById('particles');

for(let i=0; i<60; i++){

  const particle = document.createElement('div');

  particle.classList.add('particle');

  particle.style.left =
    Math.random() * 100 + 'vw';

  particle.style.animationDuration =
    (Math.random() * 10 + 10) + 's';

  particle.style.opacity =
    Math.random();

  particles.appendChild(particle);

}

// REVEAL ANIMATION

const revealItems = document.querySelectorAll(
  '.glass-card, .skill-card, .project-card, .contact-card'
);

const observer = new IntersectionObserver((entries)=>{

  entries.forEach((entry)=>{

    if(entry.isIntersecting){

      entry.target.style.opacity = 1;

      entry.target.style.transform =
        "translateY(0px)";

    }

  });

},{
  threshold:0.1
});

revealItems.forEach((el)=>{

  el.style.opacity = 0;

  el.style.transform =
    "translateY(40px)";

  el.style.transition =
    "all 0.8s ease";

  observer.observe(el);

});

// ICONS

lucide.createIcons();
