document.addEventListener('DOMContentLoaded', e => {
    const likeBtns = document.querySelectorAll('.book-name')
    handleClickOnLikeBtns(likeBtns)

       //handle a click on the favorite/like button

       function handleClickOnLikeBtns(likeBtns){
        likeBtns.forEach(likeBtn => {
            likeBtn.addEventListener('click', () =>{
                if(likeBtn.querySelector("i").classList.contains("fa-regular")){
                    likeBtn.querySelector('.book-name i').classList.remove("fa-regular")
                    likeBtn.querySelector('.book-name i').classList.add("fa-solid")

                    console.log(likeBtn.querySelector('.book-name i'))
                }else{
                    likeBtn.querySelector('.book-name i').classList.add("fa-regular")
                    likeBtn.querySelector('.book-name i').classList.remove("fa-solid")
                }
        })
            
        })
    }
    
    function getBooks(){
    fetch('http://localhost:3000/books')
    .then(response => response.json())
    .then(books => book.forEach(book => renderOneBook(book)))
            
}
    // get some elements from the DOM
    
    // const cardImage = document.querySelector('.card img');
    // cardImage.textContent = data.image_url


    function renderOneBook(book){
        let card = document.querySelector('.card')
        console.log(card)
        card.innerHTML = `
        <img src="${book.image_url}>
        <div class="book-name">
            <h4>${book.title}</h4>
            <i class="fa fa-regular fa-heart" id="favorite"></i>
        </div>
        <p class="">${book.description}</p>
        `
        document.querySelector('.card').append(card)

        console.log(card)
    }


//     //Get random quotes
//     // fetch('https://zenquotes.io/api/random')
//     // .then(response => response.json())
//     // .then(data => console.log(data))


//     const api_url ='https://api.chucknorris.io/jokes/random';



//     async function getApi(url)
//     {
//     const response = await fetch(url,
//         {
//                     method: 'GET',
//                     mode: 'cors',
//                     cache: 'no-cache',
//                     credentials: 'same-origin',
//                     headers: {
//                         'Content-Type': 'application/json'
                    
//                 },
//                 redirect: 'follow',
//                     referrerPolicy: 'no-referrer',
//                     body: JSON.stringify(data)
//                 });
//     let data = await response.json();
//     console.log(data);
//     }

//     getApi(api_url);

//      //grab previous and next buttons on the DOM and listen for click event

//     document.getElementById('previous-btn').addEventListener('click', handlePreviousBtnClick)
//     document.getElementById('next-btn').addEventListener('click', handleNextBtnClick)
//     function handleNextBtnClick(){
//         //select display-quote-section
//         let p = document.createElement('p')
//         p.textContent = data.value
//         let displayQuote = document.querySelector('.display-quote-text').appendChild(p) 


//     }

    
})
