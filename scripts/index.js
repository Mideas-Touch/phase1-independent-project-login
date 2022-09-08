document.addEventListener('DOMContentLoaded', () => {
    
    function getBooks(){
    fetch('http://localhost:3000/books')
    .then(response => response.json())
    .then(book => book.forEach(book => renderOneBook(book)))
            
}
    //get some elements from the DOM
    
    // const cardImage = document.querySelector('.card img');
    // cardImage.textContent = data.image_url


    function renderOneBook(book){
        let card = document.getElementsByName('card')
        card.innerHTML = `
        <img src="${book.image_url}>
        <div class="book-name">
            <h4>${book.title}</h4>
            <i class="fa fa-regular fa-heart" id="favorite"></i>
        </div>
        <p class="">${book.description}</p>
        `
    }
})
