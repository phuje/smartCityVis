{
  // set the dimensions and margins of the graph
  var marginPCP = {top: 30, right: 10, bottom: 10, left: 10},
    width = 800 - marginPCP.left - marginPCP.right,
    height = 550 - marginPCP.top - marginPCP.bottom;

  // append the svg object to the body of the page
  var svg = d3.select("#pcpDiv")
  .append("svg")
    .attr("class", "svgPcp")
    .attr("width", width + marginPCP.left + marginPCP.right)
    .attr("height", height + marginPCP.top + marginPCP.bottom)
  .append("g")
    .attr("transform",
          "translate(" + marginPCP.left + "," + marginPCP.top + ")");

  var xPCP;
  var yPCP = {};
  var myData;

  var paths;
  var axes;

  // Parse the Data
  d3.csv("https://raw.githubusercontent.com/phuje/Data-test/master/smartCity-score-general.csv", function(data) {

    numberCities = data.length;
    myData = data;

    // Extract the list of dimensions we want to keep in the plot. Here I keep all except the column called Rang, Stadt and Gesamtwertung
    dimensions = d3.keys(data[0]).filter(function(d) { return d != "Rang" && d != "Stadt" && d != "Gesamtwertung" })

    console.log(dimensions);

    // For each dimension, I build a linear scale. I store all in a y object
    
    for (i in dimensions) {
      name = dimensions[i]
      yPCP[name] = d3.scaleLinear()
        .domain( /*d3.extent(data, function(d) { return +d[name]; })*/[0, 100] )
        .range([height, 0])
    }

    xPCP = d3.scalePoint()
    .range([0, width])
    .padding(1)
    .domain(dimensions);


    // Draw the lines
    paths = svg
      .selectAll("myPath")
      .data(myData)
      .enter().append("path")
        .attr("class", "parallelCoordinateLine")
        .attr("d",  path)
        .style("fill", "none")
        .style("stroke", getColorByGesamtwertung)
        .on("mouseover", showInfo);

        
    // Draw the axis:
    axes = svg.selectAll("myAxis")
      // For each dimension of the dataset I add a 'g' element:
      .data(dimensions).enter()
      .append("g")
        // I translate this element to its right position on the x axis
        .attr("transform", function(d) { return "translate(" + xPCP(d) + ")"; })
        // And I build the axis with the call function
        .each(function(d) { d3.select(this).call(d3.axisLeft().scale(yPCP[d])); })
        // Add axis title
        
    axes.append("text")
          .style("text-anchor", "middle")
          .attr("y", -9)
          .text(function(d) { return d; })
          .style("fill", "black")


    drawPCP();

  })

  // The path function take a row of the csv as input, and return x and y coordinates of the line to draw for this raw.
  function path(d) {
    return d3.line()(dimensions.map(function(p) { return [xPCP(p), yPCP[p](d[p])]; }));
  }

  //finishes drawing the chart adapted to current device width
  function drawPCP(){
    
    // get the current width of the div where the chart appear, and attribute it to Svg
    var currentWidth = parseInt(d3.select('#pcpDiv').style('width'), 10);
    d3.select(".svgPcp").attr("width", currentWidth);


    // Build the X scale -> it find the best position for each Y axis
    xPCP = d3.scalePoint()
      .range([0, currentWidth])
      .padding(1)
      .domain(dimensions);

    paths.attr("d", path);

    axes.attr("transform", function(d) { return "translate(" + xPCP(d) + ")"; })


  }

  // Add an event listener that run the function when dimension change
  window.addEventListener('resize', drawPCP );


  // ---------------------------//
  //      Info                 //
  // ---------------------------//

  // -1- Create a tooltip div that is hidden by default:
  var pcpInfo = d3
    .select("#pcpInfo")
    //.append("div")
    .style("opacity", 1)
    .attr("class", "tooltip")
    .style("background-color", "black")
    .style("border-radius", "5px")
    .style("padding", "10px")
    .style("color", "white")
    .html("Stadt - Gesamtwertung - Rang");
    //.style("position", "absolute");
    //.style("display", "inline-flex");

  // -2- Create 3 functions to show / update (when mouse move) / hide the tooltip
  var showInfo = function(d) {

    pcpInfo
      .style("opacity", 1)
      .html(d.Stadt +" - Gesamtwertung: "+ d["Gesamtwertung"]+" - Rang: "+d.Rang);
        /*"<br> Verwaltung: "+d.Verwaltung+
        "<br> IT&Kommunikation: "+d["IT und Kommunikation"]+
        "<br> Energie & Umwelt: "+d["Energie und Umwelt"]+
        "<br> Mobilität: "+d["Mobilität"]+
        "<br> Gesellschaft: "+d.Gesellschaft)*/;
    
  };

  var hideInfo = function(d) {
    pcpInfo
      .style("opacity", 0);
  };

}