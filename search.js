function searchPage() {
    var query = document.getElementById('searchQuery').value.toLowerCase();
    var content = document.getElementById('content');
    var paragraphs = content.getElementsByTagName('p');
    
    // Clear any previous highlights
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerHTML = paragraphs[i].innerHTML.replace(/<span class="highlight">/g, '').replace(/<\/span>/g, '');
    }

    // Highlight new search terms
    for (var i = 0; i < paragraphs.length; i++) {
        var text = paragraphs[i].innerText.toLowerCase();
        if (text.includes(query)) {
            paragraphs[i].innerHTML = paragraphs[i].innerHTML.replace(new RegExp(query, 'gi'), match => `<span class="highlight">${match}</span>`);
        }
    }
}
function loadMoreContent() {
    // Show the loader
    loader.style.display = 'block';

    // Simulate an AJAX request (you can replace this with actual data fetching)
    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        let newItem = document.createElement('div');
        newItem.textContent = `New Item ${Math.random()}`;
        contentContainer.appendChild(newItem);
      }

      // Hide the loader
      loader.style.display = 'none';
    }, 1000);
  }

  // Event listener for scrolling
  window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
      loadMoreContent();
    }
  });
});
