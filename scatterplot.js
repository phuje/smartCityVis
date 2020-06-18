{
    // set the dimensions and margins of the graph
    var marginScatter = {top: 50, right: 80, bottom: 90, left: 100},
        widthScatter = 680 - marginScatter.left - marginScatter.right,
        heightScatter = 520 - marginScatter.top - marginScatter.bottom;

    // append the svg object to the body of the page
    var svgScatter = d3.select("#scatterplotDiv")
        .append("svg")
            .attr("width", widthScatter + marginScatter.left + marginScatter.right)
            .attr("height", heightScatter + marginScatter.top + marginScatter.bottom)
        .append("g")
            .attr("transform",
                "translate(" + marginScatter.left + "," + marginScatter.top + ")");

    var xScatter;
    var scatterPoints;
    var xLabel; 
    var xAxisScatter;

    //Read the data
    d3.csv("https://raw.githubusercontent.com/phuje/smartCityVis/master/data/smartCityData-inhabitants.csv", function(data) {

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
        var yScatter = d3.scaleLinear()
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
            .attr("cx", function (d) { return xScatter(d.Gesamtwertung); } )
            .attr("cy", function (d) { return yScatter(d.Einwohner); } )
            .attr("r", 3)
            .style("fill", getColor)
            .style("opacity", 0.5)
            .on("mouseover", showTooltipScatter)

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

        adjustScatterplotX(); //adjust based on screen width
    }

    function showTooltipScatter(){

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


  }

  // Add an event listener that run the function when dimension change
  window.addEventListener('resize', adjustScatterplotX );
}