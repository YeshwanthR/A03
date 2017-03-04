var total=0;
var x,i;
function myFunction() {
    

 if (document.getElementById("id1").checked==true) 
total=500;
 if (document.getElementById("id2").checked==true)
total=800;
 if (document.getElementById("id3").checked==true)
total=600;
 if (document.getElementById("id4").checked==true)
total=300;

x=document.getElementById("td").value
i=parseInt(x);
total=total+(total/i); 


document.getElementById("result").innerHTML = total;
 
 //$('#pelasera').value("Hello <b>world</b>!");
 $("#p").replaceWith( "<br><h2>thank you</h2>" );

};

var AppTest={

    indexresult: function(total,i){

        return (total+(total/i));
    }



    }