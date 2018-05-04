
var pass = {};

function fromDB() {

   var r = new XMLHttpRequest();
   r.open("GET", 'main/fromDB.php', true);
   r.setRequestHeader("Content-Type", "application/json");
   r.onreadystatechange = function () {
      if (r.readyState == 4 && r.status == 200) {
         var json = JSON.parse(r.responseText);
         var val = "";
         for (var x in json) {
            if (json.hasOwnProperty(x)) {
               val = json[x];
            }
         }
         fillArray(json, val);
      }
   }
   r.send();

}
fromDB();

function fillArray(arr, val) {

   pass = {};
   if (val != "no") {
      for (var i = 1; i <= arr.length; i++) {
         var arr2 = arr[i-1].split("--tm--");
         pass[i] = {
                  "id": arr2[0],
                  "name": arr2[1],
                  "dir": arr2[2]
                  };
      }
   }
   getList();

}