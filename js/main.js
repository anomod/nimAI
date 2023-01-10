let p5 = require("p5");

class Field {
    field;
    constructor() {
        field = GeneratePiles(Math.random(2,21), Math.random(1,10));
    }

    GeneratePiles(numPiles, maxBlocks) {
        let piles = [];
        for (let i = 0; i < numPiles; i++) {
          piles.push(Math.floor(Math.random() * (maxBlocks + 1)));
        }
        return piles;
      }

    DrawPiles(field) {
        for(let i = 0; i < field.length; i++) {
            for(let j = 0; j < field[i]; j++) {
                
            }
        }
    }
}

class Block {
    x;
    y;
    width;
    height;
    constructor(x, y) {

        
    }

    Update() {
        if(mouseClicked()) {

        }
    }
 
    Draw() {
        rectangle(x,y,widht,height);
    }
}
