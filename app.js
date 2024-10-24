




const images = ['./images/amazing-bengal-tiger-nature.jpg','./images/african-lion-portrait-warm-light.jpg','./images/beautiful-elephant-gravel-pathway-surrounded-by-green-grass-trees.jpg','./images/close-up-wild-animal-nature.jpg','./images/highly-detailed-view-fox-its-natural-environment.jpg','./images/view-wild-elk-nature.jpg'];

const slideimg = document.getElementById('animal-image');
let index = 0;
function next(){

    if(index < images.length -1){
        index++;
    }else{
        index = 0;
    }
    slideimg.src = images[index];
}

function prev(){
    if(index>0){
        index--;
    }else{

        index < images.length -1
    }
    slideimg.src = images[index];
}
// setInterval method automatically call next function after every three second
setInterval(next,3000);