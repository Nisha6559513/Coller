
  // NAV scroll
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 80);
  });

  // REVEAL on scroll
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));

  // FORM submit
  function submitEnquiry() {
    const fname = document.getElementById('f-fname').value.trim();
    const email = document.getElementById('f-email').value.trim();
    const collection = document.getElementById('f-collection').value;

    if (!fname || !email || !collection) {
      alert('Please fill in your name, email, and select a collection.');
      return;
    }

    document.getElementById('enquiry-form-wrap').style.display = 'none';
    document.getElementById('form-success').style.display = 'block';

    // Build mailto
    const msg = document.getElementById('f-message').value;
    const subject = encodeURIComponent(`Enquiry from ${fname} – ${collection}`);
    const body = encodeURIComponent(`Name: ${fname} ${document.getElementById('f-lname').value}\nEmail: ${email}\nPhone: ${document.getElementById('f-phone').value}\nCollection: ${collection}\n\nMessage:\n${msg}`);
    setTimeout(() => {
      window.location.href = `mailto:hello@maisongarments.com?subject=${subject}&body=${body}`;
    }, 800);
  }
