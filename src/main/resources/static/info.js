// Copyright (C) 2014 The Android Open Source Project
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

Gerrit.install(function(self) {
    function onOpenChange(c, r) {
      var change_plugins = document
          .getElementById('change_plugins');
	  var doc = document;
	  var a = document.createElement("a");
	  a.id = "downloadAnchorElem";
	  a.style.display = "none";
      var frg = doc.createDocumentFragment();
      var btn = document.createElement("BUTTON"); // Create a <button> element
      btn.onclick = function(){
		var url = "changes/"
           + c.change_id
           + "/comments";
		Gerrit.get(url, function(r) {
			if (r != null) {
				var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(r));
				var dlAnchorElem = document.getElementById('downloadAnchorElem');
				dlAnchorElem.setAttribute("href", dataStr);
				dlAnchorElem.setAttribute("download", "comments_"+ c.change_id + "_" + Date.now() + ".json");
				dlAnchorElem.click();
			}
		  //var url = "http://"+GerritServer.getLocalHost().getHostName()+":8080/changes/" + //c._number+"/comments";
		  //alert(url);
		  //var xmlHttp = new XMLHttpRequest();
          //xmlHttp.open( "GET", url, false ); // false for synchronous request
          //xmlHttp.send( null );
          //alert(xmlHttp.responseText);
			 //self.get(url, null);
      })};
      var t = document.createTextNode("Download Comments");       // Create a text node
      btn.appendChild(t); 
	  //var p = doc.createElement('p');
      //p.appendChild(doc.createTextNode(r));
      frg.appendChild(btn);
	  frg.appendChild(a);
      // add frg to #change_plugins container
      change_plugins.appendChild(frg);
      // Gerrit.get(url, function(r) {
        // if (r != null) {
          // var doc = document;
          // var frg = doc.createDocumentFragment();
          // var p = doc.createElement('p');
          // p.appendChild(doc.createTextNode(r));
          // frg.appendChild(p);

          //add frg to #change_plugins container
          // change_plugins.appendChild(frg);
        // }
      // });
    }
    Gerrit.on('showchange', onOpenChange);
  });
