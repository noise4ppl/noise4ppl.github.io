
const scrollBtn = document.querySelector('.scroll-to-top')

const refreshButtonVisibility = () => {
  if (document.documentElement.scrollTop < 2900){
    scrollBtn.style.display = "none";
  } else {
    scrollBtn.style.display = "block";
  }
};
refreshButtonVisibility();

console.log(scrollBtn); 
scrollBtn.addEventListener('click', () => {
document.documentElement.scrollTop = 0;
});

document.addEventListener('scroll', (e) => {
refreshButtonVisibility();
});

// < 3200
