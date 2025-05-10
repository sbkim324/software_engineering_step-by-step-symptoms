document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
  
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
  
        button.classList.add('active');
        document.getElementById(button.dataset.tab).classList.add('active');
      });
    });
  });
  