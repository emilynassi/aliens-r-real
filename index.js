 // Get references to the tbody element, input fields and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#dateInput");
var $cityInput = document.querySelector("#cityInput");
var $stateInput = document.querySelector("#stateInput");
var $countryInput = document.querySelector("#countryInput");
var $shapeInput = document.querySelector("#shapeInput");
var $searchBtn = document.querySelector("#search");
console.dir($stateInput);
// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredData to dataSet initially
var filteredData = dataSet;


// renderTable renders the filteredData to the tbody
function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < filteredData.length; i++) {
        // Get get the current sighting object and its fields
        var sighting = filteredData[i];
        var fields = Object.keys(sighting);
        // Create a new row in the tbody, set the index to be i + startingIndex
        var $row = $tbody.insertRow(i);
        for (var j = 0; j < fields.length; j++) {
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
    var filterCity = $cityInput.value.trim().toLowerCase();
    var filterState = $stateInput.value.trim().toLowerCase();
    var filterCountry = $countryInput.value.trim().toLowerCase();
    var filterShape = $shapeInput.value.trim().toLowerCase();

    // Set filteredData to an array of all sightings whose "date" matches the filter
    filteredData = dataSet.filter(function (sighting) {
        var currentSightingDate = sighting.datetime;
        var currentSightingCity = sighting.city.toLowerCase();
        var currentSightingState = sighting.state.toLowerCase();
        var currentSightingCountry = sighting.country.toLowerCase();
        var currentSightingShape = sighting.shape.toLowerCase();

        // If true, add the address to the filteredData, otherwise don't add it to filteredData
        if 
            ((currentSightingDate === filterDate || filterDate == "")
            && (currentSightingCity === filterCity || filterCity == "")
            && (currentSightingState === filterState || filterState == "")
            && (currentSightingCountry === filterCountry || filterCountry == "")
            && (currentSightingShape === filterShape || filterShape == ""))
         {
            return true;
         }
            return false;
    });
    renderTable();
}

renderTable();

 
