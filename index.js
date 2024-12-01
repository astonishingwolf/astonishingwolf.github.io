
const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const expandButton = document.querySelector('.expand-button');
  const expandableContent = document.querySelector('.expanded-content');
  const buttonText = document.querySelector('.button-text');
  const chevron = document.querySelector('.chevron');

  let isExpanded = false;

  expandButton.addEventListener('click', () => {
      // Toggle expanded state
      isExpanded = !isExpanded;
      
      // Toggle expanded class
      expandableContent.classList.toggle('expanded');
      
      // Update button text
      buttonText.textContent = isExpanded 
          ? 'Click to Collapse Content' 
          : 'Click to Expand Content';
      
      // Change chevron
      chevron.textContent = isExpanded ? '▲' : '▼';
  });
});