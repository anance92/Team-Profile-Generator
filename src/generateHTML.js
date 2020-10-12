function generateHTML(data) {
    
    var employeecards = ``;
    for (let i = 0; i < data.length; i++) {
        employeecards = employeecards + `<div class="column">
        <div class="employeeCard box">
            <h1 class="title">${data[i].name}</h1>
            <h1 class="title is-4">${data[i].getRole()}</h1> 
            <h2>ID : ${data[i].id}</h2>
            <h2>Email :</h2><a href="mailto:${data[i].email}">${data[i].email}</a>
            `;
        if (data[i].getRole() == `Manager`) {
            employeecards = employeecards + `
            <h2>Office Number : ${data[i].officeNumber}</h2>
        </div>
    </div>
        `;
        } if (data[i].getRole() == `Engineer`) {
            employeecards = employeecards + `
            <h2>GitHub Username : </h2><a href="github.com/${data[i].github}">${data[i].github}</a>
        </div>
    </div>
        `;
        } else if (data[i].getRole() == `Intern`) {
            employeecards = employeecards + `
            <h2>School : ${data[i].school}</h2>
        </div>
    </div>
        `;
        }
    };
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <!-- Bulma Version 0.9.0-->
        <link rel="stylesheet" href="./css/bulma.css">
        <link rel="stylesheet" type="text/css" href="./css/landing.css">
    </head>
    <body>
        <section class="hero is-danger is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        My Team
                    </h1>
                    <h2 class="subtitle">
                    </h2>
                </div>
            </div>
        </section>
        ${employeecards}
    </body> 
    </html>
`;
}

module.exports = generateHTML;