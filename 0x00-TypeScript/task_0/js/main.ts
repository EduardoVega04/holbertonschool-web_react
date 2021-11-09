interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Eduardo",
    lastName: "Vega",
    age: 27,
    location: "Barranquilla"
};

const student2: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 27,
    location: "New York"
};

type StudentArray = Array<Student>;
const studentsList: StudentArray = [student1, student2];

const documentBody: HTMLBodyElement = document.querySelector("body");

// Table and structure: Head and body
const studentTable: HTMLTableElement = document.createElement("table");
const tableHead: HTMLTableSectionElement = document.createElement("thead");
const tableBody: HTMLTableSectionElement = document.createElement("tbody");
studentTable.append(tableHead, tableBody);
documentBody.append(studentTable);

// Construct the table head and append it to tableHead
const columns: HTMLTableRowElement = document.createElement("tr");
const tableCol1: HTMLTableCellElement = document.createElement("th");
const tableCol2: HTMLTableCellElement = document.createElement("th");
tableCol1.textContent = "First name";
tableCol2.textContent = "Location";
columns.append(tableCol1, tableCol2);
tableHead.append(columns);

// Construct the table body by inserting content from the studentsList array
for (let i = 0; i < studentsList.length; i++)
{
    let newStudentRow: HTMLTableRowElement = document.createElement("tr");
    let firstNameCell: HTMLTableCellElement = document.createElement("td");
    let locationCell: HTMLTableCellElement = document.createElement("td");

    firstNameCell.textContent = studentsList[i].firstName;
    locationCell.textContent = studentsList[i].location;

    newStudentRow.append(firstNameCell, locationCell);
    tableBody.append(newStudentRow);
}
