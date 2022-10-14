let btnSignin = document.querySelector("#signin");
let btnSignup = document.querySelector("#signup");
let home = document.querySelector(".home");
let hometwo = document.querySelector(".hometwo")
let main = document.querySelector("main");
largura = (main).clientWidth; 

if (largura < 600){

    btnSignin.addEventListener("click", function() {
        home.style.display = "block";
        hometwo.style.display = "none";
    });
        
    btnSignup.addEventListener("click", function() {
        home.style.display = "none";
        hometwo.style.display = "block";
    });
}else{
    btnSignin.addEventListener("click", function() {
        home.style.display = "flex";
        hometwo.style.display = "none";
    });
        
    btnSignup.addEventListener("click", function() {
        home.style.display = "none";
        hometwo.style.display = "flex";
    });   
};


window.addEventListener('resize', function(){
    let largura = (main).clientWidth;
    if (largura < 600){

        btnSignin.addEventListener("click", function() {
            home.style.display = "block";
            hometwo.style.display = "none";
        });
            
        btnSignup.addEventListener("click", function() {
            home.style.display = "none";
            hometwo.style.display = "block";
        });
    }else{
        btnSignin.addEventListener("click", function() {
            home.style.display = "flex";
            hometwo.style.display = "none";
        });
            
        btnSignup.addEventListener("click", function() {
            home.style.display = "none";
            hometwo.style.display = "flex";
        });  
    };
    if (largura < 600 && hometwo.style.display === "flex"){
        hometwo.style.display = "block";
    }else if(largura > 600 && home.style.display === "block"){
        home.style.display = "flex";
    }else if(largura > 600 && hometwo.style.display ==="block"){
        hometwo.style.display = "flex";
    }else if(largura < 600 && home.style.display === "flex"){
        home.style.display = "block";
    };
});





