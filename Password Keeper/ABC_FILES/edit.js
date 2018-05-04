
function editNode(x) {

   var id = $(x).attr('id').split('-')[0];
   var name = "";
   var account = "";
   var email = "";
   var password = "";

   // get values of box from pass object
   for (var i in pass) {
      if (pass[i]["id"] == id) {
         name = pass[i]["name"];
         account = pass[i]["account"];
         email = pass[i]["email"];
         password = pass[i]["password"];
         break;
      }
   }

   // change all boxes to input boxes
   var li = $(x).parent().parent().parent().parent().parent();
   var oli = li.html();
   li.html("");
   // make their placeholders value the value of the box
   li.append(buildInputNode(name, account, email, password));
   var label = document.getElementById("label");
   label.classList.add("view");
   startListening(li, id, oli);

}
