// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#dateInput");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredData to dataSet initially
var filteredData = testDataSet;


// renderTable renders the filteredData to the tbody
function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < filteredData.length; i++) {
        // Get get the current sighting object and its fields
        var sighting = filteredData[i];
        var fields = Object.keys(sighting);
        // Create a new row in the tbody, set the index to be i + startingIndex
        var $row = $tbody.insertRow(i);
        for (var j = 0; j < 40; j++) {
            //Create a new cell at set its inner text to be the current value at the current address's field
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = sighting[field];
        }
    }
}

function handleSearchButtonClick() {
    // Format the user's search by removing leading and trailing whitespace
    var filterDate = $dateInput.value.trim();
    console.log(filterDate);

    // Set filteredData to an array of all sightings whose "date" matches the filter
    filteredData = testDataSet.filter(function (sighting) {
        var currentSightingDate = sighting.datetime;
        console.log("hi")
        // If true, add the address to the filteredData, otherwise don't add it to filteredData
        if (currentSightingDate === filterDate) {
            return true;
        }
    });
    renderTable();
}

renderTable();

