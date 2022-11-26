function loadDoc(){
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() 
{
  if (this.readyState == 4 && this.status == 200) 
  {
     Function1(this);
     delNode(this);
     delElement(this);
     change(this);
     addElement(this);
  }
};
xhttp.open("GET", "quiz_game.xml", true);
xhttp.send();

function Function1(xml) {
  var xmlDoc = xml.responseXML;
  document.getElementById("ques1").innerHTML =
  xmlDoc.getElementsByTagName("question")[0].childNodes[0].nodeValue;
  document.getElementById("ques2").innerHTML =
  xmlDoc.getElementsByTagName("question")[1].childNodes[0].nodeValue;
  document.getElementById("ques3").innerHTML =
  xmlDoc.getElementsByTagName("question")[2].childNodes[0].nodeValue;
  document.getElementById("ques4").innerHTML =
  xmlDoc.getElementsByTagName("question")[3].childNodes[0].nodeValue;
  document.getElementById("ques5").innerHTML =
  xmlDoc.getElementsByTagName("question")[4].childNodes[0].nodeValue;
  document.getElementById("ques6").innerHTML =
  xmlDoc.getElementsByTagName("question")[5].childNodes[0].nodeValue;
  document.getElementById("ques7").innerHTML =
  xmlDoc.getElementsByTagName("question")[6].childNodes[0].nodeValue;
  document.getElementById("ques8").innerHTML =
  xmlDoc.getElementsByTagName("question")[7].childNodes[0].nodeValue;

  document.getElementById("ques1_a").innerHTML =
  xmlDoc.getElementsByTagName("A")[0].childNodes[0].nodeValue;
  document.getElementById("ques1_b").innerHTML =
  xmlDoc.getElementsByTagName("B")[0].childNodes[0].nodeValue;
  document.getElementById("ques1_c").innerHTML =
  xmlDoc.getElementsByTagName("C")[0].childNodes[0].nodeValue;
  document.getElementById("ques1_d").innerHTML =
  xmlDoc.getElementsByTagName("D")[0].childNodes[0].nodeValue;
 
  document.getElementById("ques2_a").innerHTML =
  xmlDoc.getElementsByTagName("A")[1].childNodes[0].nodeValue;
  document.getElementById("ques2_b").innerHTML =
  xmlDoc.getElementsByTagName("B")[1].childNodes[0].nodeValue;
  document.getElementById("ques2_c").innerHTML =
  xmlDoc.getElementsByTagName("C")[1].childNodes[0].nodeValue;
  document.getElementById("ques2_d").innerHTML =
  xmlDoc.getElementsByTagName("D")[1].childNodes[0].nodeValue;
 
  document.getElementById("ques3_a").innerHTML =
  xmlDoc.getElementsByTagName("A")[2].childNodes[0].nodeValue;
  document.getElementById("ques3_b").innerHTML =
  xmlDoc.getElementsByTagName("B")[2].childNodes[0].nodeValue;
  document.getElementById("ques3_c").innerHTML =
  xmlDoc.getElementsByTagName("C")[2].childNodes[0].nodeValue;
  document.getElementById("ques3_d").innerHTML =
  xmlDoc.getElementsByTagName("D")[2].childNodes[0].nodeValue;
 
  document.getElementById("ques4_a").innerHTML =
  xmlDoc.getElementsByTagName("A")[3].childNodes[0].nodeValue;
  document.getElementById("ques4_b").innerHTML =
  xmlDoc.getElementsByTagName("B")[3].childNodes[0].nodeValue;
  document.getElementById("ques4_c").innerHTML =
  xmlDoc.getElementsByTagName("C")[3].childNodes[0].nodeValue;
  document.getElementById("ques4_d").innerHTML =
  xmlDoc.getElementsByTagName("D")[3].childNodes[0].nodeValue;

  document.getElementById("ques5_a").innerHTML =
  xmlDoc.getElementsByTagName("A")[4].childNodes[0].nodeValue;
  document.getElementById("ques5_b").innerHTML =
  xmlDoc.getElementsByTagName("B")[4].childNodes[0].nodeValue;
  document.getElementById("ques5_c").innerHTML =
  xmlDoc.getElementsByTagName("C")[4].childNodes[0].nodeValue;
  document.getElementById("ques5_d").innerHTML =
  xmlDoc.getElementsByTagName("D")[4].childNodes[0].nodeValue;

  document.getElementById("ques6_a").innerHTML =
  xmlDoc.getElementsByTagName("A")[5].childNodes[0].nodeValue;
  document.getElementById("ques6_b").innerHTML =
  xmlDoc.getElementsByTagName("B")[5].childNodes[0].nodeValue;
  document.getElementById("ques6_c").innerHTML =
  xmlDoc.getElementsByTagName("C")[5].childNodes[0].nodeValue;
  document.getElementById("ques6_d").innerHTML =
  xmlDoc.getElementsByTagName("D")[5].childNodes[0].nodeValue;

  document.getElementById("ques7_a").innerHTML =
  xmlDoc.getElementsByTagName("A")[6].childNodes[0].nodeValue;
  document.getElementById("ques7_b").innerHTML =
  xmlDoc.getElementsByTagName("B")[6].childNodes[0].nodeValue;
  document.getElementById("ques7_c").innerHTML =
  xmlDoc.getElementsByTagName("C")[6].childNodes[0].nodeValue;
  document.getElementById("ques7_d").innerHTML =
  xmlDoc.getElementsByTagName("D")[6].childNodes[0].nodeValue;

  document.getElementById("ques8_a").innerHTML =
  xmlDoc.getElementsByTagName("A")[7].childNodes[0].nodeValue;
  document.getElementById("ques8_b").innerHTML =
  xmlDoc.getElementsByTagName("B")[7].childNodes[0].nodeValue;
  document.getElementById("ques8_c").innerHTML =
  xmlDoc.getElementsByTagName("C")[7].childNodes[0].nodeValue;
  document.getElementById("ques8_d").innerHTML =
  xmlDoc.getElementsByTagName("D")[7].childNodes[0].nodeValue;
  }

 
  function delNode(xml) 
  {
  var xmlDoc = xml.responseXML;
  var y = xmlDoc.getElementsByTagName('quiz')[0];
  xmlDoc.documentElement.removeChild(y);
  
  document.getElementById("del_node").innerHTML =
  "Removed node: " + y.nodeName;
}

function delElement(xml) 
{
    var x, y, xmlDoc, txt;
    xmlDoc = xml.responseXML;
    txt = "";
    x = xmlDoc.getElementsByTagName("D")[2];
    txt += "Element Present: " + x.childNodes.length + "<br>";
    y = x.childNodes[0];
    x.removeChild(y);
    txt += "Element Now: " + x.childNodes.length;
    document.getElementById("del_element").innerHTML = txt;
}

function change(xml){
    var x, xmlDoc, txt;
    xmlDoc = xml.responseXML;
    x = xmlDoc.getElementsByTagName("D")[5].childNodes[0];
    txt ="Previous value: " + x.nodeValue + "<br>";
    x.nodeValue="Thomas Jefferson";
    txt +="New value: " + x.nodeValue;
    document.getElementById("change").innerHTML = txt
}

function addElement(xml) 
{
  var x, y, i, newElement, txt, xmlDoc;
  xmlDoc = xml.responseXML;
  newElement = xmlDoc.createElement("time");
  x = xmlDoc.getElementsByTagName("quiz")[5]
  x.appendChild(newElement);

  xlen = x.childNodes.length;
  y = x.firstChild;
  txt = "";
  for (i = 0; i < xlen; i++) {
      if (y.nodeType == 1) {
          txt += y.nodeName + " ";
      }
      y = y.nextSibling;
  }
  document.getElementById("new_element").innerHTML = txt;
}
document.getElementById("mcq").innerHTML = table;
}
