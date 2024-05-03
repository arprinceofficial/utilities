// <h1>{{ getTotal(numbers, 'Pending') }}</h1>

const numbers = [
    {
        "Pending": null,
        "Verified": "1",
        "Rejected": null,
        "name": "Ilocos Norte"
    },
    {
        "Pending": "2",
        "Verified": "9",
        "Rejected": "2",
        "name": "Lanao Del Sur"
    },
    {
        "Pending": "2",
        "Verified": "36",
        "Rejected": "2",
        "name": null
    }
];

function getTotal(arr, key) {
    return arr.reduce((total, item) => total + (Number(item[key]) || 0), 0);
}