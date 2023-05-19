//hide content at the start
const hidtable = document.querySelector('#about');
const hidplot = document.querySelector('#portfolio');
const hidplot2 = document.querySelector('#plotextra');
const hidfoot = document.querySelector('#foot');
hidtable.style.display = "none";
hidplot.style.display = "none";
hidplot2.style.display = "none";
hidfoot.style.display = "none";

//getting the link of github page
const user = 'plotaidrivers';
const repository = 'AICMS.github.io';
const branch = 'DesmondAI-alpha-ver3';
const url = `https://githubbox.com/${user}/${repository}/tree/${branch}`;
console.log(url);

// Device detection
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Redirect mobile users
if (isMobile) {
    const redirect = '<DOCTYPE html><head>  <style>    body {display: flex; flex-direction: column; text-align: center; justify-content: center; align-items: center; height; 100vh;}</style>  <title>Error</title></head><body>  <h1 style = "color: red; font-size: 30px">Mobile Access Restricted</h1> <p style = "font-size: 26px;">Please access this website from a desktop device to view its content.</p></body></html>';
    setTimeout(function() {
        document.open();
        console.log("yes the string is opened here");
        document.write(redirect);
        document.close();
    }, 2000);
};


/*OBSOLETE for now
//prevent pinching to zoom in (if i want to create mobile version)
document.addEventListener('gesturestart', function(event) {
    event.preventDefault();
});
*/

// data source

//const url = "https://raw.githubusercontent.com/DesmondAI/CSV-GUI/main/data.csv?token=GHSAT0AAAAAAB4TSUOOETRLVYDFUW7YCJYYY53PRCQ";

//once the website is reloaded the frame will always be at the top
window.addEventListener('load', () => {
    const topAnchor = document.getElementById('home');
    topAnchor.scrollIntoView();
    document.documentElement.scrollTop = 0;
    hidtable.style.display = "none";
    hidplot.style.display = "none";
    hidplot2.style.display = "none";
    hidfoot.style.display = "none";
});

// getData function for building html table
var h;

