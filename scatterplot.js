{
    // set the dimensions and margins of the graph
    var marginScatter = {top: 50, right: 80, bottom: 90, left: 100},
        widthScatter = 680 - marginScatter.left - marginScatter.right,
        heightScatter = 550 - marginScatter.top - marginScatter.bottom;

    // append the svg object to the body of the page
    var svgScatter = d3.select("#scatterplotDiv")
        .append("svg")
            .attr("width", widthScatter + marginScatter.left + marginScatter.right)
            .attr("height", heightScatter + marginScatter.top + marginScatter.bottom)
        .append("g")
            .attr("transform",
                "translate(" + marginScatter.left + "," + marginScatter.top + ")");

    var xScatter;
    var yScatter;
    var scatterPoints;
    var xLabel; 
    var xAxisScatter;
    var verticalGridLines;
    var horizontalGridLines;

    //Read the data
    d3.csv("https://raw.githubusercontent.com/phuje/smartCityVis/master/data/smartCityData-inhabitants-area.csv", function(data) {

        drawScatterplot(data);


    })

    function drawScatterplot(data){
        
        // Add X axis
        xScatter = d3.scaleLinear()
            .domain([0, 100])
            .range([ 0, widthScatter]);
        
        xAxisScatter = svgScatter.append("g")
            .attr("transform", "translate(0," + heightScatter + ")")
            .call(d3.axisBottom(xScatter));

        // Add Y axis
        yScatter = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) { return +d.Einwohner })])
            .range([ heightScatter, 0]);
        svgScatter.append("g")
            .call(d3.axisLeft(yScatter));

        // Add dots
        scatterPoints = svgScatter.append('g')
            .selectAll("dot")
            .data(data)
            .enter()
            .append("circle")
                .attr("class", "circleScatter")
                .attr("cx", function (d) { return xScatter(d.Gesamtwertung); } )
                .attr("cy", function (d) { return yScatter(d.Einwohner); } )
                .attr("r", function(d){return 4;/* return d.Area/50;*/})
                .style("fill", getColorByGesamtwertung)
                .on("mouseover", showTooltipScatter)
                .on("mouseleave", hideTooltipScatter)

        // Add X axis label:
        xLabel = svgScatter.append("text")
            .attr("text-anchor", "end")
            .attr("x", widthScatter)
            .attr("y", heightScatter + marginScatter.top )
            .text("Smart City Gesamtwertung");

        // Y axis label:
        svgScatter.append("text")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(-90)")
            .attr("y", -marginScatter.left+20)
            .attr("x", -marginScatter.top)
            .text("Einwohnerzahl")

        
        buildGrid();

        adjustScatterplotX(); //adjust based on screen width

    }

    //builds the grid lines according to the data 
    function buildGrid(){
        //horizontal grid
        horizontalGridLines = svgScatter.selectAll(".hlines").data(yScatter.ticks(8)).enter()
        .append("line")
            .attr("class", "hlines")
            .attr("x1", 0)
            .attr("x2", widthScatter)
            .attr("y1", function(d){ return yScatter(d);})
            .attr("y2", function(d){ return yScatter(d);});

        //vertical grid
        verticalGridLines =svgScatter.selectAll(".vlines").data(xScatter.ticks(11)).enter()
            .append("line")
                .attr("class", "vlines")
                .attr("x1", function(d){ return xScatter(d);})
                .attr("x2", function(d){ return xScatter(d);})
                .attr("y1", 0)
                .attr("y2", heightScatter);
    }


    /*RESPONSIVE*/
    //finishes drawing the chart adapted to current device width
  function adjustScatterplotX(){
    
    // get the current width of the div where the chart appear, and attribute it to Svg
    var currentWidth = parseInt(d3.select('#scatterplotDiv').style('width'), 10);
    d3.select(".svgScatter").attr("width", currentWidth+ marginScatter.left + marginScatter.right);


    xScatter = d3.scaleLinear()
        .domain([0, 100])
        .range([ 0, currentWidth-marginScatter.left-marginScatter.right ]);

    xLabel
        .attr("text-anchor", "end")
        .attr("x", currentWidth-marginScatter.left-marginScatter.right)
        .attr("y", heightScatter + marginScatter.top )
        .text("Smart City Gesamtwertung");

    xAxisScatter 
        .attr("transform", "translate(0," + heightScatter + ")")
        .call(d3.axisBottom(xScatter));

    scatterPoints.attr("cx", function (d) { return xScatter(d.Gesamtwertung); } )

    verticalGridLines
        .attr("x1", function(d){ return xScatter(d);})
        .attr("x2", function(d){ return xScatter(d);})
    horizontalGridLines
        .attr("x2", currentWidth-marginScatter.left-marginScatter.right)


  }

  // Add an event listener that run the function when dimension change
  window.addEventListener('resize', adjustScatterplotX );


  // ---------------------------//
  //      TOOLTIP               //
  // ---------------------------//

  // -1- Create a tooltip div that is hidden by default:
  var tooltipScatter = d3
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
  var showTooltipScatter = function(d) {
    //console.log("showTooltip"+x(d.Stadt));
    tooltipScatter
      .style("opacity", 1)
      .html("<b>"+d.Stadt+"</b><br> Gesamtwertung: "+ d.Gesamtwertung +"<br> Einwohner: "+d.Einwohner)
      //.style("left", (d3.mouse(this)[0]+70) + "px")
      //.style("top", (d3.mouse(this)[1]) + "px")
      //.style("top", yScatter(d.Einwohner)+160+ "px")
      //.style("left", xScatter(d.Gesamtwertung) + "px")
      .style("left", event.pageX + "px")
      .style("top", event.pageY+ "px");
  };

  var hideTooltipScatter = function(d) {
    tooltipScatter
      .style("opacity", 0);
  };

}