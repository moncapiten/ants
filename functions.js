function startOver(){

    antCounter = OGAntCounter;
    dotCounter = OGDotCounter;
    formicary = [];
    polkaDots = [];

    foodRatio = random(0.3, 0.7);
    console.log(foodRatio);

    for(let i = 0; i < antCounter; i++){
        let tempVel = p5.Vector.random2D().mult(random(0.1, 0.5));
        let ant = new Ant(random(width), random(height), tempVel.x, tempVel.y);
        formicary.push(ant);
    }

    for(let i = 0; i < int(dotCounter * foodRatio); i++){
        polkaDots.push(new Dot(random(width), random(height), "food"));
    }
    for(let i = int(dotCounter * foodRatio); i < dotCounter; i++){
        polkaDots.push(new Dot(random(width), random(height), "danger"));
    }

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