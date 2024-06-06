gsap.to("#navbar",{
    
     height:"15vmin",
    backdropFilter:"blur(20px)",
    boxShadow:"0 1vmin 3vmin #000000",
    duration:.1,
    scrollTrigger:{
        trigger:"#navbar",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to(".link",{
    background: "radial-gradient(circle, rgba(247,150,192,.4) 0%, rgba(118,174,241,.3) 100%)",
   border:"2px solid rgba(212, 255, 241, 0.3)",
    // backdropFilter:"blur(20px)",
    duration:.5,
   
    scrollTrigger:{
        trigger:".link",
        scroller:"body",
        start:"top -11%",
        end:"top -10%",
        scrub:1
    }
})
gsap.to(".page1",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",
        start:"top -10%",
        end:"top -100%",
        scrub:2
    }
})
gsap.to(".page2",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"top 100%",
        end:"top -70%",
        scrub:2
    }
})
gsap.to(".page3",{
    //background: "linear-gradient(45deg, rgb(16, 18, 20) 22.4%, rgb(16, 37, 60) 40%, rgb(0, 0, 0) 98.6%)",
    background:"linear-gradient(90deg,#000000 7%, #222222 43%, #000000 77%)",
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        start:"top 70%",
        end:"top 100%",
        scrub:3
    }
})
gsap.to(".page4",{
    background:"linear-gradient(90deg,#000000 7%, #222222 43%, #000000 77%)",
    scrollTrigger:{
        trigger:".page4",
        scroller:"body",
        start:"top 70%",
        end:"top 100%",
        scrub:3
        
    }
})
gsap.to(".page5",{
   // background: "linear-gradient(90deg, rgba(0,0,0,1) 7%, rgba(45,2,54,1) 43%, rgba(0,0,0,1) 77%",
   background:"linear-gradient(90deg,#000000 7%, #222222 43%, #000000 77%)",
    scrollTrigger:{
        trigger:".page5",
        scroller:"body",
        start:"top 70%",
        end:"top 100%",
        scrub:3
    }
})
gsap.to(".foot-box",{
    background: "radial-gradient(circle, rgba(49,185,255,0.8101365546218487) 0%, rgba(0,3,8,1) 45%, rgba(29,101,154,0.8297443977591037) 55%, rgba(0,0,0,1) 66%)",
    scrollTrigger:{
        trigger:".foot-box",
        scroller:"body",
        start:"top 90%",
        end:"top 100%",
        scrub:3
    }
})

let profiles = document.querySelectorAll(".media");
for(account of profiles){
account.addEventListener("click",function(){
    console.log("clicked");
    let id = this.getAttribute("id");
    console.log(id);
    if (id == "insta") {
        window.location.href = "https://www.instagram.com/0ld_school_archannn/";
    } else if (id == "X") {
        window.location.href = "https://twitter.com/devXarchan";
    }else if (id == "ghub") {
        window.location.href = "https://github.com/archandas";
    } else if (id == "lnkdn") {
        window.location.href = "https://www.linkedin.com/in/archan-das-b41708250/";
    }
});
}

let projects = document.querySelectorAll(".prCards");
for(pr of projects){
    pr.addEventListener("click",function(){
        let prId = this.getAttribute("id");
        if(prId == "weatherApp"){
            window.location.href = " https://archandas.github.io/CBTC-WeatherVue/";
        }else if (prId == "ttt") {
            window.location.href = "https://archandas.github.io/Tic-Tac-Toe/";
        }else if (prId == "rps") {
            window.location.href = " https://archandas.github.io/Rock-Paper-Scissors/";
        } else if (prId == "amzn") {
            alert("open in desktop for better viewing experience");
            window.location.href = " https://archandas.github.io/";
        }
    });
}

let gmail = document.querySelector("#mail");
gmail.addEventListener("click",()=>{
    //window.location.href = "https://mail.google.com/mail/?view=cm&fs=1&to=archandas419@gmail.com";
    window.location.href = "mailto:archandas419@gmail.com";
})

let eduBtn = document.querySelector("#eduClick");

eduBtn.addEventListener("click",() => {
let educations = document.querySelector(".page2");
let eduPage = educations.offsetTop;
window.scrollTo({
    top: eduPage -70,
    behavior: "smooth"
});
});

let skillBtn = document.querySelector("#skillClick");

skillBtn.addEventListener("click",() =>{
    let skills = document.querySelector(".page3");
    let skillPage = skills.offsetTop;
    window.scrollTo({
        top: skillPage -50,
        behavior: "smooth"
    });
});

let prBtn = document.querySelector("#prClick");

prBtn.addEventListener("click", () => {
    let projects = document.querySelector(".page4");
     let prPage = projects.offsetTop;
     window.scrollTo({
        top: prPage -40,
         behavior: "smooth"
    });

});

let cwmBtn = document.querySelector("#cwmClick");

cwmBtn.addEventListener("click",() =>{
    let connections = document.querySelector(".page5");
    let cwmPage = connections.offsetTop;
    window.scrollTo({
        top: cwmPage -50,
        behavior: "smooth"
    });
});

let meBtn = document.querySelector(".logoBox");

meBtn.addEventListener("click",() => {
let aboutMe = document.querySelector(".page1");
let mePage = aboutMe.offsetTop;
window.scrollTo({
    top:mePage -20,
    behavior: "smooth"
});
});
