//  var fname = document.getElementById("fName").value;
//  var lname = document.getElementById("lName").value;
//  var addr = document.getElementById("address").value;
//  var Mnumber = document.getElementById("Mnum").value;
//  var emId = document.getElementById("EmailId").value;
//  var mpass = document.getElementById("passWord").value;
//  var cpass = document.getElementById("cpassword").value;

 function myFunction(){
    var fname = document.getElementById("fName").value;
    var lname = document.getElementById("lName").value;
    var gend = document.getElementById("gen").value;
    var gend1 = document.getElementById("gen1").value;
    var addr = document.getElementById("address").value;
    var Mnumber = document.getElementById("Mnum").value;
    var emId = document.getElementById("EmailId").value;
    var mpass = document.getElementById("passWord").value;
    var cpass = document.getElementById("cpassword").value;
    if(fname==""){
        alert("Please Enter First Name: ");
    }else if(lname==""){
        alert("Please Enter Last Name:");
    }else if(gend=="" || gend1==""){
        alert("Please Select Your Gender:");
    }else if(addr==""){
        alert("Please Enter Your Address:");
    }else if(Mnumber==""){
        alert("Please Enter Your Mobile Number:");
    }
    // else if(Mnumber !=""){
    //     if(Mnumber.length<10){
    //         alert("Please Enter A Valid Phone Number: ");
    //     }
    //     // }else{
    //     //     var count=0;
    //     //     for(i=0; Mnumber.length; i++){
    //     //         if(Mnumber[i] != 0 || Mnumber[i] != 1 ||  Mnumber[i] != 2 ||  Mnumber[i] != 3 || Mnumber[i] != 4 ||  Mnumber[i] != 5 || Mnumber[i] != 6 || Mnumber[i] != 7 || Mnumber[i] != 8 || Mnumber[i] != 9){
    //     //             count++;
    //     //         }
    //     //     }
    //     //     if(count != 0 ){
    //     //         alert("Please Enter A Valid Phone Number: ")
    //     //     }
    //     // }
    // }
    else if(emId==""){
        alert("Please Enter Your Email Id:");
    }else if(mpass==""){
        alert("Please Enter Password:");
    }else if(cpass==""){
        alert("Please Enter Confirm Password:");
    }else if(mpass != cpass){
        alert("Password And Confirm Password Does Not Match:");
    }
    else{
        window.open("form.html","self")
    }
 }

 function reset(){
    window.open("form.html","self")
 }