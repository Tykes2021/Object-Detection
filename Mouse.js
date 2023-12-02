Status = "";

Mouse_image = "";

function preload()

{

    Mouse_image = loadImage("Mouse.jpg");

}

function setup()

{

    canvas = createCanvas(600,350);

    canvas.position(475,200);

    object_Detector = ml5.objectDetector('cocossd',modelLoaded);

    document.getElementById("status").innerHTML = "Status: Detecting Objects";

}

function modelLoaded()

{

    console.log("Model Loaded!");

    Status = true;

    object_Detector.detect(Mouse_image,gotResults);

}

function gotResults(error,results)

{

    if(error)
    
    {

        console.error(error);

    }

    console.log(results);

}

function draw()

{

    image(Mouse_image,0,0,640,350);
    
}