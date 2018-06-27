// JavaScript source code
var businessButton = document.getElementById("functionAction");
businessButton.onclick = businessInfo;

var business = {

    "businesses": [{
            "state": "South Carolina",
            "coverage": "General Liability",
            "discount": "20%",


        },

        {
            "state": "Georgia",
            "coverage": "Worker's Compensation",
            "discount": "15%",
        },
        {
            "state": "Connecticut",
            "coverage": "Fire, Theft, Property",
            "discount": "8%",
        },
        {
            "state": "Connecticut",
            "coverage": "Inland Marine",
            "discount": "12%",
        },
    ]
};



function businessInfo() {

    var barray = business.businesses;
    bCount = barray.length;


    for (i = 0; i < bCount; i++) {
        alert('State: ' + barray[i].state + '\n' + 'Coverage: ' + barray[i].coverage + '\n' + 'Discount: ' + barray[i].discount + '\n(' + (i + 1) + 'of' + bCount + ')');

    }
}