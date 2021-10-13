Status="";
Video="";
function preload()
{
    video=createVideo('video.mp4');
    video.hide();
}

function setup()
{
    canvas=createCanvas(480, 380);
    canvas.center();
}

function draw()
{
    image(video, 0, 0, 480, 380);

}

function start()
{
    object_detector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status:detecting objects";

}
function modelLoaded()
{
    console.log("model is loaded");
    Status=true;
    video.loop();
    video.speed(2);
    video.volume(2);
}