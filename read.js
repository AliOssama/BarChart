var ourData = d3.csv("colors.csv");
var jsonData = d3.json("colors.json")
//   function(data) {
//
//   console.log(data);
// });

var csvSvg = function(data){
  var width = 500;
  var height = 300;
  var barWidth = width/data.length;

  var svg = d3.select("#svg1")
              .attr("width",width)
              .attr("height",height)
  drawBars(data,svg,width,height,barWidth)
}

var jsonSvg = function(data){
  var width = 500;
  var height = 300;
  var barWidth = width/data.length;

  var svg = d3.select("#svg2")
              .attr("width",width)
              .attr("height",height)
  drawBars(data,svg,width,height,barWidth)
}

var drawBars = function(barData,svg,width,height,barWidth){
  // var width = 500;
  // var height = 300;
  // var barWidth = width/barData.length;
  //
  // var svg = d3.select("svg")
  //             .attr("width",width)
  //             .attr("height",height)

  svg.selectAll("rect")
     .data(barData)
     .enter()
     .append("rect")
     .attr("x",function(d,i)
      {
        return i * barWidth;
      })
    .attr("y",function(d)
    {
      return height - d.amount * 20;
    })
    .attr("width",barWidth)
    .attr("height",function(d)
    {
      return d.amount*20;
    })
    .attr("fill",function(d)
    {
      return d.color;
    })
    .attr("data-legend",function(d) {return d.color});


  svg.selectAll("text")
    .data(barData)
    .enter()
    .append("text")
    .text(function(d) {
      return d.amount;
    })
    .attr("x", function(d,i){
       return i*barWidth + (barWidth/2);
    })
    .attr("y", function(d)
    {
      // console.log(d.amount);
      return height - (d.amount*10);
    })
    .attr("fill","white")
    .attr("text-anchor","middle");

}


ourData.then(function(data)
  {
    csvSvg(data);
  },
  function(err){
    console.log(err);
  });

jsonData.then(function(data)
    {
      jsonSvg(data);
    },
    function(err){
      console.log(err);
    })
