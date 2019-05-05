      // Form validation code will come here. 
      function validate() { 
       
         if( document.myForm.Name.value == "" ) { 
            alert( "Please provide your name!" ); 
            document.myForm.Name.focus() ; 
            return false; 
         } 
         if( document.myForm.EMail.value == "" ) { 
            alert( "Please provide your Email!" ); 
            document.myForm.EMail.focus() ; 
            return false; 
         } 
         if( document.myForm.Zip.value == "" || isNaN( document.myForm.Zip.value ) || 
            document.myForm.Zip.value.length != 5 ) { 
             
            alert( "Please provide a zip in the format #####." ); 
            document.myForm.Zip.focus() ; 
            return false; 
         } 
         if( document.myForm.Country.value == "-1" ) { 
            alert( "Please provide your country!" ); 
            return false; 
         } 
         return( true ); 
      } 
   //

   "use strict";
   var $ = function (id) {
       return document.getElementById(id);
   };
   var joinList = function () {
      var emailAddress1 = $("email_address1").value;
      var emailAddress2 = $("email_address2").value;
      var isValid = true;
      
      if (emailAddress1 == "") { 
         $("email_address1_error").firstChild.nodeValue = "This field is required.";
         isValid = false;
      } else {
         $("email_address1_error").firstChild.nodeValue = "";
      } 
   
      if (emailAddress1 !== emailAddress2) { 
         $("email_address2_error").firstChild.nodeValue = "This entry must equal first entry.";
         isValid = false;
      } else {
         $("email_address2_error").firstChild.nodeValue = "";
      }  
      if ($("first_name").value == "") {
         $("first_name_error").firstChild.nodeValue = "This field is required.";
         isValid = false;
      } else {
         $("first_name_error").firstChild.nodeValue = "";
      }  
      
      if (isValid) {
         $("email_form").submit(); 
      }
   };
   
   window.onload = function () {
       $("join_list").onclick = joinList;
       $("email_address1").focus();
   };
   
