// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

 axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(res =>{
        console.log(res.data)
        const topicData = res.data;
        topicBuilder(topicData)
    })
    .catch(drama =>{
        console.log(drama)
        debugger
    })

    const placeHolder = document.querySelector('.topics')

    function topicBuilder (data){
        //Declare Elements
        const tabOne = document.createElement('div')
        const tabTwo = document.createElement('div')
        const tabThree = document.createElement('div')
        const tabFour = document.createElement('div')
        const tabFive = document.createElement('div')

        //Classes and Text
        tabOne.classList.add('tab')
        tabTwo.classList.add('tab')
        tabThree.classList.add('tab')
        tabFour.classList.add('tab')
        tabFive.classList.add('tab')

        tabOne.textContent = data.topics[0]
        tabTwo.textContent = data.topics[1]
        tabThree.textContent = data.topics[2]
        tabFour.textContent = data.topics[3]
        tabFive.textContent = data.topics[4]

        //Organize document
        placeHolder.appendChild(tabOne)
        placeHolder.appendChild(tabTwo)
        placeHolder.appendChild(tabThree)
        placeHolder.appendChild(tabFour)
        placeHolder.appendChild(tabFive)
    }