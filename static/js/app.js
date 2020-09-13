// from data.js
var d = data;
var tbody = d3.select("tbody");

d.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

var button = d3.select("#filter-btn");
var form = d3.select("#form");
button.on("click", search);
form.on("submit", search);
  
function search() {
  d3.event.preventDefault();
  tbody.html(" ");
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  
  d.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      if (value === inputValue) {
      var cell = row.append("td");
      cell.text(value);
      var cell = row.append("td");
      cell.text(ufo.city);
      var cell = row.append("td");
      cell.text(ufo.state);
      var cell = row.append("td");
      cell.text(ufo.country);
      var cell = row.append("td");
      cell.text(ufo.shape);
      var cell = row.append("td");
      cell.text(ufo.durationMinutes);
      var cell = row.append("td");
      cell.text(ufo.comments);      
      }
      else 
      });
    });
  console.log(inputValue)
};
    

