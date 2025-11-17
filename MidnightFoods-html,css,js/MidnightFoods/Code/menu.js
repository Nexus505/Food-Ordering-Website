document.querySelector('input[type="search"]').addEventListener('input', function(event) {
    let query = event.target.value.toLowerCase();
    let foodItems = document.querySelectorAll('.food-card');
    foodItems.forEach(function(card) {
      let foodName = card.querySelector('h3').innerText.toLowerCase();
      if (foodName.includes(query)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });