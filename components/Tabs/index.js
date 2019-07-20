// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


function Tab(data){
    const div = document.createElement('div');
    div.classList.add('tab');
    div.textContent = data;
    return div;
}

const getData = axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((axiosData) =>{
        console.log("data", axiosData);
        const topics = axiosData.data.topics;
        const parent = document.querySelector('.topics');
        topics.forEach(element => {
            var tab = Tab(element);
            console.log(parent);
            parent.appendChild(tab);
        });
    })