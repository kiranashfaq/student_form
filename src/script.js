var add_std = document.getElementById("add-std");
var container = document.getElementById("container");
var student_form = document.getElementById("student-form");
var studentName = document.getElementById("name");
var father_name = document.getElementById("father-name");
var age = document.getElementById("age");
var phone = document.getElementById("phone");
var gender = document.getElementById("gender");
var submit = document.getElementById("submit");
var rollNo = 1;
var add_btn = document.getElementById("add-btn");
var table_show = document.getElementById("table-show");
var table_div = document.getElementById("table-div");

// for adding student
add_std.addEventListener("click", function () {
  document.body.style.backgroundColor = "rgb(158, 154, 154)";
  container.style.display = "none";
  student_form.style.display = "block";
  student_form.style.display = "flex";
});

// Create the table and its header only once
var table = document.createElement("table");
table.className = "table-div";
var table_head = document.createElement("thead");
var table_head_row = document.createElement("tr");
table_head_row.innerHTML = `
  <th class="head">Student Name</th>
  <th  class="head">Father's Name</th>
  <th  class="head">Age</th>
  <th  class="head">Phone Number</th>
  <th  class="head">Gender</th>
  <th  class="head">Roll Number</th>
  <th  class="head" colspan="2">Action</th>
`;
table_head.appendChild(table_head_row);
table.appendChild(table_head);
var table_body = document.createElement("tbody");
table.appendChild(table_body);
table_div.appendChild(table);

// for sumbit data into local storage
submit.addEventListener("click", function () {
  if (studentName.value === "" || father_name.value === "" || age.value === "" || phone.value === "" || gender.value === "") {
    alert("Please fill all the fields");
    return;
  }
  event.preventDefault()
  var getData = JSON.parse(localStorage.getItem("studentData")) || [];

  var student = {
    studentName: studentName.value,
    father_name: father_name.value,
    age: age.value,
    phone: phone.value,
    gender: gender.value,
    rollNo: rollNo,
  };
  rollNo++;
  getData.push(student);
  localStorage.setItem("studentData", JSON.stringify(getData));
    // table_body.innerHTML = "";

  student_form.style.display = "none";
  table_show.style.display = "block";
  table_div.style.display = "block";
  document.body.style.backgroundColor = "rgb(255, 224, 229)";
  add_btn.style.display = "block";


  
  
  table_body.innerHTML = "";
  for (let i = 0; i < getData.length; i++) {
    
    var table_row = document.createElement("tr");

  table_row.innerHTML = `
      <td class="tdata">${getData[i].studentName}</td>
      <td class="tdata">${getData[i].father_name}</td>
      <td class="tdata">${getData[i].age}</td>
      <td class="tdata">${getData[i].phone}</td>
      <td class="tdata">${getData[i].gender}</td>
      <td class="tdata">${getData[i].rollNo}</td>
      <td class="tdata">Edit</td>
      <td  class="tdata">Delete</td>
    `;
    
    table_body.appendChild(table_row);
  }
  return false;


});
// for again add student data
add_btn.addEventListener("click", function () {
  table_show.style.display = "none";
  container.style.display = "none";
  document.body.style.backgroundColor = "rgb(158, 154, 154)";
  add_btn.style.display = "none";
  student_form.style.display = "block";
  student_form.style.display = "flex";

  studentName.value = "";
  father_name.value = "";
  age.value = "";
  phone.value = "";
  gender.value = "";

  return false;
});
// for delete and edit buttons


