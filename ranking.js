
var horizontal = false; // means the bars will be vertical and the cities horizontal

//functions for scaling the data to the x and y axes, set in makeBarChart
var x;
var y;


d3.csv(
  "https://raw.githubusercontent.com/phuje/Data-test/master/smartCity-score-general.csv",
  function(data) {
    numberCities = data.length;

     // sort data
    data.sort(function(b, a) {
      return a.Gesamtwertung - b.Gesamtwertung;
    });

    makeBarChart(data, horizontal);

    console.log("Staedte Insgesamt: ", numberCities);
  }
);


function makeBarChart(data, horizontal){
  //horizontal means the bars are horizontal (x axis) and the cities are vertical (y axis)
  if(horizontal){
    // set the dimensions and margins of the graph
    var marginRanking = {top: 10, right: 30, bottom: 30, left: 150},
    widthRanking = 850 - marginRanking.left - marginRanking.right,
    heightRanking = 1000 - marginRanking.top - marginRanking.bottom;

        // append the svg object to the body of the page
        var svgRanking = d3.select("#barchart")
        .append("svg")
          .attr("width", widthRanking + marginRanking.left + marginRanking.right)
          .attr("height", heightRanking + marginRanking.top + marginRanking.bottom)
        .append("g")
          .attr("transform",
                "translate(" + marginRanking.left + "," + marginRanking.top + ")");

          // X axis: scale and draw:
          x = d3.scaleLinear()
          .domain([0, 100])     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
          .range([0, widthRanking]);
  
        svgRanking.append("g")
          .attr("transform", "translate(0," + heightRanking + ")")
          .call(d3.axisBottom(x))
          .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end");

  
        // Y axis
        y = d3.scaleBand()
          .range([ 0, heightRanking ])
          .domain(data.map(function(d) { return d.Stadt; }))
          .padding(.2);

        svgRanking.append("g")
          .call(d3.axisLeft(y))
  
        //Bars
        svgRanking.selectAll("myRect")
          .data(data)
          .enter()
          .append("rect")
            .attr("class", "bar")
            .attr("x", x(0) )
            .attr("y", function(d) { return y(d.Stadt); })
            .attr("width", function(d) { return x(d.Gesamtwertung); })
            .attr("height", y.bandwidth() )
            .attr("fill", /*"#69b3a2"*/getColor)
            .on("mouseover", showTooltip)
            .on("mouseleave", hideTooltip);
            //.style("opacity", 0.6)
  }
  //not horizontal means the bars are vertical (y axis) and the cities are horizontal (x axis)
  else{
    var marginRanking = {top: 30, right: 30, bottom: 100, left: 50},
    widthRanking = 1400 - marginRanking.left - marginRanking.right,
    heightRanking = 400 - marginRanking.top - marginRanking.bottom;

    // append the svg object to the body of the page
    var svgRanking = d3.select("#barchart")
      .append("svg")
        .attr("width", widthRanking + marginRanking.left + marginRanking.right)
        .attr("height", heightRanking + marginRanking.top + marginRanking.bottom)
      .append("g")
        .attr("transform",
              "translate(" + marginRanking.left + "," + marginRanking.top + ")");

      // X axis: scale and draw:
      x = d3.scaleBand()
        .domain(data.map(function(d) { return d.Stadt; }))     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
        .range([0, widthRanking])
        .padding(0.1);

      svgRanking.append("g")
        .attr("transform", "translate(0," + heightRanking + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
          .attr("transform", "translate(-10,0)rotate(-45)")
          .style("text-anchor", "end");

      // Y axis
      y = d3.scaleLinear()
        .range([ heightRanking, 0 ])
        .domain([0, 100]);

      svgRanking.append("g")
      .call(d3.axisLeft(y));

      // Add the text label for the Y axis
      svgRanking.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - marginRanking.left)
      .attr("x",0 - (heightRanking / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Score");

      //Bars
      svgRanking.selectAll("myRect")
        .data(data)
        .enter()
        .append("rect")
          .attr("class", "bar")
          .attr("x", function(d) { return x(d.Stadt); } )
          .attr("y", function(d) { return y(d.Gesamtwertung); })
          .attr("width", x.bandwidth())
          .attr("height", function(d) { return heightRanking - y(d.Gesamtwertung); })
          .attr("fill", /*"#69b3a2"*/getColor)
          .on("mouseover", showTooltip)
          .on("mouseleave", hideTooltip);
          //.style("opacity", 0.6)
  }
}


// ---------------------------//
//      TOOLTIP               //
// ---------------------------//

// -1- Create a tooltip div that is hidden by default:
var tooltip = d3
  .select("#barchart")
  .append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "black")
  .style("border-radius", "5px")
  .style("padding", "10px")
  .style("color", "white")
  .style("position", "absolute");
  //.style("display", "inline-flex");

// -2- Create 3 functions to show / update (when mouse move) / hide the tooltip
var showTooltip = function(d) {
  //console.log("showTooltip"+x(d.Stadt));
  tooltip
    .style("opacity", 1)
    .html(d.Stadt +", Score: "+ d.Gesamtwertung)
    //.style("left", (d3.mouse(this)[0]+70) + "px")
    //.style("top", (d3.mouse(this)[1]) + "px")
    .style("top", y(d.Gesamtwertung)+120+ "px")
    //.style("left", x(d.Stadt) + "px")
    .style("left", event.pageX + "px");
    //.style("top", event.pageY+ "px");
    //.style("left", 1000 + "px")
    //.style("top", 200+ "px");
};

var hideTooltip = function(d) {
  //console.log("hideTooltip");
  tooltip
    .style("opacity", 0);
};


