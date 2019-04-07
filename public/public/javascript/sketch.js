let mobilenet;
let classifier;
let video;
let label = 'loading model';
let carrot;
let bean;
let trainButton;

var model_classes = new Set();


function modelReady() {
  console.log('Model is ready!!!');
  console.log('loaded model');
  classifier.load('model.json', customModelReady);
}

function customModelReady() {
  console.log('Custom Model is ready!!!');
  label = 'model ready';
  //classifier.classify(gotResults);
}

function videoReady() {
  console.log('Video is ready!!!');
  classifier.classify(gotResults);
}

function setup() {
  createCanvas(320, 270);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  classifier = mobilenet.classification(video, videoReady);

  carrot = createButton('carrot');
  carrot.mousePressed(function () {
    classifier.addImage('carrot');
  });

  bean = createButton('bean');
  bean.mousePressed(function () {
    classifier.addImage('bean');
  });

  garlic = createButton('garlic');
  garlic.mousePressed(function () {
    classifier.addImage('garlic');
  });


  potato = createButton('potato');
  potato.mousePressed(function () {
    classifier.addImage('potato');
  });


  tomato = createButton('tomato');
  tomato.mousePressed(function () {
    classifier.addImage('tomato');
  });

  
  egg = createButton('egg');
  egg.mousePressed(function () {
    classifier.addImage('egg');
  });

  trainButton = createButton('train');
  trainButton.mousePressed(function () {
    classifier.train(whileTraining);
  });

  saveButton = createButton('save');
  saveButton.mousePressed(function () {
    classifier.save();
  });
}

function draw() {
  background(0);
  image(video, 0, 0, 320, 240);
  fill(255);
  textSize(16);
  text(label, 10, height - 10);
}


function whileTraining(loss) {
  if (loss == null) {
    console.log('Training Complete');
  } else {
    console.log(loss);
  }
}


function gotResults(error, result) {
  if (error) {
    console.info(error);
  } else {
    label = result;
    model_classes.add(result);
    classifier.classify(gotResults);
  }
}