// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const div = document.createElement("div");
    div.classList.add("header");
    const date = document.createElement("span");
    date.classList.add("date");
    date.textContent = "SMARCH 28, 2019";
    const title = document.createElement("h1");
    title.textContent = "Lambda Times";
    const temp = document.createElement("span");
    temp.classList.add("temp");
    temp.textContent = "98°";
    let tags = [date,title,temp];
    tags.forEach( e => {
        div.appendChild(e);
    })

    return div;
}

const header = document.querySelector('.header-container');
console.log(header);
const child = Header();
header.appendChild(child);
