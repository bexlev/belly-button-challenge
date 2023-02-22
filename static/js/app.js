//Using D3 library to obtain data from provided site
d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(data) {
  console.log(data);
});
//




// function that contains instructions at page load/refresh
// function does not run until called
function init(){
    // code that runs once (only on page load or refresh)
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(data) {
        console.log(data);
        let samples = data.samples
        let sample_array = samples.filter(sample=>sample.id == id)
        let sample = sample_array[0]
    
        //Use sample_values as the values for the bar chart.
        //Use otu_ids as the labels for the bar chart.
        //Use otu_labels as the hovertext for the chart.
    });
    // this checks that our initial function runs.
    console.log("The Init() function ran")

    // create dropdown/select
    let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a letiable
  let dataset = dropdownMenu.property("value");
 

    // run functions to generate plots
   createScatter('940')
    createBar('940')
    createSummary('940')

}

// function that runs whenever the dropdown is changed
// this function is in the HTML and is called with an input called 'this.value'
// that comes from the select element (dropdown)
function optionChanged(newID){
    // code that updates graphics
    // one way is to recall each function
    createScatter(newID)
    createBar(newID)
    createSummary(newID)

}

function createScatter(id){
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(data) {
  console.log(data);

    //Create a bubble chart that displays each sample.
    let title2 = 'Bubble Chart'
    let samples = data.samples
    let sample_array = samples.filter(sample=>sample.id == id)
    let sample = sample_array[0]

    // Use otu_ids for the x values.
    // Use sample_values for the y values.
    // Use sample_values for the marker size.
    // Use otu_ids for the marker colors.
    // Use otu_labels for the text values.
    let otu_ids = sample.otu_ids
    let sample_values = sample.sample_values
    let otu_labels = sample.otu_labels

    let trace2 = {
        x: otu_ids,
        y: sample_values,
        mode: 'markers',
        text: otu_labels,
        marker: {
            color: otu_ids,
            opacity: [1, 0.8, 0.6, 0.4],
            size: [40, 60, 80, 100]
          }
      };
      
      let databubble = [trace2];
      
      let layout = {
        title: title2,
        showlegend: false,
        height: 600,
        width: 600
      };
      
      Plotly.newPlot('bubble', databubble, layout);
    // code that makes scatter plot at id='bubble'
});
    // checking to see if function is running
    console.log(`This function generates scatter plot of ${id} `)
}

function createBar(id){
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(data) {
  console.log(data);

    // code that makes bar chart at id='bar'
    // Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    let samples = data.samples
    let sample_array = samples.filter(sample=>sample.id == id)
    let sample = sample_array[0]

    //Use sample_values as the values for the bar chart.
    //Use otu_ids as the labels for the bar chart.
    //Use otu_labels as the hovertext for the chart.
    let otu_ids = sample.otu_ids
    let sample_values = sample.sample_values
    let otu_labels = sample.otu_labels

    let title = 'Horizontal Bar Chart'
    
    let trace1 = {

        x: otu_ids,
        y: sample_values,
        type: 'bar',
        orientation: 'h'
    };

    let databar = [trace1];

    let layout = {
        title:title

    };

    Plotly.newPlot("bar", databar, layout);

    // checking to see if function is running
    console.log(`This function generates bar chart of ${id} `)
});
}

function createSummary(id){
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(data) {
        console.log(data);
      
    let sample_metadata = data.metadata
    let sample_array = sample_metadata.filter(sample=>sample.id == id)
    let sample = sample_array[0]
    // code that makes list, paragraph, text/linebreaks at id='sample-meta'
    let metadata_target = d3.select("#selDataset")
    for (metadata in sample) {
        metadata_target.append("h3").text(`${metadata} ${sample[metadata]}`)
    }
});
    // checking to see if function is running
    console.log(`This function generates summary info of ${id} `)
}


// function called, runs init instructions
// runs only on load and refresh of browser page
init()





// STRATEGIES
// 1.  Inside-Out:  Generate each chart by assuming an ID/name then refactor the code to 
//                  work for any ID/name coming from the function.  I typically do this practice.
// 2.  Outside-In:  Generate the control (dropdown) and how the control interacts with the other parts.
//                  I gave you the basics of how it interacts above.  You could generate the dropdown
//                  and then see in the console the ID/names update as you make a change.  Then you could
//                  make your chart code.

// Overall, the above are the two steps you need to do (1.  Make plots with data, 2. make dropdown that passes id to functions)
// You could do it in either order.