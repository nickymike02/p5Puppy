function setup() {
    createCanvas(640, 480);
}

function draw() {
    background('#FFFAED');
    var x = width/2;
    var y = height/2;
    
    //face
    noStroke();
    fill('#ffffff');
    ellipse(x, y, 200, 200);
    fill('#ff9900');
    arc(x, y+10, 200, 220, PI, PI+HALF_PI);
    arc(x, y+10, 200, 220, PI+HALF_PI, TWO_PI);
    fill('#ffffff');
    ellipse(x, y-20, 100, 130);
    ellipse(x, y, 100, 100);
    
    //nose
    fill('#000000');
    ellipse(x-10, y+5, 12, 5);
    ellipse(x+10, y+5, 12, 5);
    
    //eyeLeft
    fill('#000000');
    ellipse(x+42, y-26, 70, 70);
    
    //pupilLeft
    fill('#ffffff');
    ellipse(x+28, y-42, 15, 19);
    
    //eyeRight
    fill('#000000');
    ellipse(x-42, y-26, 70, 70);
    
    //pupilRight
    fill('#ffffff');
    ellipse(x-56, y-42, 15, 19);
    
    //mouth
    fill('#000000');
    ellipse(x, y+55, 80, 80);
    
    //teeth
    fill('#ffffff');
    rect(x+10, y+86, 2, 6);
    rect(x-10, y+86, 2, 6);
}