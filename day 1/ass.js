// Employee data array
const employees = [
    {
        empId: 101,
        empName: "John Doe",
        empCompany: "ABC Corp",
        empSalary: 50000,
        empAddress: { empCity: "New York", area: "Brooklyn" }
    },
    {
        empId: 102,
        empName: "Jane Smith",
        empCompany: "XYZ Ltd",
        empSalary: 60000,
        empAddress: { empCity: "Los Angeles", area: "Hollywood" }
    },
    {
        empId: 103,
        empName: "Michael Johnson",
        empCompany: "Tech Solutions",
        empSalary: 70000,
        empAddress: { empCity: "San Francisco", area: "Bay Area" }
    }
];

// Function to create and populate table dynamically
function createEmployeeTable() {
    // Create table element
    const table = document.createElement("table");
    table.border = "1";
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";

    // Create table header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headers = ["Emp ID", "Name", "Company", "Salary", "City", "Area"];
    
    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        th.style.padding = "8px";
        th.style.backgroundColor = "#f4f4f4";
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    const tbody = document.createElement("tbody");

    employees.forEach(emp => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${emp.empId}</td>
            <td>${emp.empName}</td>
            <td>${emp.empCompany}</td>
            <td>${emp.empSalary}</td>
            <td>${emp.empAddress.empCity}</td>
            <td>${emp.empAddress.area}</td>
        `;

        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    // Append the table to the document body
    document.body.appendChild(table);
}

// Call the function to create and display the table
createEmployeeTable();