//function to open new table tab
function openNewTable() {
    var tableHTML = document.getElementById("container").innerHTML;
    var newTable = window.open("Tablepage.html");
    newTable.document.write(tableHTML);        
    document.body.style.overflow = "auto";
    document.body.style.overflow = "auto";
};
//function to open new plot tab
function openNewPlot() {
    var newPlot = window.open('', '', 'resizable=yes,scrollbars=yes');
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Plot</title>
          <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
        </head>
        <body>
            <div id="myPlot"></div>
            <script>
            let jsonArrayString = localStorage.getItem("datasend");
            let datareceived = JSON.parse(jsonArrayString);
            let jsonArrayString2 = localStorage.getItem("stringsend");
            let stringreceived = JSON.parse(jsonArrayString2);

            let x_axes = datareceived[0];
            let y_axes = datareceived[1];
            let y_axes2 = datareceived[2];
            let y_axes3 = datareceived[3];
            let y_axes4 = datareceived[4];
            let y_selected = stringreceived[0];
            let y_selected2 = stringreceived[1];
            let y_selected3 = stringreceived[2];
            let y_selected4 = stringreceived[3];

            var trace1 = {
                x: x_axes,
                y: y_axes,
                name: y_selected,
                type: 'scatter'
            };

            var trace2 = {
                x: x_axes,
                y: y_axes2,
                name: y_selected2,
                yaxis: 'y2',
                type: 'scatter'
            };

            var trace3 = {
              x: x_axes,
              y: y_axes3,
              name: y_selected3,
              yaxis: 'y3',
              type: 'scatter'
            };

            var trace4 = {
              x: x_axes,
              y: y_axes4,
              name: y_selected4,
              yaxis: 'y4',
              type: 'scatter'
            };

            var data = [trace1, trace2, trace3, trace4];

            var layout = {
              autosize: true,
              responsive: true,
              title: 'Conditional Monitoring of System',
              xaxis: {domain: [0.10, 0.90]},
              height: 800,
              yaxis: {
                title: y_selected,
                titlefont: {color: '#1f77b4'},
                tickfont: {color: '#1f77b4'}
              },
              yaxis2: {
                title: y_selected2,
                titlefont: {color: '#ff7f0e'},
                tickfont: {color: '#ff7f0e'},
                anchor: 'free',
                overlaying: 'y',
                side: 'left',
                position: 0.00
              },
              yaxis3: {
                title: y_selected3,
                titlefont: {color: '#d62728'},
                tickfont: {color: '#d62728'},
                anchor: 'x',
                overlaying: 'y',
                side: 'right'
              },
              yaxis4: {
                title: y_selected,
                titlefont: {color: '#9467bd'},
                tickfont: {color: '#9467bd'},
                anchor: 'free',
                overlaying: 'y',
                side: 'right',
                position: 1.00
              },
              legend: {
                orientation: "h",
                y: 1.1,
                font: {
                    size: 10
                },
                traceorder: "normal"
              }
            };

            Plotly.newPlot('myPlot', data, layout);
            window.onresize = function() {
              Plotly.relayout('myPlot', {
                width: window.innerWidth,
                height: window.innerHeight
              });
            };

        </script>
        </body>
      </html>
        `;
    newPlot.document.write(html);


};

async function getROS() {
    var ros = new ROSLIB.Ros({

    })
};

/*async function getLink() {
    const user = 'plotaidrivers';
    const repository = 'AICMS.github.io';
    fetch(`https://api.github.com/repos/${user}/${repository}`)
      .then(response => response.json())
      .then(data => {
        const page = data.has_pages ? `https://api.github.com/repos/${user}/${repository}` : null;
        console.log(page);
      })
      .catch(error => {
        console.error('Error fetching repository information', error);
      });



};
*/

async function getData() {

    // Part 1: Get CSV

    // fetch data
    //const response = await fetch(url);
    // process data
    //const rawData = await response.text();
    // publish data


    //document.getElementById("csv").innerHTML = text;

    // developer info
    //console.log(text);
    //console.log("rawData type: " + typeof text);



    // Part 2: CSV to JSON

    // initialize variables
    let arrayOne = text.split("\n");
    let header = arrayOne[0].split(",");
    console.log("What is printed here" + header);
    console.log(header.length);

    //publishing header into datalist tag in html

    var string="";
    for (var x=0; x < header.length; x++) {
        string += '<option value="'+ header[x] + '" />';
    }
    var y_datas=document.getElementById("y_datas");
    y_datas.innerHTML = string;
    x_datas.innerHTML = string;

    let noOfRow = arrayOne.length;
    let noOfCol = header.length;
    let jsonData = [];
    let i = 0;
    let j = 0;

    //Creating table
    // for loop (rows)
    for (i = 1; i < noOfRow - 1; i++) {
        let obj = {};
        let myNewLine = arrayOne[i].split(",");
        // nested for loop (columns)
        for (j = 0; j < noOfCol; j++) {
            obj[header[j]] = myNewLine[j];
        };
        // generate JSON
        jsonData.push(obj);
    };

    // publish data
    //document.getElementById("json").innerHTML = jsonData;

    // developer info
    console.log(jsonData);
    console.table(jsonData);
    console.log("jsonData type: " + typeof jsonData);

    // Part 3: JSON to HTML Table

    // initialize variables
    let children = jsonData;
    let table = document.createElement("table");

    // function to generate table header row
    function addHeaders(table, keys) {
        let row = table.insertRow();
        for (i = 0; i < keys.length; i++) {
            let cell = row.insertCell();
            cell.appendChild(document.createTextNode(keys[i]));
        };
    };

    // generate table
    for (i = 0; i < children.length; i++) {
        let child = children[i];
        // generate header row
        if (i === 0) {
            addHeaders(table, Object.keys(child));
        }
        // generate data rows
        let row = table.insertRow();
        Object.keys(child).forEach(function (k) {
            let cell = row.insertCell();
            cell.appendChild(document.createTextNode(child[k]));
        })
    };

    // publish table on main and new page
    document.getElementById("container").appendChild(table);

    //create a new tab for clearer view of the values
    //openNewTable();

    // developer info
    //console.log("HTML table type: " + typeof table);

    return h = jsonData; //return a global value for the jsonobject


};

