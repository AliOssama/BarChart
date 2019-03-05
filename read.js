d3.csv("colors.csv", function(data) {

  console.log(data);
});

var drawGraph = function(barData){
  var width = 500;
  var height = 300;
  var barWidth = width/colorData.length;

  var svg = d3.select("svg")
              .attr("width",width)
              .attr("height",height)

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
      return height - d.amount * 10;
    })
    .attr("width",barWidth)
    .attr("height",function(d)
    {
      return d.amount*10;
    })
    .attr("fill",function(d)
    {
      return d.color;
    })
}
