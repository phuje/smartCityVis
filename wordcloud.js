//VERWALTUNG
admin= ["DMS und eRechnung",
"Bargeldloses Bezahlen und ePayment",
"Online Terminvergabe",
"Online Bürgerservices",
"Website und Kommunikations - Tools",
"Social Media Präsenz",
"City-App"];

//IT
it= ["Breitband", 
"Glasfaser",
"Mobilfunk",
"Public WLAN",
"LoRaWAN"];

//ENERGIE
energy=["Intelligente Straßenlaternen",
"Photovoltaik",
"Smart Waste", 
"City Logistik",
"Beschaffung von Elektrogeräten",
"Entsorgung von Elektrogeräten",
"E-Fahrzeuge",
"Ladeinfrastruktur",
"Emissionsarme Busse"];

//MOBILITÄT
mobility=["Parken",
"Digitale Verkehrsschilder",
"Intelligente Ampeln",
"Handytickets im ÖPNV",
"Echtzeitinformationen im ÖPNV",
"Carsharing",
"RideSharing"];

//GESELLSCHAFT
society=["Bürgerbeteiligungsplattform",
"FabLabs", 
"Coworking",
"Open-Data Plattform",
"Geodatenportal",
"Handelsplattform"];

initWordcloudData();

function initWordcloudData() {
	var words=[];
	var i=0;
	while(i<admin.length) {
		var word={};
		word.word=admin[i];
		word.area=['Verwaltung'];
		word.size=15;
		word.col='#aabbaa';
		if(map_selectedAtt==word.area) {
			word.size=30;
			word.col='#39a0ca';
		}
		words.push(word);
		i++;
	}
	i=0;
	while(i<it.length) {
		var word={};
		word.word=it[i];
		word.area=['IT und Kommunikation'];
		word.size=15;
		word.col='#aabbaa';
		if(map_selectedAtt==word.area) {
			word.size=30;
			word.col='#39a0ca';
		}
		words.push(word);
		i++;
	}
	i=0;
	while(i<energy.length) {
		var word={};
		word.word=energy[i];
		word.area=['Energie und Umwelt'];
		word.size=15;
		word.col='#aabbaa';
		if(map_selectedAtt==word.area) {
			word.size=30;
			word.col='#39a0ca';
		}
		words.push(word);
		i++;
	}
	i=0;
	while(i<mobility.length) {
		var word={};
		word.word=mobility[i];
		word.area=['Mobilität'];
		word.size=15;
		word.col='#aabbaa';
		if(map_selectedAtt==word.area) {
			word.size=30;
			word.col='#39a0ca';
		}
		words.push(word);
		i++;
	}
	i=0;
	while(i<society.length) {
		var word={};
		word.word=society[i];
		word.area=['Gesellschaft'];
		word.size=15;
		word.col='#aabbaa';
		if(map_selectedAtt==word.area) {
			word.size=30;
			word.col='#39a0ca';
		}
		words.push(word);
		i++;
	}
	drawWordcloud(words);
}

function drawWordcloud(words) {
	document.getElementById('wordcloud').innerHTML='';
	// set the dimensions and margins of the graph
var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 450 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#wordcloud").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits your requirements
// Wordcloud features that are different from one word to the other must be here
var layout = d3.layout.cloud()
  .size([width, height])
  .words(words.map(function(d) { return {text: d.word, size:d.size, col:d.col}; }))
  .padding(5)        //space between words
  .rotate(function() { return ~~(Math.random() * 2) * 90; })
  .fontSize(function(d) { return d.size; })      // font size of words
  .on("end", draw);
layout.start();

// This function takes the output of 'layout' above and draw the words
// Wordcloud features that are THE SAME from one word to the other can be here
function draw(words) {
  svg
    .append("g")
      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", function(d) { return d.size; })
        .style("fill", function(d) { return d.col; })
        .attr("text-anchor", "middle")
		.style("font-family", "Impact")
		.transition().duration(800)
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
		})
        .text(function(d) { return d.text; });
}
}
