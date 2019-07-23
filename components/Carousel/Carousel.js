/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const imageFolder = "./assets/carousel";
import readdir from 'fs';
readdir(imageFolder, (err, files) => {
  files.forEach(file =>{
    console.log(file);
  });
});


function Carousel(){
  function createElement(element, style, content, image){
    const div = document.createElement(element);
    if (style != null){ div.classList = style; }
    if (content != null){ div.textContent = content; }
    if (image != null){ div.src = image; }
  }

  const div = createElement('div','carousel');
  const imageArr = ["./assets/carousel/computer.jpeg",]

}