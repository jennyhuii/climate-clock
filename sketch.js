let data;
let totalRowCount;
let rowNum = 0;
let widthSpacing;
let heightSpacing;

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
}

function draw() {
  background(0);
  noFill();

  const row = data.getRow(rowNum);

  const xSpacing = windowWidth / 4;
  const ySpacing = windowHeight / 3;
  const xInitDistance = windowWidth / 8 - rowNum;
  const yInitDistance = windowHeight / 6 - rowNum;
  widthSpacing = windowWidth / 8 / data.getRowCount();
  heightSpacing = windowHeight / 6 / data.getRowCount();
  console.log(widthSpacing, heightSpacing);

  const januaryMidX = xInitDistance;
  const januaryMidY = yInitDistance;

  const februaryMidX = xInitDistance + xSpacing;
  const februaryMidY = yInitDistance;

  const marchMidX = xInitDistance + xSpacing * 2;
  const marchMidY = yInitDistance;

  const aprilMidX = xInitDistance + xSpacing * 3;
  const aprilMidY = yInitDistance;

  const mayMidX = xInitDistance;
  const mayMidY = yInitDistance + ySpacing;

  const juneMidX = xInitDistance + xSpacing;
  const juneMidY = yInitDistance + ySpacing;

  const julyMidX = xInitDistance + xSpacing * 2;
  const julyMidY = yInitDistance + ySpacing;

  const augustMidX = xInitDistance + xSpacing * 3;
  const augustMidY = yInitDistance + ySpacing;

  const septemberMidX = xInitDistance;
  const septemberMidY = yInitDistance + ySpacing * 2;

  const octoberMidX = xInitDistance + xSpacing;
  const octoberMidY = yInitDistance + ySpacing * 2;

  const novemberMidX = xInitDistance + xSpacing * 2;
  const novemberMidY = yInitDistance + ySpacing * 2;

  const decemberMidX = xInitDistance + xSpacing * 3;
  const decemberMidY = yInitDistance + ySpacing * 2;

  january.push({
    anomaly: row.obj["Jan"],
    x: januaryMidX,
    y: januaryMidY,
    width: rowNum * 2,
    height: rowNum * 2,
  });
  february.push({
    anomaly: row.obj["Feb"],
    x: februaryMidX,
    y: februaryMidY,
    width: rowNum * 2,
    height: rowNum * 2,
  });
  march.push({
    anomaly: row.obj["Mar"],
    x: marchMidX,
    y: marchMidY,
    width: rowNum * 2,
    height: rowNum * 2,
  });
  april.push({
    anomaly: row.obj["Apr"],
    x: aprilMidX,
    y: aprilMidY,
    width: rowNum * 2,
    height: rowNum * 2,
  });
  may.push({
    anomaly: row.obj["May"],
    x: mayMidX,
    y: mayMidY,
    width: rowNum * 2,
    height: rowNum * 2,
  });
  june.push({
    anomaly: row.obj["Jun"],
    x: juneMidX,
    y: juneMidY,
    width: rowNum * 2,
    height: rowNum * 2,
  });
  july.push({
    anomaly: row.obj["Jul"],
    x: julyMidX,
    y: julyMidY,
    width: rowNum * 2,
    height: rowNum * 2,
  });
  august.push({
    anomaly: row.obj["Aug"],
    x: augustMidX,
    y: augustMidY,
    width: rowNum * 2,
    height: rowNum * 2,
  });
  september.push({
    anomaly: row.obj["Sep"],
    x: septemberMidX,
    y: septemberMidY,
    width: rowNum * 2,
    height: rowNum * 2,
  });
  october.push({
    anomaly: row.obj["Oct"],
    x: octoberMidX,
    y: octoberMidY,
    width: rowNum * 2,
    height: rowNum * 2,
  });
  november.push({
    anomaly: row.obj["Nov"],
    x: novemberMidX,
    y: novemberMidY,
    width: rowNum * 2,
    height: rowNum * 2,
  });
  december.push({
    anomaly: row.obj["Dec"],
    x: decemberMidX,
    y: decemberMidY,
    width: rowNum * 2,
    height: rowNum * 2,
  });

  stroke(255);

  strokeWeight(1);
  for (let i = 0; i < january.length; i++) {
    circleColor(january[i].anomaly);
    rect(january[i].x, january[i].y, january[i].width, january[i].height);
  }
  for (let i = 0; i < february.length; i++) {
    circleColor(february[i].anomaly);
    rect(february[i].x, february[i].y, february[i].width, february[i].height);
  }
  for (let i = 0; i < march.length; i++) {
    circleColor(march[i].anomaly);
    rect(march[i].x, march[i].y, march[i].width, march[i].height);
  }
  for (let i = 0; i < april.length; i++) {
    circleColor(april[i].anomaly);
    rect(april[i].x, april[i].y, april[i].width, april[i].height);
  }
  for (let i = 0; i < may.length; i++) {
    circleColor(may[i].anomaly);
    rect(may[i].x, may[i].y, may[i].width, may[i].height);
  }
  for (let i = 0; i < june.length; i++) {
    circleColor(june[i].anomaly);
    rect(june[i].x, june[i].y, june[i].width, june[i].height);
  }
  for (let i = 0; i < july.length; i++) {
    circleColor(july[i].anomaly);
    rect(july[i].x, july[i].y, july[i].width, july[i].height);
  }
  for (let i = 0; i < august.length; i++) {
    circleColor(august[i].anomaly);
    rect(august[i].x, august[i].y, august[i].width, august[i].height);
  }
  for (let i = 0; i < september.length; i++) {
    circleColor(september[i].anomaly);
    rect(
      september[i].x,
      september[i].y,
      september[i].width,
      september[i].height
    );
  }
  for (let i = 0; i < october.length; i++) {
    circleColor(october[i].anomaly);
    rect(october[i].x, october[i].y, october[i].width, october[i].height);
  }
  for (let i = 0; i < november.length; i++) {
    circleColor(november[i].anomaly);
    rect(november[i].x, november[i].y, november[i].width, november[i].height);
  }
  for (let i = 0; i < december.length; i++) {
    circleColor(december[i].anomaly);
    rect(december[i].x, december[i].y, december[i].width, december[i].height);
  }

  rowNum++;
  if (rowNum === totalRowCount) {
    noLoop();
  }
}

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
