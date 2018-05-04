
function editNode(x) {

   var id = $(x).attr('id').split('-')[0];
   var name = "";
   var dir = "";

   // get values of box from pass object
   for (var i in pass) {
      if (pass[i]["id"] == id) {
         name = pass[i]["name"];
         dir = pass[i]["dir"];
         break;
      }
   }

   // change all boxes to input boxes
   var li = $(x).parent().parent().parent().parent().parent().parent();
   var oli = li.html();
   li.html("");
   // make their placeholders value the value of the box
   li.append(buildInputNode(name, dir));
   var label = document.getElementById("label");
   label.classList.add("view");
   startListening(li, id, oli);

}
