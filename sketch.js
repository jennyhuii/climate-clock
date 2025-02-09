let data;
let totalRowCount;
let rowNum = 0;

const january = [];
const february = [];
const march = [];
const april = [];
const may = [];
const june = [];
const july = [];
const august = [];
const september = [];
const october = [];
const november = [];
const december = [];

function preload() {
  data = loadTable("data.csv", "csv", "header");
}

function setup() {
  totalRowCount = data.getRowCount();
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  noFill();
  //the stroke weight is twice as much if the screen is fullsize
  strokeWeight(1);
  const row = data.getRow(rowNum);
  const circleSize = rowNum * 5;

  january.push({ width: circleSize, anomaly: row.obj["Jan"] });
  february.push({ width: circleSize, anomaly: row.obj["Feb"] });
  march.push({ width: circleSize, anomaly: row.obj["Mar"] });
  april.push({ width: circleSize, anomaly: row.obj["Apr"] });
  may.push({ width: circleSize, anomaly: row.obj["May"] });
  june.push({ width: circleSize, anomaly: row.obj["Jun"] });
  july.push({ width: circleSize, anomaly: row.obj["Jul"] });
  august.push({ width: circleSize, anomaly: row.obj["Aug"] });
  september.push({ width: circleSize, anomaly: row.obj["Sep"] });
  october.push({ width: circleSize, anomaly: row.obj["Oct"] });
  november.push({ width: circleSize, anomaly: row.obj["Nov"] });
  december.push({ width: circleSize, anomaly: row.obj["Dec"] });

  for (let i = 0; i < january.length; i++) {
    circleColor(january[i].anomaly);
    arc(
      windowWidth / 2,
      windowHeight / 2,
      january[i].width,
      january[i].width,
      -90,
      -60
    );
  }

  for (let i = 0; i < february.length; i++) {
    circleColor(february[i].anomaly);
    arc(
      windowWidth / 2,
      windowHeight / 2,
      february[i].width,
      february[i].width,
      -60,
      -30
    );
  }

  for (let i = 0; i < march.length; i++) {
    circleColor(march[i].anomaly);
    arc(
      windowWidth / 2,
      windowHeight / 2,
      march[i].width,
      march[i].width,
      -30,
      0
    );
  }

  for (let i = 0; i < april.length; i++) {
    circleColor(april[i].anomaly);
    arc(
      windowWidth / 2,
      windowHeight / 2,
      april[i].width,
      april[i].width,
      0,
      30
    );
  }

  for (let i = 0; i < may.length; i++) {
    circleColor(may[i].anomaly);
    arc(windowWidth / 2, windowHeight / 2, may[i].width, may[i].width, 30, 60);
  }

  for (let i = 0; i < june.length; i++) {
    circleColor(june[i].anomaly);
    arc(
      windowWidth / 2,
      windowHeight / 2,
      june[i].width,
      june[i].width,
      60,
      90
    );
  }

  for (let i = 0; i < july.length; i++) {
    circleColor(july[i].anomaly);
    arc(
      windowWidth / 2,
      windowHeight / 2,
      july[i].width,
      july[i].width,
      90,
      120
    );
  }

  for (let i = 0; i < august.length; i++) {
    circleColor(august[i].anomaly);
    arc(
      windowWidth / 2,
      windowHeight / 2,
      august[i].width,
      august[i].width,
      120,
      150
    );
  }

  for (let i = 0; i < september.length; i++) {
    circleColor(september[i].anomaly);
    arc(
      windowWidth / 2,
      windowHeight / 2,
      september[i].width,
      september[i].width,
      150,
      180
    );
  }

  for (let i = 0; i < october.length; i++) {
    circleColor(october[i].anomaly);
    arc(
      windowWidth / 2,
      windowHeight / 2,
      october[i].width,
      october[i].width,
      180,
      210
    );
  }

  for (let i = 0; i < november.length; i++) {
    circleColor(november[i].anomaly);
    arc(
      windowWidth / 2,
      windowHeight / 2,
      november[i].width,
      november[i].width,
      210,
      240
    );
  }

  for (let i = 0; i < december.length; i++) {
    circleColor(december[i].anomaly);
    arc(
      windowWidth / 2,
      windowHeight / 2,
      december[i].width,
      december[i].width,
      240,
      270
    );
  }

  rowNum++;
  if (rowNum === totalRowCount) {
    noLoop();
  }
}

//depending on the degree of the anomaly, the color of the arc is different so I made a function to facilitate that
function circleColor(anomaly) {
  if (anomaly <= -0.4) {
    stroke(0, 210, 255);
  } else if (anomaly > -0.4 && anomaly <= -0.3) {
    stroke(50, 220, 255);
  } else if (anomaly > -0.3 && anomaly <= -0.2) {
    stroke(100, 230, 255);
  } else if (anomaly > -0.2 && anomaly <= -0.1) {
    stroke(150, 240, 255);
  } else if (anomaly > -0.1 && anomaly <= 0) {
    stroke(200, 240, 255);
  } else if (anomaly > 0 && anomaly <= 0.1) {
    stroke(255, 200, 0);
  } else if (anomaly > 0.1 && anomaly <= 0.2) {
    stroke(255, 190, 0);
  } else if (anomaly > 0.2 && anomaly <= 0.3) {
    stroke(255, 180, 0);
  } else if (anomaly > 0.3 && anomaly <= 0.4) {
    stroke(255, 170, 0);
  } else if (anomaly > 0.4 && anomaly <= 0.5) {
    stroke(255, 160, 0);
  } else if (anomaly > 0.5 && anomaly <= 0.6) {
    stroke(255, 150, 0);
  } else if (anomaly > 0.6 && anomaly <= 0.7) {
    stroke(255, 140, 0);
  } else if (anomaly > 0.7 && anomaly <= 0.8) {
    stroke(255, 130, 0);
  } else if (anomaly > 0.8 && anomaly <= 0.9) {
    stroke(255, 120, 0);
  } else if (anomaly > 0.9 && anomaly <= 1) {
    stroke(255, 110, 0);
  } else if (anomaly > 1 && anomaly <= 1.1) {
    stroke(255, 100, 0);
  } else if (anomaly > 1.1 && anomaly <= 1.2) {
    stroke(255, 90, 0);
  } else if (anomaly > 1.2 && anomaly <= 1.3) {
    stroke(255, 80, 0);
  } else if (anomaly > 1.3 && anomaly <= 1.4) {
    stroke(255, 70, 0);
  } else if (anomaly > 1.4 && anomaly <= 1.5) {
    stroke(255, 60, 0);
  } else if (anomaly > 1.5 && anomaly <= 1.6) {
    stroke(255, 50, 0);
  } else if (anomaly > 1.6 && anomaly <= 1.7) {
    stroke(255, 40, 0);
  } else if (anomaly > 1.7 && anomaly <= 1.8) {
    stroke(255, 30, 0);
  } else if (anomaly > 1.8 && anomaly <= 1.9) {
    stroke(255, 20, 0);
  } else if (anomaly > 1.9) {
    stroke(255, 10, 0);
  }
}
