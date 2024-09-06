document.addEventListener('DOMContentLoaded', () => {
  // Slide Animation Code
  const slides2 = document.querySelectorAll('.slide2');
  let slideIndex = 0;

  const showSlide = (index) => {
      const totalSlides = slides2.length;
      const slidesToShow = 4; // Número de slides para mostrar ao mesmo tempo
      const maxIndex = Math.ceil(totalSlides / slidesToShow) - 1;

      if (index > maxIndex) {
          slideIndex = maxIndex;
      } else if (index < 0) {
          slideIndex = 0;
      } else {
          slideIndex = index;
      }

      const offset = -slideIndex * (100 / slidesToShow); // Ajuste o cálculo do deslocamento
      document.querySelector('.slides2').style.transform = `translateX(${offset}%)`;
  };

  document.querySelector('.prev').addEventListener('click', () => {
      showSlide(slideIndex - 1);
  });

  document.querySelector('.next').addEventListener('click', () => {
      showSlide(slideIndex + 1);
  });

  showSlide(slideIndex);

  // Sidebar Toggle Code
  const toggleSidebar = () => {
      const header = document.getElementById('header');
      const navigationHeader = document.getElementById('navigation_header');
      const content = document.getElementById('content');
      const sidebarIsVisible = navigationHeader.style.display === 'flex';

      if (sidebarIsVisible) {
          navigationHeader.style.display = 'none';
          header.style.flexDirection = 'row';
          content.style.opacity = '1';
      } else {
          navigationHeader.style.display = 'flex';
          header.style.flexDirection = 'column';
          content.style.opacity = '0.3';
      }
  };

  const closeSidebar = () => {
      const navigationHeader = document.getElementById('navigation_header');
      const header = document.getElementById('header');
      const content = document.getElementById('content');
      navigationHeader.style.display = 'none';
      header.style.flexDirection = 'row';
      content.style.opacity = '1';
  };

  document.getElementById('toggleSidebarButton').addEventListener('click', toggleSidebar);
  document.getElementById('closeSidebarButton').addEventListener('click', closeSidebar);
});