var x_value;
var y_value;
var y_value2;
var y_value3;
var y_value4;

//function to retreice the array for the selected values
async function retrieve() {
    //console.log(h);
    var x_selected = document.getElementsByName("x_selected")[0];
    var y_selected = document.getElementsByName("y_selected")[0];
    var y_selected2 = document.getElementsByName("y_selected2")[0];
    var y_selected3 = document.getElementsByName("y_selected3")[0];
    var y_selected4 = document.getElementsByName("y_selected4")[0];
    
    //create column json object
    x_axes = [];
    y_axes = [];
    y_axes2 = [];
    y_axes3 = [];
    y_axes4 = [];

    console.log(h);

    for (let i = 0; i < h.length; i++) {
        x_axes.push(h[i][x_selected.value]);
    };

    for (let i = 0; i < h.length; i++) {
        y_axes.push(h[i][y_selected.value]);
    };

    for (let i = 0; i < h.length; i++) {
        y_axes2.push(h[i][y_selected2.value]);
    };

    for (let i = 0; i < h.length; i++) {
        y_axes3.push(h[i][y_selected3.value]);
    };

    for (let i = 0; i < h.length; i++) {
        y_axes4.push(h[i][y_selected4.value]);
    };

    let datasend = [x_axes, y_axes, y_axes2, y_axes3, y_axes4]
    localStorage.setItem("datasend", JSON.stringify(datasend));
    setTimeout(function() {
        localStorage.removeItem("datasend");
    }, 60000);

    let stringsend = [y_selected.value, y_selected2.value, y_selected3.value, y_selected4.value];
    localStorage.setItem("stringsend", JSON.stringify(stringsend));
    setTimeout(function() {
        localStorage.removeItem("stringsend");
    }, 5000);

    /*Object.keys(h).forEach((key) => {
        if (key === x_selected.value) {
            x_axes.push(h[key]);
        };
    });

    //loop to iterate for each indexes as the csv file formate is quite different as compared to normal json object

    //for (i = 0, )

    Object.keys(h).forEach((key) => {
        if (key === y_selected.value) {
            y_axes.push(h[key]);
        };
    });
    */

    //console.log(h);   
    //console.log(x_axes);
    //console.log(y_axes);


    /*let plotData = [
        {
            x: x_axes,
            y: y_axes
        }
    ];

    let layout = {
        title: "Conditional Monitoring of System plot",
        x_axis: { title: "what in x" },
        y_axis: { title: "what is in y" }
    };

    // generate plot
    Plotly.newPlot(document.getElementById("myPlot"), plotData, layout);
    */
};

async function plot() {
    retrieve()
    openNewPlot();

}

//open a new html file
function openLive() {
    window.location.href = "build/live.html";
}

function liveplot() {

}


/*Event listener to obtaining 1st graph y variable

var y_selected = document.getElementsByName("y_selected")[0];
y_selected.addEventListener('change', function() {
    //console.log(y_selected.value);
    //alert(this.value);
    //console.log(typeof y_selected.value);
    var op = h.map(function(item) {
        return item.y_selected;
    });
    //console.log(op);


    // Plot Data

    // generate array for x-axis 

    let x_axes = [];

    // newPlot() arguments

    let p = document.getElementById("myPlot");

    let plotData = [
        {
            x: x_axes,
            y: h
        }
    ];

    
});
*/
