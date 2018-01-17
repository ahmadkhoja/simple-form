
        // note: always verify assumptions to save min 10 min
        // console.log("batata");


        //username is the selected name
        var username = document.getElementById("username");
        var password = document.getElementById("password");
        var button1 = document.getElementById("result");
        var container = document.getElementById("container");

        var persons = ["ahmad","yassin","jad","anthony","ibrahim"];
        
        
        var checked = function(selected_name){

            for (var i = 0; i < persons.length; i++) {
                // console.log(selected_name)
                // var person = persons[i];
                // var  text = "Hello" + persons[i].username.value;
                // container.innerHTML = text;
                if(selected_name==persons[i]){
                    return true;
                }
            }
            return false;
        }

        var multipleUsers = function(){
            if(checked(username.value)){
                container.innerHTML = "Hello "+ username.value;
            }
            else{
                container.innerHTML = "No username like that";
            }
           
        }

        // var doSomething = function(){
        //     if(username.value == "" || password.value == ""){
        //         container.innerHTML = "Put your name, password or else i will not give you batata :(";
        //     }else{
        //           container.innerHTML = "Hello " + username.value;           
        //     }
            
        // }
        
        // button1.addEventListener("click",doSomething);
        button1.addEventListener("click",multipleUsers);