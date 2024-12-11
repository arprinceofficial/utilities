export default function print(data) {
    console.log(data);
    var mywindow = window.open('', 'Invoice', 'height=600,width=900');
    
    var html = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Invoice</title>
                <style>
                    p {
                        margin: 0;
                    }
                    
                    h2 {
                        margin-top: 0;
                    }
                    
                    .left {
                        text-align: left;
                    }
                    
                    .right {
                        text-align: right;
                    }
                    
                    table {
                        border-collapse: collapse;
                        color: black;
                        font-size: 11px;
                        width: 100%;
                        text-align: center;
                        text-align: center;
                        font-family: Calibri;
                        page-break-after: always;
                    }
                    
                    .remove-border {
                        border-top: 1px solid white;
                        border-left: 1px solid white;
                        border-right: 1px solid white;
                    }
                    
                    thead>tr>th {
                        border: 1px solid #dedede;
                        border-collapse: collapse;
                    }
                    
                    tbody>tr>td {
                        border: 1px solid #dedede;
                        border-collapse: collapse;
                    }
                    
                    tbody>tr>th {
                        border: 1px solid #dedede;
                        border-collapse: collapse;
                    }
                    
                    @media print {
                        .main-body {
                            margin: 0;
                            padding: 0;
                        }
                    @page {
                            size: A4;
                        }
                    }
                </style>
            </head>

            <body>
                <div class="main-body" id="app" style="page-break-inside: auto;">
                    <table>
                        <thead>
                            <tr>
                                <th colspan="16" class="remove-border" style="padding-bottom: 10px;">
                                    <div style="display: flex; justify-content: center;">
                                        <h2>Invoice</h2>
                                    </div>

                                    <div style="display: flex; justify-content: flex-end; align-items: flex-end;">
                                        <!-- <p>Depot Name: DHAKA</p> -->
                                        <div style="display: flex; align-items: flex-start; flex-direction: column;">
                                            <p><span>From: 09/12/2021</span>,&nbsp;<span>To: 09/12/2021</span></p>
                                        </div>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>

                        <tbody>
                            ${data.map((item, index) => {
                                return `
                                    <tr>
                                        <td>${item.id}</td>
                                        <td>${item.name}</td>
                                        <td>${item.age}</td>
                                    </tr>
                                `    
                            }).join('')}
                        </tbody>
                    </table>
                </div>
            </body>
        </html>
    `

    mywindow.document.write(html);
    mywindow.document.close();
    mywindow.print();
    mywindow.close();
    return true;
}