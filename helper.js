
var numberCities = 81;

function getColor(d){
    var color = d3.scaleLinear()
      .domain([0, 100])
      .range(["red","#0101DF"]);
    return color(d[category]);
}

function getColorByGesamtwertung(d){
  var color = d3.scaleLinear()
    .domain([0, 100])
    .range(["red","#0101DF"]);
  return color(d.Gesamtwertung);
}
