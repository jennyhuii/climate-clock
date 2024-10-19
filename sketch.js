let data;
let totalRowCount;
let rowNum = 0;
const columns = [
  "Year",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

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

let columnNum = 1;

function preload() {
  data = loadTable("data.csv", "csv", "header");
}

function setup() {
  totalRowCount = data.getRowCount();
  createCanvas(windowWidth, windowHeight);
  frameRate(3);
  colorMode(RGB);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  noFill();
  //the stroke weight is twice as much if the screen is fullsize
  strokeWeight(4);
  const row = data.getRow(rowNum);
  const circleSize = rowNum * 5;

  circleColor(row.obj[columns[columnNum]]);
  arc(windowWidth / 2, windowHeight / 2, circleSize, circleSize, -90, -60);
  columnNum++;

  circleColor(row.obj[columns[columnNum]]);
  arc(windowWidth / 2, windowHeight / 2, circleSize, circleSize, -60, -30);
  columnNum++;

  circleColor(row.obj[columns[columnNum]]);
  arc(windowWidth / 2, windowHeight / 2, circleSize, circleSize, -30, 0);
  columnNum++;

  circleColor(row.obj[columns[columnNum]]);
  arc(windowWidth / 2, windowHeight / 2, circleSize, circleSize, 0, 30);
  columnNum++;

  circleColor(row.obj[columns[columnNum]]);
  arc(windowWidth / 2, windowHeight / 2, circleSize, circleSize, 30, 60);
  columnNum++;

  circleColor(row.obj[columns[columnNum]]);
  arc(windowWidth / 2, windowHeight / 2, circleSize, circleSize, 60, 90);
  columnNum++;

  circleColor(row.obj[columns[columnNum]]);
  arc(windowWidth / 2, windowHeight / 2, circleSize, circleSize, 90, 120);
  columnNum++;

  circleColor(row.obj[columns[columnNum]]);
  arc(windowWidth / 2, windowHeight / 2, circleSize, circleSize, 120, 150);
  columnNum++;

  circleColor(row.obj[columns[columnNum]]);
  arc(windowWidth / 2, windowHeight / 2, circleSize, circleSize, 150, 180);
  columnNum++;

  circleColor(row.obj[columns[columnNum]]);
  arc(windowWidth / 2, windowHeight / 2, circleSize, circleSize, 180, 210);
  columnNum++;

  circleColor(row.obj[columns[columnNum]]);
  arc(windowWidth / 2, windowHeight / 2, circleSize, circleSize, 210, 240);
  columnNum++;

  circleColor(row.obj[columns[columnNum]]);
  arc(windowWidth / 2, windowHeight / 2, circleSize, circleSize, 240, 270);
  columnNum++;

  rowNum++;
  columnNum = 1;
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
