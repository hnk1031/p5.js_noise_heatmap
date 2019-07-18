var noiseVal = 50;
var cellSize = 5;
var zseed = 0;

function setup() {
    createCanvas(375, 375);
    colorMode(HSB);
    background(255);
    noStroke();
}

function draw() {
    for (var y=0; y*cellSize < height; y++) {
        for (var x=0; x*cellSize < width; x++) {
            var fillCol = noise(x/noiseVal, y/noiseVal, zseed)*480;
            fill(fillCol, 100, 100, 1);
            rect(x*cellSize, y*cellSize, cellSize, cellSize);
        }
    }
    zseed += 0.005;
}