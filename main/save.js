
function startListening(id, i, el) {
   $(function() {
      var name = $("#name");
      var dir = $("#directory");
      $(id).keydown(function(e) {
         if (e.which == 13) {
            doChecks(name, dir, i);
         } else if(e.which == 27) {
            placeBoxes(id, el);
         }
      });
      
   });
}

function placeBoxes(i, e) {
   $(i).html(e);
}

function doChecks(n, d, i) {

   if (n.val() == "") {
      errorMessage("What do you want to name the folder?", 3);
   } else if (d.val() == "") {
      errorMessage("What is the directory name to open it?", 3);
   } else {
      
      if (i == -1) toDB(n.val(), d.val());
      else  editDB(n.val(), d.val(), i);
      var label = document.getElementById("label");
      label.classList.remove("view");
      fromDB();
      fromDB();

   }

}

function toDB(n, d) {
	
	var r = new XMLHttpRequest();
	var url = "main/toDB.php?i=" + encodeURIComponent(JSON.stringify({"name": n, "dir": d}));
	r.open("GET", url, true);
	r.setRequestHeader("Content-Type", "application/json");
	r.onreadystatechange = function() {
		if (r.readyState == 4 && r.status == 200) {
			var json = JSON.parse(r.responseText);
			var val = "";
			for (var x in json) {
				
				if (json.hasOwnProperty(x)) {
					val = json[x];
				}
				
			}
			if (val == "no") {
            errorMessage("Something wrong happened, please try again!", 3);
			} else {
            fromDB();
         }
		}
	}
	r.send();
	
}

function errorMessage(v, t) {

   var error = document.getElementById("error");
   t *= 1000;
   error.innerHTML = v;
   error.classList.add("error");
   setTimeout(function() {
      error.classList.remove("error");
   }, t);

}

function editDB(n, d, id) {
 
   var r = new XMLHttpRequest();
	var url = "main/edit.php?i=" + encodeURIComponent(JSON.stringify({"id": id, "name": n, "dir": d}));
	r.open("GET", url, true);
	r.setRequestHeader("Content-Type", "application/json");
	r.onreadystatechange = function() {
		if (r.readyState == 4 && r.status == 200) {
			var json = JSON.parse(r.responseText);
			var val = "";
			for (var x in json) {
				
				if (json.hasOwnProperty(x)) {
					val = json[x];
				}
				
         }
			if (json[0] == "no" || json[1] == "no") {
            errorMessage("Something wrong happened, please try again!", 3);
			} else {
            fromDB();
         }
		}
	}
	r.send();
   
}