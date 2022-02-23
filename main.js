https://teachablemachine.withgoogle.com/models/phqL0CZl0/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dEr0jhcbD/model.json', modelReady);
}

function modelReady(){
    classifierClassify(gotResults);
}