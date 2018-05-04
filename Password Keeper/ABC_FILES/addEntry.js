/* This file will turn the row into a form
   to add nodes to the list or edit a node
   in the list */

function addEntry() {
   // rebuild the li's structure to look like the node structure but rather than having information in every column it will have an input box
   var li = document.getElementById("last");
   var oli = li.innerHTML;
   li.innerHTML = "";
   li.removeAttribute("onclick");

   // li.appendChild(buildNode(val["name"], val["email"], val["account"], val["password"]));
   li.appendChild(buildInputNode('','','',''));
   var label = document.getElementById("label");
   label.classList.add("view");
   startListening("#last", -1, oli);
}

function buildInputNode(n, a, e, p) {

   var row = "";
   var input = "";

   var col1 = document.createElement("div");
   var col2 = document.createElement("div");
   var col3 = document.createElement("div");
   var col4 = document.createElement("div");

   col1.setAttribute("class", "col-sm-3 first");
   col2.setAttribute("class", "col-sm-3");
   col3.setAttribute("class", "col-sm-3");
   col4.setAttribute("class", "col-sm-3 last");

   if (n != "") input = createInput("name", n, 1);
   else input = createInput("name", "Name", 0);
   input.setAttribute("autofocus", "on");
   col1.appendChild(input);
   if (n != "") input = createInput("account", a, 1);
   else input = createInput("account", "Account", 0);
   col2.appendChild(input);
   if (n != "") input = createInput("email", e, 1);
   else input = createInput("email", "Email/Username", 0);
   col3.appendChild(input);
   if (n != "") input = createInput("password", p, 1);
   else input = createInput("password", "Password", 0);
   col4.appendChild(input);

   col4.setAttribute("style", "text-transform: none;");

   row = document.createElement("div");
   row.setAttribute("class", "row");
   row.appendChild(col1);
   row.appendChild(col2);
   row.appendChild(col3);
   row.appendChild(col4);
   
   return row;

}

function createInput(id, val, t) {

   var input = document.createElement("input");
   input.setAttribute("type", "text");
   input.setAttribute("name", id);
   input.setAttribute("id", id);
   if (t == 1) input.setAttribute("value", val);
   input.setAttribute("placeholder", val);
   input.setAttribute("class", "inputxt");
   input.setAttribute("autocomplete", "off");

   return input;

}
