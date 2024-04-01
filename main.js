Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
})

  camera = document.getElementById("camera");

  Webcam.attach('#camera');

  function take_snapshot()
  {
    Webcam.snap(function(data_uri) {
        document.getElementById("snap").innerHTML = '<img id="captured_image" src = "'+data_uri+'"/> ';
    });
  }

  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/OYHz1vwmx/model.json',loaded);

  console.log('ml5 version:',ml5.version);

  function loaded() {
    console.log('Model Loaded!');
    }

    function speak(){
        var synth = window.speechSynthesis;
        speak_data = "The prediction is " + prediction_1;
        var utterThis = new SpeechSynthesisUtterance (speak_data_);
        synth.speak(utterThis);
        }

  function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }

  function gotResult(error, results) {
    if (error) {
      console.error(error);
    } else{
      console.log(results);
      document.getElementById("result_1").innerHTML = results[0].label;
      prediction_1 = results[0].label;
      speak();
      if(results[0].label == "like")
      {
        document.getElementById("update_1").innerHTML = "&#128077; it's a Like!!";
      }
      if(results[0].label == "heart")
      {
        document.getElementById("update_1").innerHTML = "&#129782; it's a heart!!";
      }
      if(results[0].label == "victory")
      {
        document.getElementById("update_1").innerHTML = "&#9996; it's a win!!";
      }
      if(results[0].label == "super")
      {
        document.getElementById("update_1").innerHTML = "&#128076; it's a Superb!!";
      }
    }
  }