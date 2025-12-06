// const menuBtn = document.getElementById("menu-btn");
// const navLinks = document.getElementById("nav-links");

// if (menuBtn && navLinks) {
//     menuBtn.setAttribute("aria-expanded", "false");
//     menuBtn.setAttribute("type", "button");

//     const menuIcon = menuBtn.querySelector("i");

//     menuBtn.addEventListener("click", () => {
//         const open = navLinks.classList.toggle("show");

//         if (menuIcon) {
//             menuIcon.classList.toggle("fa-bars", !open);
//             menuIcon.classList.toggle("fa-times", open);
//         }

//         menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
//     });
// }

// document.addEventListener('DOMContentLoaded', function () {
//     const navLinks = document.querySelectorAll('.nav-links a');

//     navLinks.forEach(link => {
//         link.addEventListener('click', function () {
//             navLinks.forEach(l => l.classList.remove('active'));
//             this.classList.add('active');
//              });
//     });

//     const currentPage = window.location.pathname.split('/').pop() || 'index.html';
//     navLinks.forEach(link => {
//         if (link.getAttribute('href') === currentPage) {
//             link.classList.add('active');
//         }
//     });
// });

// Minimal accessible behavior for hamburger + form feedback
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menu-btn');
  const nav = document.getElementById('primary-navigation');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('show');
      // move focus to first link when opened (accessibility)
      if (!expanded) {
        const firstLink = nav.querySelector('a');
        if (firstLink) firstLink.focus();
      } else {
        menuBtn.focus();
      }
    });
  }

  // Simple form validation & accessible feedback
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  if (form && feedback) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = form.querySelector('#username').value.trim();
      const email = form.querySelector('#email').value.trim();
      const message = form.querySelector('#message').value.trim();

      if (!name || !email || !message) {
        feedback.textContent = 'Please fill in all fields.';
        feedback.className = 'form-feedback visible error';
        feedback.style.display = 'block';
        feedback.style.background = '#ffbaba';
        feedback.style.color = '#d8000c';
        return;
      }

      // simulate success
      feedback.textContent = 'Thanks — your message has been received!';
      feedback.className = 'form-feedback visible success';
      feedback.style.display = 'block';
      feedback.style.background = '#dff2d8';
      feedback.style.color = '#256029';

      form.reset();
    });
  }
});
