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

d3.csv(
  "https://raw.githubusercontent.com/phuje/Data-test/master/smartCity-score-general.csv",
  function(data) {
    numberCities = data.length;
    
    
    //for (var i = 0; i < data.length; i++) {
      
     // console.log(data[i].Stadt);


      // X axis: scale and draw:
      var x = d3.scaleLinear()
        .domain([0, 100])     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
        .range([0, widthRanking]);

      svgRanking.append("g")
        .attr("transform", "translate(0," + heightRanking + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
          .attr("transform", "translate(-10,0)rotate(-45)")
          .style("text-anchor", "end");

      // Y axis
      var y = d3.scaleBand()
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
          //.style("opacity", 0.6)


    //}

    console.log("Staedte Insgesamt: ", numberCities);
  }
);


