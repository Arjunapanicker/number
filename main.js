var SpeechRecognition = window.webkitSpeechRecognition;


var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();

}

recognition.onresult = function(event) 
{

    console.log(event);

    var Content =event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    speak();
}

function speak(){

    var synth = window.speechSynthesis;

    speak_data=document.getElementById("textbox").value;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);


}

camera = documnet.getElementById("camera");
Webcam.set({

    width:500,  
      height:500,
       image_format : 'jpeg',
    jpeg_qualitiy:90

});