
var numberCities = 81;

function getColor(d){
    var color = d3.scaleLinear()
      .domain([0, numberCities])
      .range(["#0101DF", "red"]);
    return color(d.Rang);
}
