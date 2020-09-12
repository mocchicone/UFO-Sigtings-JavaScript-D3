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
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
  }
   