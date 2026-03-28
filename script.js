const cards = document.querySelectorAll('.card');
  cursor.style.top = mouseY + 'px';

  // Trail follows smoothly
  trailX += (mouseX - trailX) * 0.1;
  trailY += (mouseY - trailY) * 0.1;

  cursorTrail.style.left = trailX + 'px';
  cursorTrail.style.top = trailY + 'px';

  requestAnimationFrame(animateCursor);


animateCursor();


// Hover effects
document.querySelectorAll('a, .card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('cursor-hover');
    cursorTrail.classList.add('cursor-trail-hover');
  });

  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-hover');
    cursorTrail.classList.remove('cursor-trail-hover');
  });
});


// Click pulse effect
document.addEventListener('click', () => {
  cursor.classList.add('cursor-click');
  setTimeout(() => cursor.classList.remove('cursor-click'), 200);
});


// Parallax tilt effect on cards
cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 10;
    const rotateY = (x - centerX) / 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
  });
});