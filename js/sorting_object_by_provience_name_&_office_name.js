const municipality_office_list = {
    "1": {
        "layer_index": 0,
        "provience_name": "Lanao Del Sur",
        "office": [
            {
                "index": 0,
                "id": 1,
                "office_name": "LGU Butig"
            },
            {
                "index": 1,
                "id": 1,
                "office_name": "LGU Piagapo"
            },
            {
                "index": 6,
                "id": 1,
                "office_name": "LGU Marantao"
            },
            {
                "index": 7,
                "id": 1,
                "office_name": "LGU Taraka"
            }
        ]
    },
    "2": {
        "layer_index": 0,
        "provience_name": "Maguindanao del Norte",
        "office": [
            {
                "index": 3,
                "id": 1,
                "office_name": "LGU Sultan Kudarat"
            },
            {
                "index": 5,
                "id": 1,
                "office_name": "LGU Datu Blah T. Sinsuat"
            },
            {
                "index": 8,
                "id": 1,
                "office_name": "LGU Parang"
            }
        ]
    },
    "79": {
        "layer_index": 0,
        "provience_name": "Basilan",
        "office": [
            {
                "index": 11,
                "id": 1,
                "office_name": "LGU City of Lamitan"
            }
        ]
    },
    "82": {
        "layer_index": 0,
        "provience_name": "Sulu",
        "office": [
            {
                "index": 9,
                "id": 1,
                "office_name": "LGU Talipao"
            }
        ]
    },
    "83": {
        "layer_index": 0,
        "provience_name": "Tawi-Tawi",
        "office": [
            {
                "index": 10,
                "id": 1,
                "office_name": "LGU Bongao"
            }
        ]
    },
    "89": {
        "layer_index": 0,
        "provience_name": "Maguindanao del Sur",
        "office": [
            {
                "index": 2,
                "id": 1,
                "office_name": "LGU Shariff Aguak"
            },
            {
                "index": 4,
                "id": 1,
                "office_name": "LGU Buluan"
            }
        ]
    }
};

let sorted_municipality_office_list = {};
// Sort by provience_name
let entries = Object.entries(municipality_office_list);
entries.sort((a, b) => a[1].provience_name.localeCompare(b[1].provience_name));
// Sort the office names within each province
entries = entries.map(([key, value]) => {
    value.office.sort((a, b) => a.office_name.localeCompare(b.office_name));
    return [key, value];
});

sorted_municipality_office_list = { ...entries.map(v => { return { provience_name: v[1].provience_name, office: v[1].office, layer_index: v[1].layer_index } }) }
console.log('sort data', sorted_municipality_office_list)

// *** Display the sorted data in the HTML page *** //
// <pre><div id="demo" ></div></pre>
document.getElementById("demo").innerHTML = JSON.stringify(sorted_municipality_office_list, null, 2);