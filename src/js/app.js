const btn = document.querySelector('.btn');
const content = document.querySelector('.content-container');

btn.addEventListener('click', () => {
  console.log('click');
  btn.classList.add('btn_border');
  // btn.style.border = '10px solid #0fcf48';
  content.classList.toggle('hidden');
});
