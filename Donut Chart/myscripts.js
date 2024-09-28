//Data Array

var xArray =["Indonesia","France","Canada","USA","Argentina"];
var yArray =[55,49,44,24,15];


//Define layout
var layout = {title:"World Wine Production"};

//Define Data
var data = [{labels:xArray,values:yArray,hole:0.4,type:"pie"}];

//Display using plotly
Plotly.newPlot("myPlot", data, layout)