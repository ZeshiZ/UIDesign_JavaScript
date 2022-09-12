var cabinType = document.getElementById("cabin");
var today, fromDate, toDate;
 
if(window.addEventListener) {
    window.addEventListener("load", function() {
        today = new Date();
        fromDate = document.getElementById("from-date");
        toDate = document.getElementById("to-date");
        const min = today?.toLocaleDateString("en-ca");
        
        fromDate.setAttribute("min", min);
        toDate.setAttribute("min", min);
    }, false);
} else if(window.attachEvent) {
    window.attachEvent("onload", function () {
        today = new Date();
        fromDate = document.getElementById("from-date");
        toDate = document.getElementById("to-date");
        const min = today?.toLocaleDateString("en-ca");
        
        fromDate.setAttribute("min", min);
        toDate.setAttribute("min", min);
    });
}

/**
 * Changes the number of guests selection based on type of cabin chosen.
 * @param {*} event 
 * @returns number of guest(s) option
 */
function onCabinTypeChanged(event) {
    let guests = document.getElementById("guests");

    removeOptions(guests);

    // If Solo Cabin(1) is chosen, only return 1 option on number of guest.
    if(event.value === "1") {
        let opt = document.createElement('option');
        opt.value = "1";
        opt.innerHTML = "1";
        guests.appendChild(opt);
        return;
    }

    // If Two-Person(2) is chosen, return 1 to 4 option on number of guests.
    if(event.value === "2") {
        let selection = [
            {name: "1", value: "1"},
            {name: "2", value: "2"},
            {name: "3", value: "3"},
            {name: "4", value: "4"}
        ];

        selection.map(s => {
            let opt = document.createElement('option');
            opt.value = s.value;
            opt.innerHTML = s.name;
            guests.appendChild(opt);
        });
        return;
    }

    if(event.value === "4") {
        let selection = [
            {name: "1", value: "1"},
            {name: "2", value: "2"},
            {name: "3", value: "3"},
            {name: "4", value: "4"},
            {name: "5", value: "5"},
            {name: "6", value: "6"}
        ];

        selection.map(s => {
            let opt = document.createElement('option');
            opt.value = s.value;
            opt.innerHTML = s.name;
            guests.appendChild(opt);
        });
        return;
    }


    let selection = [
        {name: "1", value: "1"},
        {name: "2", value: "2"},
        {name: "3", value: "3"},
        {name: "4", value: "4"},
        {name: "5", value: "5"},
        {name: "6-8", value: "8"},
    ];

    selection.map(s => {
        let opt = document.createElement('option');
        opt.value = s.value;
        opt.innerHTML = s.name;
        guests.appendChild(opt);
    });
}

function removeOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
       selectElement.remove(i);
    }

    selectElement.options.length = 0;
}

// Check if fromDate(check-in) is less than the current date.
function fromDateCheck() {
    if (new Date(fromDate.value).getTime() < new Date(today.value).getTime()) {
        fromDate.value = ""; // resets input do blank state

        if(fromDate.type === "date") {
            fromDate.type = "text";
            fromDate.type = "date";
        }
        // Send alert id from date is less than today date.
        alert("Choose a From date equal or later than today.");
        return false;
    } return true;
}

// Check if toDate (check-out) is less than fromDate (check-in).
function toDateCheck() {
    if (new Date(toDate.value).getTime() <= new Date(fromDate.value).getTime()) {
        toDate.value = ""; // resets input do blank state

        if(toDate.type === "date") {
            toDate.type = "text";
            toDate.type = "date";
        }
        // Sends alert if toDate is less than fromDate.
        alert("Choose a To date later than From date.")
        return false;
    } return true;
}
