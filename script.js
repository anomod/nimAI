var playingField = [];


function setup() {
    
}

var done = false;
function draw() {
    if(!done) {
        background('white');
        done = true;
    }
    
    text("this is a test", 50, 200);
    fill(0,0,0);
    rect(0,0,50,50);
}