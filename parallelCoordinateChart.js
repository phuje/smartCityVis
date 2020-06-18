{
  // set the dimensions and margins of the graph
  var margin = {top: 30, right: 10, bottom: 10, left: 0},
    width = 800 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  var svg = d3.select("#pcpDiv")
  .append("svg")
    .attr("class", "svgPcp")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

  var x;
  var y = {};
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
      y[name] = d3.scaleLinear()
        .domain( /*d3.extent(data, function(d) { return +d[name]; })*/[0, 100] )
        .range([height, 0])
    }

    x = d3.scalePoint()
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
        .style("stroke", /*"#69b3a2"*/getColor)

        
    // Draw the axis:
    axes = svg.selectAll("myAxis")
      // For each dimension of the dataset I add a 'g' element:
      .data(dimensions).enter()
      .append("g")
        // I translate this element to its right position on the x axis
        .attr("transform", function(d) { return "translate(" + x(d) + ")"; })
        // And I build the axis with the call function
        .each(function(d) { d3.select(this).call(d3.axisLeft().scale(y[d])); })
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
    return d3.line()(dimensions.map(function(p) { return [x(p), y[p](d[p])]; }));
  }

  function drawPCP(){
    
    // get the current width of the div where the chart appear, and attribute it to Svg
    var currentWidth = parseInt(d3.select('#pcpDiv').style('width'), 10);
    d3.select(".svgPcp").attr("width", currentWidth);


    // Build the X scale -> it find the best position for each Y axis
    x = d3.scalePoint()
      .range([0, currentWidth])
      .padding(1)
      .domain(dimensions);

    paths.attr("d", path);

    axes.attr("transform", function(d) { return "translate(" + x(d) + ")"; })


  }

  // Add an event listener that run the function when dimension change
  window.addEventListener('resize', drawPCP );


}