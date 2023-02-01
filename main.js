img_bath = "";
img_bed = "";
img_kit = "";
img_med = "";
img_off = "";
status_obj = "";

function preload(){
    img_bath = loadImage('Bathroom.jpg');
    img_bed = loadImage('Bedroom.png');
    img_kit = loadImage('Kitchen.jpg');
    img_med = loadImage('Media_Room.jpg');
    img_off = loadImage('Office_or_Study.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    object_detected = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded");
    status_obj = true;
    object_detected.detect(img, gotResult);
}

function gotResult(error, results){
    if(error)
    {console.log(error);}
    else{console.log(results);}
}