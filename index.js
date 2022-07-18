
var input_id ; 
var input_pw ; 

var str_id = "" ; 
var str_pw = ""; 

var loginbox;
var div_g ;



window.onload = function(){

    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");
    loginbox= document.getElementById("login_box");
    div_g= document.getElementById("g");
    
    
    

    // str_id = input_id.value
    // str_pw = input_pw.value
}

function login(){

    // alert("id:"+ input_id.value + "pw:" + input_pw.value);

    var local_id = input_id.value;
    var local_pw = input_pw.value;

    if(local_id == "1234" && local_pw == "1234"){
        div_g.innerHTML="회원님 반갑습니다❣";
    }else{
        alert("잘못된 아이디/패스워드입니다😢");
    }
}