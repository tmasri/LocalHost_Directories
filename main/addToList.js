
/* This function will get the array list
   and print it to screen */
function getList() {
   
   var ul = document.getElementById("list");
   ul.innerHTML = "";

   var li = document.createElement("li");
   li.setAttribute("class", "none");
   li.appendChild(buildNode("name", "directory"));
   ul.appendChild(li);

   var val = "";

   for (var x in pass) {
      val = pass[x];
      li = document.createElement("li");
      li.appendChild(buildNode(val["name"], val["dir"], val["id"]));
      ul.appendChild(li);
   }

   ul.appendChild(lastNode());

}
getList();

function buildNode(name, dir, i) {

   var text = "";
   var row = "";

   // build the column elements
   var col1 = document.createElement("div");
   var col2 = document.createElement("div");
   var col3 = document.createElement("div");

   // set their attributes
   col1.setAttribute("class", "col-sm-5 first");
   col2.setAttribute("class", "col-sm-5");
   col3.setAttribute("class", "col-sm-2 last edit");

   // give them text
   text = document.createTextNode(name);
   col1.appendChild(text);
   text = document.createTextNode(dir);
   col2.appendChild(text);
   text = document.createTextNode("E/D");

   // create the edit delete box
   var r = document.createElement("div"); // edit/delete row
   var c1 = document.createElement("div"); // edit column
   var c2 = document.createElement("div"); // delete column
   var center = document.createElement("center");

   // giving them their dimensions
   r.setAttribute("class", "row");
   c1.setAttribute("class", "col-sm-6");
   c2.setAttribute("class", "col-sm-6");

   // edit button
   var img = document.createElement("img");
   img.setAttribute("src", "main/edit.png");
   img.setAttribute("style", "padding-top: 0px;");
   img.setAttribute("id", i+"-edit");
   img.setAttribute("onclick", "editNode(this)");
   img.setAttribute("onmouseover", "editButton(this)");
   img.setAttribute("onmouseout", "editButtonNorm(this)");
   center.appendChild(img);
   c1.appendChild(center);
   // delete button
   img = document.createElement("img");
   img.setAttribute("src", "main/delete.png");
   img.setAttribute("style", "padding-top: 0px;");img.setAttribute("id", i+"-delete");
   img.setAttribute("onclick", "deleteNode(this)");
   img.setAttribute("onmouseover", "deleteButton(this)");
   img.setAttribute("onmouseout", "deleteButtonNorm(this)");
   center = document.createElement("center");
   center.appendChild(img);
   c2.appendChild(center);

   r.appendChild(c1);
   r.appendChild(c2);
   col3.appendChild(r);

   // combine everything
   row = document.createElement("div");
   row.setAttribute("class", "row");
   row.appendChild(col1);
   row.appendChild(col2);
   row.appendChild(col3);
   
   return row;

}

function lastNode() {

   var li = document.createElement("li");
   var row = document.createElement("div"); // row
   var imgCol = document.createElement("div"); // img column
   var col = document.createElement("div"); // column
   var text = document.createTextNode("Add New Directory");
   var center = document.createElement("center");
   
   // create list elements attribute
   li.setAttribute("class", "none");
   li.setAttribute("id", "last");
   li.setAttribute("style", "background:#fff;cursor: pointer;");
   li.setAttribute("onclick", "addEntry()");

   // create imgs information
   var img = document.createElement("img");
   img.setAttribute("src", "main/plus.png");
   imgCol.setAttribute("class", "col-sm-1");

   // create row elements attributes
   row.setAttribute("class", "row");

   // create columns attributes
   col.setAttribute("class", "col-sm-3");
   col.setAttribute("style","border-right: none; padding-left:0px;");

   // combine everything
   center.appendChild(img);
   imgCol.appendChild(center);
   col.appendChild(text);
   row.appendChild(imgCol);
   row.appendChild(col);
   li.appendChild(row);

   return li;
   
}