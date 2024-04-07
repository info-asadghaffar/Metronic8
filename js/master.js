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
// call chart
var options = {
  series: [
    {
      name: "Series-1",
      data: [80, 46, 70, 51, 50, 100, 90]
    },
    {
      name: "Series-2",
      data: [11, 32, 45, 32, 34, 52, 41]
    }
  ],
  chart: {
    height: 250,
    type: "area"
  },
  markers: {
    size: [4, 7]
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    fontSize: "16px",

    labels: {
      colors: "#b2b2b2",
      useSeriesColors: false
    }
  },
  colors: ["green", "blue", "white"],

  stroke: {
    curve: "smooth"
  },
  yaxis: {
    labels: {
      style: {
        colors: ["#b2b2b2"]
      }
    }
  },
  xaxis: {
    labels: {
      style: {
        colors: ["#b2b2b2"]
      }
    },
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z"
    ]
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm"
    }
  }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
// call-chart-2
// Color steps for the gradient
var gradientSteps = {
  "0%": "#8dc7d2",
  "33%": "#d8b26d",
  "100%": "#f3766d"
};
var gradientDirection = "v"; // Either Horizontal (h) or Vertical (v)
// Change it to 'h' to see a horizontal gradient

// Initializing Chart
// Just some data and c3 options
var traffic = c3.generate({
  bindto: "#traffic-chart",
  padding: {
    left: 12,
    right: 12
  },
  size: {
    width: 320,
    height: 100
  },
  data: {
    columns: [
      [
        "data",50,70,70,42,50,80,90,90,52,22,20,52,48,42,54,20,19,24,40,82,78,52,51,62,62
      ]
    ],
    types: {
      data: "spline"
    }
  },
  axis: {
    y: {
      show: false
    },
    x: {
      show: false
    }
  },
  legend: {
    show: false
  },
  tooltip: {
    show: false
  },
  point: {
    show: false
  }
});

// Just some interval to view "live" data
var dataInt = true;
setInterval(function () {
  if (dataInt) {
    traffic.load({
      columns: [
        [
          "data",32,52,60,44,52,78,92,90,54,18,8,50,52,50,180,24,20,26,44,84,78,52,55,62,62
        ]
      ]
    });
    dataInt = false;
  } else {
    traffic.load({
      columns: [
        [
          "data",50,70,70,42,50,80,90,90,52,22,20,52,48,42,54,20,19,24,40,82,78,52,51,62,62
        ]
      ]
    });
    dataInt = true;
  }
}, 1600);

// Create element for the SVG
function svgElement(element, attr) {
  el = $(document.createElementNS("http://www.w3.org/2000/svg", element));
  return el.attr(attr);
}

if (gradientDirection == "v") {
  var x2 = "0%";
  var y1 = "100%";
} else if (gradientDirection == "h") {
  var x2 = "100%";
  var y1 = "0%";
}

// Create a linearGradient and add it to the C3 SVG Chart
var grad = svgElement("linearGradient", {
  id: "bgGradient",
  x1: "0%",
  x2: x2,
  y1: y1,
  y2: "0%"
}).appendTo("#traffic-chart svg defs");

// Add each step to the gradient
$.each(gradientSteps, function (offset, color) {
  svgElement("stop", {
    style: "stop-color:" + gradientSteps[offset],
    offset: offset
  }).appendTo("#traffic-chart svg defs #bgGradient");
});

