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

function toggleTheme() {
    var body = document.body;
    var currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.classList.remove(currentTheme + '-mode');
    body.classList.add(newTheme + '-mode');
    localStorage.setItem('theme', newTheme);
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', (event) => {
    var savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme + '-mode');
});
