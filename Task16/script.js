const myName = document.getElementById("name");
const form = document.querySelector("form");
const info = document.getElementById("info");
const data = [
  {
    Student_Name: "SunitaJain",
    Marks: "78%",
    Class: "11th",
    Address: "666,RSTRoad,Ahmedabad",
  },
  {
    Student_Name: "JenniferSmith",
    Marks: "87%",
    Class: "10thGrade",
    Address: "123MapleStreet,Anytown,USA",
  },
  {
    Student_Name: "MichaelJohnson",
    Marks: "75%",
    Class: "9thGrade",
    Address: "456OakAvenue,Smallville,USA",
  },
  {
    Student_Name: "SalmaanAhmed",
    Marks: "38%",
    Class: "3rd",
    Address: "India",
  },
  {
    Student_Name: "RiyaSharma",
    Marks: "85%",
    Class: "10th",
    Address: "123,ABCColony,Delhi",
  },
  {
    Student_Name: "RohanPatel",
    Marks: "70%",
    Class: "12th",
    Address: "456,XYZStreet,Mumbai",
  },
  {
    Student_Name: "PriyaSingh",
    Marks: "95%",
    Class: "8th",
    Address: "789,PQRNagar,Bangalore",
  },
  {
    Student_Name: "AnkitGupta",
    Marks: "60%",
    Class: "9th",
    Address: "101,LMNRoad,Kolkata",
  },
  {
    Student_Name: "NehaVerma",
    Marks: "80%",
    Class: "11th",
    Address: "222,DEFAvenue,Chennai",
  },
  {
    Student_Name: "ManojKumar",
    Marks: "75%",
    Class: "10th",
    Address: "333,GHILane,Hyderabad",
  },
  {
    Student_Name: "PoojaMishra",
    Marks: "88%",
    Class: "12th",
    Address: "444,STUColony,Pune",
  },
  {
    Student_Name: "RajeshSinghania",
    Marks: "92%",
    Class: "9th",
    Address: "555,VWXStreet,Jaipur",
  },
];

let setName = "";
let filteredData = [];
let clutter = '';

form.addEventListener("submit", (e) => {
  e.preventDefault();
  filteredData = [];
  clutter = [];
  
  setName = myName.value.toLowerCase();
  data.map((value) =>
    value.Student_Name.toLowerCase().startsWith(setName) ? filteredData.push(value) : ""
  );

  console.log("filter data : ",filteredData);
  console.log(setName);

  
  filteredData.map((value) => {
    clutter += `
      <div class="card">
          <h2><span>Student Name:</span>${value.Student_Name}</h2>
          <h2><span>Marks:</span>${value.Marks}</h2>
          <h2><span>Class:</span>${value.Class}</h2>
          <h2><span>Address:</span>${value.Address}</h2>
      </div>
      `;
  });
  console.log(clutter);
  info.innerHTML = clutter;
});

data.map((value , index ) => {
  clutter += `
    <div class="card">
        <h2><span>Student Name:</span>${value.Student_Name}</h2>
        <h2><span>Marks:</span>${value.Marks}</h2>
        <h2><span>Class:</span>${value.Class}</h2>
        <h2><span>Address:</span>${value.Address}</h2>
    </div>
    `;
});

info.innerHTML = clutter;

myName.addEventListener("change", (e) => {
  setName = e.target.value;
});