// warephase chart
am4core.useTheme(am4themes_animated);
var chart = am4core.create("chartdiv", am4charts.RadarChart);
chart.data = [
  {
    name: "Openlane",
    value1: 560.2,
    value2: 126.9
  },
  {
    name: "Yearin",
    value1: 170.1,
    value2: 90.5
  },
  {
    name: "Goodsilron",
    value1: 120.7,
    value2: 32.3
  },
  {
    name: "Condax",
    value1: 89.4,
    value2: 124.5
  },
  {
    name: "Opentech",
    value1: 78.5,
    value2: 29.7
  },
  {
    name: "Golddex",
    value1: 77.6,
    value2: 162.2
  },
  {
    name: "Isdom",
    value1: 69.8,
    value2: 22.6
  },
  {
    name: "Plusstrip",
    value1: 63.6,
    value2: 45.3
  },
  {
    name: "Kinnamplus",
    value1: 59.7,
    value2: 12.8
  },
  {
    name: "Zumgoity",
    value1: 54.3,
    value2: 19.6
  },
  {
    name: "Stanredtax",
    value1: 52.9,
    value2: 96.3
  },
  {
    name: "Conecom",
    value1: 42.9,
    value2: 11.9
  },
  {
    name: "Zencorporation",
    value1: 40.9,
    value2: 16.8
  },
  {
    name: "Iselectrics",
    value1: 39.2,
    value2: 9.9
  },
  {
    name: "Treequote",
    value1: 36.6,
    value2: 36.9
  },
  {
    name: "Sumace",
    value1: 34.8,
    value2: 14.6
  },
  {
    name: "Lexiqvolax",
    value1: 32.1,
    value2: 35.6
  },
  {
    name: "Sunnamplex",
    value1: 31.8,
    value2: 5.9
  },
  {
    name: "Faxquote",
    value1: 29.3,
    value2: 14.7
  },
  {
    name: "Donware",
    value1: 23.0,
    value2: 2.8
  },
  {
    name: "Warephase",
    value1: 21.5,
    value2: 12.1
  },
  {
    name: "Donquadtech",
    value1: 19.7,
    value2: 10.8
  },
  {
    name: "Nam-zim",
    value1: 15.5,
    value2: 4.1
  },
  {
    name: "Y-corporation",
    value1: 14.2,
    value2: 11.3
  }
];

chart.padding(0, 0, 0, 0);
chart.radarContainer.dy = 100;
chart.innerRadius = am4core.percent(50);
chart.radius = am4core.percent(100);
chart.zoomOutButton.padding(20, 20, 20, 20);
chart.zoomOutButton.margin(20, 20, 20, 20);
chart.zoomOutButton.background.cornerRadius(40, 40, 40, 40);
chart.zoomOutButton.valign = "bottom";

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "name";
categoryAxis.renderer.labels.template.location = 0.5;
categoryAxis.mouseEnabled = false;

var categoryAxisRenderer = categoryAxis.renderer;
categoryAxisRenderer.cellStartLocation = 0;
categoryAxisRenderer.tooltipLocation = 0.5;
categoryAxisRenderer.grid.template.disabled = true;
categoryAxisRenderer.ticks.template.disabled = true;

categoryAxisRenderer.axisFills.template.fill = am4core.color("#e8e8e8");
categoryAxisRenderer.axisFills.template.fillOpacity = 0.2;
categoryAxisRenderer.axisFills.template.location = -0.5;
categoryAxisRenderer.line.disabled = true;
categoryAxisRenderer.tooltip.disabled = true;
categoryAxis.renderer.labels.template.disabled = true;

categoryAxis.adapter.add("maxZoomFactor", (maxZoomFactor, target) => {
  return target.dataItems.length / 5;
});

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

var valueAxisRenderer = valueAxis.renderer;

valueAxisRenderer.line.disabled = true;
valueAxisRenderer.grid.template.disabled = true;
valueAxisRenderer.ticks.template.disabled = true;
valueAxis.min = 0;
valueAxis.renderer.tooltip.disabled = true;

var series1 = chart.series.push(new am4charts.RadarSeries());
series1.name = "CASH HELD OUTSIDE THE U.S.";
series1.dataFields.categoryX = "name";
series1.dataFields.valueY = "value1";
series1.stacked = true;
series1.fillOpacity = 0.5;
series1.fill = am4core.color("#8be2a1");
series1.strokeOpacity = 0;
series1.dataItems.template.locations.categoryX = 0.5;
series1.sequencedInterpolation = true;
series1.sequencedInterpolationDelay = 50;
series1.defaultState.transitionDuration = 1500;
series1.hiddenState.transitionDuration = 3000;

var series2 = chart.series.push(new am4charts.RadarSeries());
series2.name = "TOTAL CASH PILE";
series2.dataFields.categoryX = "name";
series2.dataFields.valueY = "value2";
series2.stacked = true;
series2.fillOpacity = 0.5;
series2.fill = am4core.color("#62b5ce");
series2.stacked = true;
series2.strokeOpacity = 0;
series2.dataItems.template.locations.categoryX = 0.5;
series2.sequencedInterpolation = true;
series2.sequencedInterpolationDelay = 50;
series2.defaultState.transitionDuration = 1500;
series2.hiddenState.transitionDuration = 3000;
series2.tooltipText =
  "[bold]{categoryX}[/]\nTotal: ${valueY.total} \nOverseas: ${value1}";
