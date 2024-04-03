var dotDiv = document.getElementById("dot-chart");

var traceA = {
  type: "scatter",
  mode: "markers",
  x: [2011, 2012, 2013, 2014, 2015, 2016],
  y: [789, 795, 760, 775, 780, 783],
  name: 'Highest Marks',
  marker: {
    color: 'rgba(27, 132, 255, 1)',
    line: {
      color: 'rgba(156, 165, 196, 1)',
      width: 1,
    },
    symbol: 'circle',
    size: 50
  },
  hoverlabel: {
    bgcolor: 'black',
  }
};

var traceB = {
  type: "scatter",
  mode: "markers",
  x: [2011, 2012, 2013, 2014, 2015, 2016],
  y: [769, 755, 747, 770, 771, 781],
  name: 'Second Highest Marks',
  marker: {
    color: 'rgba(180, 140, 0, 1)',
    line: {
      color: 'rgba(165, 196, 50, 1)',
      width: 1,
    },
    symbol: 'circle',
    size: 50
  },
  hoverlabel: {
    bgcolor: 'black',
  }
};

var data = [traceA, traceB];

var layout = {
  xaxis: {
    showgrid: false,
    showline: true,
    linecolor: 'gray',
    ticks: 'inside',
    tickcolor: 'gray',
    tickwidth: 4
  },
  legend: {
    bgcolor: 'white',
    borderwidth: 1,
    bordercolor: 'black',
    orientation: 'h',
    xanchor: 'center',
    x: 0.5,
    font: {
      size: 12,
    }
  },
  paper_bgcolor: 'white',
  plot_bgcolor: 'white'
};

Plotly.plot(dotDiv, data, layout);
