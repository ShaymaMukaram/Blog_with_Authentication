$(function () {
    var operation = "C"; 
    var index = -1;
    var user = localStorage.getItem("user"); 
    user = JSON.parse(user); 
    if (user=== null) 
    user= [];
  
    function Create() {
      
      var person = JSON.stringify({
        ID: $("#ID").val(),
        Title: $("#Title").val(),
        Email: $("#Email").val()
      }); 
   
      user.push(person);
  
      localStorage.setItem("user", JSON.stringify(user));
  
      return true;
    }
  
    function Edit() {
     
      user[index] = JSON.stringify({
          ID: $("#ID").val(),
          Title : $("#Title").val(),
          Email: $("#Email").val()
      });
  
      localStorage.setItem("user", JSON.stringify(user)); 
     
      return true;
    }
  
    function Delete() {
  
      user.splice(index, 1); 
  
      localStorage.setItem("user", JSON.stringify(user)); 
   
    }
  
    function List() {
      $("#List").html("");
      $("#List").html(
              "<thead>" +
              "<tr>" +                
              "<th>ID</th>" +
              "<th>Name</th>" +
              "<th>Email</th>" +
              "<th>Action</th>" +
              "</tr>" +
              "</thead>" +
              "<tbody>" +
              "</tbody>"
              ); 
      for (var i in user) {
          var per = JSON.parse(user[i]);
          $("#List tbody").append("<tr>" +                    
                  "<td>" + per.ID + "</td>" +
                  "<td>" + per.Title+ "</td>" +
                  "<td>" + per.Email + "</td>" +                    
                  "<td><img src='edit.png' alt='Edit" + i + "' class='Edit'/><img src='delete.png' alt='Delete" + i + "' class='Delete'/></td>" +
                  "</tr>"
                  );
      } 
    }
  
    $("#frmPerson").bind("submit", function () {
      if (operation === "C")
          return Create();
      else
          return Edit();
    }); 
    
    List();
  
    $(".Edit").bind("click", function () {
      operation = "E"; 
  
      index = parseInt($(this).attr("alt").replace("Edit", ""));
     
      var per = JSON.parse(user[index]); 
      $("#ID").val(per.ID);
      $("#Title").val(per.Title);
   
      $("#Email").val(per.Email);
      $("#ID").attr("readonly", "readonly");
      $("#Title").focus();
    });
  
    $(".Delete").bind("click", function () {
      index = parseInt($(this).attr("alt").replace("Delete", "")); 
      Delete(); 
      List(); 
    });
  });
  
  