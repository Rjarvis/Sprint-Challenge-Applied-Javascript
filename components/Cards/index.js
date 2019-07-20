// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function Article(data){
    function createElement(element, style, content){
        const div = document.createElement(element);
        if(style != null){ div.classList = style; }
        if(content != null){ div.textContent = content; }
        
        return div;
    }
    const div = createElement('div', "card");
    const headline = createElement('div','headline');
    const author = createElement('div', 'author');
    const authorImg = createElement('div', 'img-container');
    const img = createElement('img');
    // img.src = data;
    authorImg.appendChild(img);
    const authorName = createElement('span');
    author.appendChild(authorImg);
    author.appendChild(authorName);
    div.appendChild(headline);
    div.appendChild(author);

    return div;
}

const request = axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then((axiosData) => {
        console.log("data", axiosData);
    })
    
    .catch((err) => {
        console.log("There was an error", err);
    });