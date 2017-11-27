var nav = document.querySelector('.navBar');
window.addEventListener('scroll', function(){
  if (window.scrollY > 50) {
     nav.classList.add('shadow');
  } else {
     nav.classList.remove('shadow');
  }
});

// Select the links
const werkLink = document.querySelector('a[data-link="werk"]');
const werkLinkTo = werkLink.getAttribute('data-to');
const vaardighedenLink = document.querySelector('a[data-link="vaardigheden"]');
const vaardighedenLinkTo = vaardighedenLink.getAttribute('data-to');
const overmijLink = document.querySelector('a[data-link="overmij"]');
const overmijLinkTo = overmijLink.getAttribute('data-to');
const contactLink = document.querySelector('a[data-link="contact"]');
const contactLinkTo = contactLink.getAttribute('data-to');

// smoothScroll function
function smoothScroll(divId){
  TweenLite.to(window, 1, {scrollTo: divId});
}

// Add event listeners
werkLink.addEventListener('click', function(){ smoothScroll(werkLinkTo) });
vaardighedenLink.addEventListener('click', function(){ smoothScroll(vaardighedenLinkTo) });
overmijLink.addEventListener('click', function(){ smoothScroll(overmijLinkTo) });
contactLink.addEventListener('click', function(){ smoothScroll(contactLinkTo) });

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('service-worker.js').then(function () {}, function () {});
// } else {
//   console.error('Ur browser does not support ServiceWorkers :( performance might be hurt');
// };
