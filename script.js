const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

document.querySelector('#year').textContent = new Date().getFullYear();

const form = document.querySelector('#enquiryForm');
const success = document.querySelector('#formSuccess');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = encodeURIComponent(`Industrial enquiry from ${data.get('name')} | ShiftScale website`);
  const body = encodeURIComponent(
`Hello ShiftScale Enterprises,\n\nI would like to discuss an industrial supply requirement.\n\nName: ${data.get('name')}\nCompany: ${data.get('company') || 'Not provided'}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone')}\nIndustry: ${data.get('industry') || 'Not specified'}\nRequirement:\n${data.get('requirement')}\n\nRegards,\n${data.get('name')}`
  );
  // Replace this address with the company's official enquiry email before publishing.
  window.location.href = `mailto:shiftscalemss.com?subject=${subject}&body=${body}`;
  success.textContent = 'Thank you for the enquiry.';
});
