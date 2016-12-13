     // A $( document ).ready() block.
$( document ).ready(function() {
    

    console.log("ready!");


     google.charts.load('current', {'packages':['bar']});
     google.charts.setOnLoadCallback(drawStuff);

     function drawStuff() {
        var data = new google.visualization.arrayToDataTable([
          ['Year', '', 'Trillion Dollars'],
          ['2008', , 2.73],
          ['2009', , 2.64],
          ['2010', , 2.73],
          ['2011', , 2.87],
          ['2012', , 2.98],
          ['2013', , 3.08],
          ['2014', , 3.19],
        ]);

        var options = {
          width: 900,
          chart: {
            title: 'Annual retail industry sales in the United States from 2008 to 2014',
            subtitle: 'Source: National Retail Federation'
          },
          series: {
            1: { axis: 'consumption' } // Bind series 1 to an axis named 'brightness'.
          },
          axes: {
            y: {
              consumption: {side: 'left', label: 'U.S. Trillion Dollars'} // Right y-axis.
            }
          }
      	};

	    var chartOne = new google.charts.Bar(document.getElementById('firstChart'));
	    chartOne.draw(data, options);
    };


      google.charts.setOnLoadCallback(drawOtherStuff);

     function drawOtherStuff() {
        var data = new google.visualization.arrayToDataTable([
          ['Country','Crop Water Requirement', 'Crop water consumed (mm)'],
          ['Argentina', 877, 877],
          ['Australia', 901, 843],
          ['Brazil', 606, 551],
          ['China', 718, 638],
          ['Egypt', 1009, 1009],
          ['Greece', 707, 707],
          ['India', 810, 538],
          ['Mali', 993, 538],
          ['Mexico', 771, 746],
          ['Pakistan', 850, 850],
          ['Syria', 1309, 1309],
          ['Turkey', 963, 963],
          ['Turkmenistan', 1025, 1025],
          ['USA', 516, 419],
          ['Uzbekistan', 999, 999],
        ]);

        var options = {
          width: 900,
          chart: {
            title: ' Consumptive water use at field level for cotton production in the major cotton producing countries. ',
            subtitle: ' Sources: Gillham et al. (1995); FAO (1999); Cotton Australia (2005); CCI (2005); WWF (1999). '
          },
          series: {
            1: { axis: 'water' } 
          },
          axes: {
            y: {

              water: {side: 'left', label: 'Water Consumed (mm)'} // Right y-axis.
            }
          }
      };

        var chartTwo = new google.charts.Bar(document.getElementById('secondChart'));
  		chartTwo.draw(data, options);
	};
  });




