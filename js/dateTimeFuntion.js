getViewDateFormat(d) {
    const monthShortNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let date = new Date(d);
    return `${date.getDate().toString().padStart(2, 0)} ${monthShortNames[date.getMonth()]} ${date.getFullYear()}`
};


formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
};

function printDate(date) {
    const monthShortNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = `${date.getDate().toString().padStart(2, 0)} ${monthShortNames[date.getMonth()]} ${date.getFullYear()}, ${hours}:${minutes}:${seconds} ${ampm}`;
    return strTime;
};

getPostDateFormat(d) {
    let date = new Date(d);
    let hours = date.getHours();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${date.getDate().toString().padStart(2, 0)}-${(date.getMonth() + 1).toString().padStart(2, 0)}-${date.getFullYear()} ${hours + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2) + " " + ampm}`
};

// response date format = "sampling_time": "2023-01-11 23:01:00",
// post     date format = "sampling_time": "11-01-2023 11:01:00 pm",
// use date function with this keyword exp this.getPostDateFormat(data.sampling_time)

let qcsDetail = this.qcs_dtl_data.map((data) => {
    return {
        id: data.id ? Number(data.id) : null,
        container_no: Number(data?.container_id ? data?.container_id : null),
        sampling_time: this.getPostDateFormat(data.sampling_time),
        sampling_by: Number(data.get_hrm_employee.id),
        sample_qty: Number(data.sample_qty),
        sample_uom: Number(data.sample_uom),
        sample_for: data.sample_for,
    }
});