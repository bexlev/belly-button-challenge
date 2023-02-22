console.log(data);

// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
let title = 'Horizontal Bar Chart'
    
let trace1 = {
    //Use sample_values as the values for the bar chart.
    //Use otu_ids as the labels for the bar chart.
    //Use otu_labels as the hovertext for the chart.
    x: otu_ids
    y: sample_values
    type: 'barh'
};

let data = [trace1];

let layout = {
    title:title

;}

Plotly.newPlot("plot", data, layout);

//Create a bubble chart that displays each sample.
let title2 = 'Bubble Chart'
    // Use otu_ids for the x values.
    // Use sample_values for the y values.
    // Use sample_values for the marker size.
    // Use otu_ids for the marker colors.
    // Use otu_labels for the text values.
    var trace2 = {
        x: otu_ids,
        y: sample_values,
        mode: 'markers',
        marker: {
            color: otu_ids,
            opacity: [1, 0.8, 0.6, 0.4],
            size: [40, 60, 80, 100]
          }
      };
      
      var data = [trace2];
      
      var layout = {
        title: title2,
        showlegend: false,
        height: 600,
        width: 600
      };
      
      Plotly.newPlot('myDiv', data, layout);

//Display the sample metadata, i.e., an individual's demographic information.

//Display each key-value pair from the metadata JSON object somewhere on the page.

//Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

//Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file