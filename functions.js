function startOver(){

    antCounter = OGAntCounter;
    dotCounter = OGDotCounter;
    formicary = [];
    polkaDots = [];

    foodRatio = random(0.3, 0.7);
    console.log(foodRatio);
    console.log(foodRatio.toFixed(0));

    for(let i = 0; i < antCounter; i++){
        let tempVel = p5.Vector.random2D().mult(random(0.1, 0.5));
        let ant = new Ant(randIntErval(5, width-5), randIntErval(5, height-5), tempVel.x, tempVel.y);
        formicary.push(ant);
    }

    for(let i = 0; i < int(dotCounter * foodRatio); i++){
        polkaDots.push(new Dot(randIntErval(15, width-15), randIntErval(15, height-15), "food"));
    }
    for(let i = int(dotCounter * foodRatio); i < dotCounter; i++){
        polkaDots.push(new Dot(randIntErval(15, width-15), randIntErval(15, height-15), "danger"));
    }

    // new polkaDots generation method ahead
/*
    let ypes = ["food", "danger"];
    for(let i = 0; i < dotCounter; i++){
        polkaDots.push(new Dot)
    }
*/

}

function randIntErval(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function addAnt(){
    let tempVel = p5.Vector.random2D().mult(random(0.1, 0.5));
    let ant = new Ant(random(width), random(height), tempVel.x, tempVel.y);
    formicary.push(ant);
    antCounter++;
}

function removeAnt(){
    formicary.pop();
    antCounter--;
}


function addFoodDot(){
    polkaDots.push(new Dot(mouseX, mouseY, "food"));
    dotCounter++;
}

function addDangerDot(){
    polkaDots.push(new Dot(mouseX, mouseY, "danger"));
    dotCounter++;
}