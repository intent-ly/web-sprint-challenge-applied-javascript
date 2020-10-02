// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card,
// the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then (res =>{
        console.log(res.data)
        
        res.data.articles.bootstrap.forEach(arr =>{
            entryPoint.append(cardBuilder(arr.headline, arr.authorName, arr.authorPhoto))
        })
        res.data.articles.javascript.forEach(arr=>{
            entryPoint.append(cardBuilder(arr.headline, arr.authorName, arr.authorPhoto))
        })
        res.data.articles.jquery.forEach(arr=>{
            entryPoint.append(cardBuilder(arr.headline, arr.authorName, arr.authorPhoto))
        })
        res.data.articles.node.forEach(arr=>{
            entryPoint.append(cardBuilder(arr.headline, arr.authorName, arr.authorPhoto))
        })
        res.data.articles.technology.forEach(arr=>{
            entryPoint.append(cardBuilder(arr.headline, arr.authorName, arr.authorPhoto))
        })

    })
    .catch(drama =>{
        console.log(drama)
    })

    const entryPoint = document.querySelector('.cards-container')

    function cardBuilder (headline, name, image){
            //Create Elements
            const cardContainer = document.createElement('div')
            const headlineContainer = document.createElement('div')
            const authorContainer = document.createElement('div')
            const imageContainer = document.createElement('div')
            const authorNames = document.createElement('span')
            const authorPic = document.createElement('img')

            //Assign Class and Text
            cardContainer.classList.add('card')
            headlineContainer.classList.add('headline')
            authorContainer.classList.add('author')
            imageContainer.classList.add('img-container')

            headlineContainer.textContent = headline
            authorNames.textContent = `By ${name}`
            authorPic.src = image;

            //Organize elements
            cardContainer.appendChild(headlineContainer)
            cardContainer.appendChild(authorContainer)
            authorContainer.appendChild(imageContainer)
            authorContainer.appendChild(authorNames)

            imageContainer.appendChild(authorPic)


            cardContainer.addEventListener('click', item =>{
                console.log(headlineContainer)
            })

            return cardContainer

    }