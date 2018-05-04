
function startListening(id, i, el) {
   $(function() {
      var name = $("#name");
      var account = $("#account");
      var email = $("#email");
      var password = $("#password");
      $(id).keydown(function(e) {
         if (e.which == 13) {
            doChecks(name, account, email, password, i);
         } else if(e.which == 27) {
            placeBoxes(id, el);
         }
      });
      
   });
}

function placeBoxes(i, e) {
   $(i).html(e);
}

function doChecks(n, a, e, p, i) {

   if (n.val() == "") {
      errorMessage("Does this new account belong to Jawad or Lubna?", 3);
   } else if (e.val() == "") {
      errorMessage("Which Email or Username is this account associated to?", 3);
   } else if (p.val() == "") {
      errorMessage("The entire point is to save your Passwords, what is the Password of the new account?", 4);
   } else {
      
      if (i == -1) toDB(n.val(), a.val(), e.val(), p.val());
      else  editDB(n.val(), a.val(), e.val(), p.val(), i);
      var label = document.getElementById("label");
      label.classList.remove("view");
      fromDB();
      fromDB();

   }

}

function toDB(n, a, e, p) {
	
	var r = new XMLHttpRequest();
	var url = "ABC_FILES/toDB.php?i=" + encodeURIComponent(JSON.stringify({"name": n, "account": a, "email": e, "password": p}));
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

function editDB(n, a, e, p, id) {
 
   var r = new XMLHttpRequest();
	var url = "ABC_FILES/edit.php?i=" + encodeURIComponent(JSON.stringify({"id": id, "name": n, "account": a, "email": e, "password": p}));
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
			if (json[0] == "no" || json[1] == "no" || json[2] == "no" || json[3] == "no") {
            errorMessage("Something wrong happened, please try again!", 3);
			} else {
            fromDB();
         }
		}
	}
	r.send();
   
}