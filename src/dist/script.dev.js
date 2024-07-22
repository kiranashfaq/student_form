"use strict";

var add_std = document.getElementById("add-std");
var container = document.getElementById("container");
var student_form = document.getElementById("student-form");
var studentName = document.getElementById("name");
var father_name = document.getElementById("father-name");
var age = document.getElementById("age");
var phone = document.getElementById("phone");
var gender = document.getElementById("gender");
var submit = document.getElementById("submit");
var add_btn = document.getElementById("add-btn");
var table_show = document.getElementById("table-show");
var table_div = document.getElementById("table-div");
var date_of_birth = document.getElementById("date-of-birth");
var show_data = document.getElementById("show-data");
var image = document.getElementById("picInput").url;
console.log(image); // var pic = document.getElementById("pic")

var pic;

var loadFile = function loadFile(event) {
  // var image = document.getElementById("output");
  // image.src = URL.createObjectURL(event.target.files[0]);
  // console.log(event.target.files[0])
  pic = event.target.files[0];
}; // for adding student


add_std.addEventListener("click", function () {
  document.body.style.backgroundColor = "rgb(158, 154, 154)";
  container.style.display = "none";
  student_form.style.display = "block";
  student_form.style.display = "flex";
}); // Create the table and its header only once

var table = document.createElement("table");
table.className = "table-div";
var table_head = document.createElement("thead");
var table_head_row = document.createElement("tr");
table_head_row.innerHTML = "\n  <th class=\"head\">S#</th>\n  <th class=\"head\">Student Name</th>\n  <th  class=\"head\">Father's Name</th>\n  <th  class=\"head\">Age</th>\n  <th  class=\"head\">Phone Number</th>\n  <th  class=\"head\">Gender</th>\n  <th  class=\"head\">Roll Number</th>\n  <th  class=\"head\">Date of Birth</th>\n   <th  class=\"head\">Registration Date</th>\n  <th  class=\"head\" colspan=\"2\">Action</th>\n  \n";
table_head.appendChild(table_head_row);
table.appendChild(table_head);
var table_body = document.createElement("tbody");
table.appendChild(table_body);
table_div.appendChild(table); // for sumbit data into local storage

submit.addEventListener("click", function (event) {
  if (studentName.value === "" || father_name.value === "" || age.value === "" || phone.value === "" || gender.value === "" || date_of_birth.value === "") {
    alert("Please fill all the fields");
    return;
  }

  event.preventDefault();
  var getData = JSON.parse(localStorage.getItem("studentData")) || [];
  var student = {
    studentName: studentName.value,
    father_name: father_name.value,
    age: age.value,
    phone: phone.value,
    gender: gender.value,
    date_of_birth: date_of_birth.value,
    registrationDate: new Date().toLocaleDateString(),
    rollNo: Math.floor(Math.random() * 800 + 100),
    pic: pic
  };
  getData.push(student);
  localStorage.setItem("studentData", JSON.stringify(getData));
  student_form.style.display = "none";
  table_show.style.display = "block";
  table_div.style.display = "block";
  document.body.style.backgroundColor = "rgb(255, 224, 229)";
  add_btn.style.display = "block";
  table_body.innerHTML = "";

  for (var i = 0; i < getData.length; i++) {
    var table_row = document.createElement("tr");
    table_row.innerHTML = "\n      <td class=\"tdata\">".concat(i, "</td>\n      <td class=\"tdata\">").concat(getData[i].studentName, "</td>\n      <td class=\"tdata\">").concat(getData[i].father_name, "</td>\n      <td class=\"tdata\">").concat(getData[i].age, "</td>\n      <td class=\"tdata\">").concat(getData[i].phone, "</td>\n      <td class=\"tdata\">").concat(getData[i].gender, "</td>\n      <td class=\"tdata\">").concat(getData[i].rollNo, "</td>\n      <td class=\"tdata\">").concat(getData[i].date_of_birth, "</td>\n      <td class=\"tdata\">").concat(getData[i].registrationDate, "</td>\n      <td class=\"tdata\">Edit</td>\n      <td onclick=\"delete1(").concat(i, ")\"  class=\"del tdata\">Delete</td>\n     \n    ");
    table_body.appendChild(table_row);
  } // return table_row


  return false;
}); // for again add student data

add_btn.addEventListener("click", function () {
  table_show.style.display = "none"; // table_show.style.display = "block";

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
  date_of_birth.value = "";
  return false;
}); // for delete and edit buttons

var arr = [];
var get = localStorage.getItem("studentData");

if (get) {
  arr = JSON.parse(get);
}

function delete1(e) {
  console.log(e);
  arr.splice(e, 1);
  localStorage.setItem("studentData", JSON.stringify(arr));
  event.target.parentNode.remove();
} // for show data


show_data.addEventListener("click", function () {
  student_form.style.display = "none";
  table_show.style.display = "block";
  table_div.style.display = "block";
  add_btn.style.display = "block";
});