series2.tooltip.pointerOrientation = "vertical";
series2.tooltip.label.fill = am4core.color("#ffffff");
series2.tooltip.label.fontSize = "0.8em";
series2.tooltip.autoTextColor = false;

chart.seriesContainer.zIndex = -1;
chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarX.parent = chart.bottomAxesContainer;
chart.scrollbarY = new am4core.Scrollbar();

chart.padding(0, 0, 0, 0);

chart.scrollbarY.padding(20, 0, 20, 0);
chart.scrollbarX.padding(0, 20, 0, 80);

chart.scrollbarY.background.padding(20, 0, 20, 0);
chart.scrollbarX.background.padding(0, 20, 0, 80);

chart.cursor = new am4charts.RadarCursor();
chart.cursor.lineX.strokeOpacity = 1;
chart.cursor.lineY.strokeOpacity = 0;
chart.cursor.lineX.stroke = am4core.color("#62b5ce");
chart.cursor.innerRadius = am4core.percent(30);
chart.cursor.radius = am4core.percent(50);
chart.cursor.selection.fill = am4core.color("#62b5ce");

let bullet = series2.bullets.create();
bullet.fill = am4core.color("#000000");
bullet.strokeOpacity = 0;
bullet.locationX = 0.5;

let line = bullet.createChild(am4core.Line);
line.x2 = -100;
line.x1 = 0;
line.y1 = 0;
line.y1 = 0;
line.strokeOpacity = 1;

line.stroke = am4core.color("#000000");
line.strokeDasharray = "2,3";
line.strokeOpacity = 0.4;

let bulletValueLabel = bullet.createChild(am4core.Label);
bulletValueLabel.text = "{valueY.total.formatNumber('$#.0')}";
bulletValueLabel.verticalCenter = "middle";
bulletValueLabel.horizontalCenter = "right";
bulletValueLabel.dy = -3;

let label = bullet.createChild(am4core.Label);
label.text = "{categoryX}";
label.verticalCenter = "middle";
label.paddingLeft = 20;

valueAxis.calculateTotals = true;

chart.legend = new am4charts.Legend();
chart.legend.parent = chart.radarContainer;
chart.legend.width = 110;
chart.legend.horizontalCenter = "middle";
chart.legend.markers.template.width = 22;
chart.legend.markers.template.height = 18;
chart.legend.markers.template.dy = 2;
chart.legend.labels.template.fontSize = "0.7em";
chart.legend.dy = 20;
chart.legend.dx = -9;

chart.legend.itemContainers.template.cursorOverStyle =
  am4core.MouseCursorStyle.pointer;
let itemHoverState = chart.legend.itemContainers.template.states.create(
  "hover"
);
itemHoverState.properties.dx = 5;

let title = chart.radarContainer.createChild(am4core.Label);
title.text = "COMPANIES WITH\nTHE MOST CASH\nHELD OVERSEAS";
title.fontSize = "1.2em";
title.verticalCenter = "bottom";
title.textAlign = "middle";
title.horizontalCenter = "middle";
title.fontWeigth = "800";

chart.maskBullets = false;

let circle = bullet.createChild(am4core.Circle);
circle.radius = 2;
let hoverState = circle.states.create("hover");

hoverState.properties.scale = 5;

bullet.events.on("positionchanged", (event) => {
  event.target.children.getIndex(0).invalidate();
  event.target.children.getIndex(1).invalidatePosition();
});

bullet.adapter.add("dx", (dx, target) => {
  let angle = categoryAxis.getAngle(target.dataItem, "categoryX", 0.5);
  return 20 * am4core.math.cos(angle);
});

bullet.adapter.add("dy", (dy, target) => {
  let angle = categoryAxis.getAngle(target.dataItem, "categoryX", 0.5);
  return 20 * am4core.math.sin(angle);
});

