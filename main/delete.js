
function deleteNode(x) {

   var id = $(x).attr('id').split('-')[0];
   if (id != "undefined") {
      var r = new XMLHttpRequest();
      var url = "main/delete.php?i="+ encodeURIComponent(JSON.stringify({"id": id}));
      r.open("GET", url, true);
      r.setRequestHeader("Content-Type", "application/json");
      r.onreadystatechange = function () {
         if (r.readyState == 4 && r.status == 200) {
            var json = JSON.parse(r.responseText);
            var val = "";
            for (var i in json) {
               if (json.hasOwnProperty(i)) {
                  val = json[i];
               }
            }
            if (val == "yes") {
               fromDB();
               fromDB();
            } else {
               errorMessage("Something wrong happened please try again", 3);
            }
         }
      }
      r.send();
   }

}