let table;

function preload() {
  table = loadTable('BRTrafficIncidents.csv', 'csv', 'header');
}

function setup() {
  createCanvas(800, 800);
  background(255);
  textSize(12);
  fill(0);

  let incidentNumbers = table.getColumn("INCIDENT NUMBER");
  let streetAddresses = table.getColumn("STREET ADDRESS");

  let y = 20; 
  for (let i = 0; i < incidentNumbers.length && i < 30; i++) {
    let incident = incidentNumbers[i];
    let street = streetAddresses[i];
    if (!street || street.trim() === "") continue;

    text(`Incident: ${incident} | Street: ${street}`, 20, y);
    y += 20;
  }
}

function draw() {
  
}