bullet.adapter.add("rotation", (dy, target) => {
  let angle = Math.min(
    chart.endAngle,
    Math.max(
      chart.startAngle,
      categoryAxis.getAngle(target.dataItem, "categoryX", 0.5)
    )
  );
  return angle;
});

line.adapter.add("x2", (x2, target) => {
  let dataItem = target.dataItem;
  if (dataItem) {
    let position = valueAxis.valueToPosition(
      dataItem.values.valueY.value + dataItem.values.valueY.stack
    );
    return -(position * valueAxis.axisFullLength + 35);
  }
  return 0;
});

bulletValueLabel.adapter.add("dx", (dx, target) => {
  let dataItem = target.dataItem;

  if (dataItem) {
    let position = valueAxis.valueToPosition(
      dataItem.values.valueY.value + dataItem.values.valueY.stack
    );
    return -(position * valueAxis.axisFullLength + 40);
  }
  return 0;
});

chart.seriesContainer.zIndex = 10;
categoryAxis.zIndex = 11;
valueAxis.zIndex = 12;

chart.radarContainer.zIndex = 20;

let previousBullets = [];
series2.events.on("tooltipshownat", (event) => {
  let dataItem = event.dataItem;

  for (let i = 0; i < previousBullets.length; i++) {
    previousBullets[i].isHover = false;
  }

  previousBullets = [];

  let itemBullet = dataItem.bullets.getKey(bullet.uid);

  for (let i = 0; i < itemBullet.children.length; i++) {
    let sprite = itemBullet.children.getIndex(i);
    sprite.isHover = true;
    previousBullets.push(sprite);
  }
});

series2.tooltip.events.on("visibilitychanged", () => {
  if (!series2.tooltip.visible) {
    for (let i = 0; i < previousBullets.length; i++) {
      previousBullets[i].isHover = false;
    }
  }
});

chart.events.on("maxsizechanged", () => {
  if (chart.pixelInnerRadius < 200) {
    title.disabled = true;
    chart.legend.verticalCenter = "middle";
    chart.legend.dy = 0;
  } else {
    title.disabled = false;
    chart.legend.verticalCenter = "top";
    chart.legend.dy = 20;
  }
});

// pyramind chart
// Data gathered from http://populationpyramid.net/germany/2015/

// Age categories
var categories = [
   "0-4","5-9","10-14","15-19","20-24","25-29","30-34","35-39","40-44","45-49","50-54","55-59","60-64","65-69","70-74","75-79","80-84","85-89","90-94","95-99","100 + "
];

Highcharts.chart("container", {
  chart: {
    type: "bar"
  },
  title: {
    text: "Population pyramid for Germany, 2018"
  },
  subtitle: {
    text:
      'Source: <a href="http://populationpyramid.net/germany/2018/">Population Pyramids of the World from 1950 to 2100</a>'
  },
  xAxis: [
    {
      categories: categories,
      reversed: false,
      labels: {
        step: 1
      }
    },
    {
      // mirror axis on right side
      opposite: true,
      reversed: false,
      categories: categories,
      linkedTo: 0,
      labels: {
        step: 1
      }
    }
  ],
  yAxis: {
    title: {
      text: null
    },
    labels: {
      formatter: function () {
        return Math.abs(this.value) + "%";
      }
    }
  },

  plotOptions: {
    series: {
      stacking: "normal"
    }
  },

  tooltip: {
    formatter: function () {
      return (
        "<b>" +
        this.series.name +
        ", age " +
        this.point.category +
        "</b><br/>" +
        "Population: " +
        Highcharts.numberFormat(Math.abs(this.point.y), 2)
      );
    }
  },

  series: [
    {
      name: "Male",
      data: [-2.2,-2.1,-2.2,-2.4,-2.7,-3.0,-3.3,-3.2,-2.9,-3.5,-4.4,-4.1,-13.4,-2.7,-2.3,-2.2,-1.6,-0.6,-0.3,-0.0,-0.0
      ]
    },
    {
      name: "Female",
      data: [2.1,2.0,2.1,2.3,2.6,2.9,3.2,3.1,2.9,3.4,14.3,4.0,3.5,2.9,2.5,2.7,2.2,1.1,0.6,0.2,0.0
      ]
    }
  ]
});

// us map chart
