function searchArticles() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    let articles = document.getElementsByClassName('article');
    for (let i = 0; i < articles.length; i++) {
        if (!articles[i].innerText.toLowerCase().includes(input)) {
            articles[i].style.display = 'none';
        } else {
            articles[i].style.display = 'block';
        }
    }
}
