var typed=new Typed(".typing",{
    strings:[""," Web Designer"," Web Developer"," Programmer"],
    typeSpeed:100,
    BackSpeed:56,
    loop:true
     
});
// aside
const nav=document.querySelector(".nav");
    navList=nav.querySelectorAll("li");
    totalNavList=navList.length;
    let allSection=document.querySelectorAll(".section");
    let totalSection=allSection.length;
    for(let i=0;i<totalNavList;i++){
        const ancho=navList[i].querySelector("a");
        ancho.addEventListener("click",function(){
            
            for(let j=0;j<totalNavList;j++){
                navList[j].querySelector("a").classList.remove("active");
                  
              }
              this.classList.add("active");
              showsection(this);
        })

        
    }
    function showsection(element){
        const target=element.getAttribute("href").split("#")[1];
        let ref=allSection;
        for(let i=0;i<totalSection;i++){
            
            if(allSection[i].classList.contains("active")){
                allSection[i].classList.remove("active");
            }
            if(!allSection[i].classList.contains("hidden")){
                ref=allSection[i];
            }
        
            
        }
        document.querySelector("#"+target).classList.remove("hidden");
        document.querySelector("#"+target).classList.add("active");

            // ref.classList.add("hidden");
        
        
        console.log(target);

    }
    // toggler
    const navbtn=document.querySelector(".nav-toggler");
    aside=document.querySelector(".aside");
    navbtn.addEventListener('click',()=>{
        aside.classList.toggle("open");
        navbtn.classList.toggle("open");
        for(let i=0;i<totalSection;i++){
            allSection[i].classList.toggle("open"); 
        }

    });
    //dark theme
    const darkbtn=document.querySelector(".day-night");
    let theme="light";
    darkbtn.addEventListener('click',()=>{
        if(theme=="light"){
            darkTheme();
            theme="dark";
        }
        else{
            lightTheme();
            theme="light";
        }


    });
    function darkTheme(){
        document.documentElement.style.setProperty('--bg-black-900',"#161516");        
        document.documentElement.style.setProperty('--bg-black-100',"#232123");
        document.documentElement.style.setProperty('--bg-black-50',"#232123");
        document.documentElement.style.setProperty('--text-black-900',"#f2f2fc");
        document.documentElement.style.setProperty('--text-black-700',"#fdf9ff");
        let btn=document.querySelector(".day-night");
        btn.innerHTML='<i class="fas fa-sun"></i>';
        
    };
    function lightTheme(){
        document.documentElement.style.setProperty('--bg-black-900',"#f2f2fc");        
        document.documentElement.style.setProperty('--bg-black-100',"#fdf9ff");
        document.documentElement.style.setProperty('--bg-black-50',"#e8dfec");
        document.documentElement.style.setProperty('--text-black-900',"#302e4d");
        document.documentElement.style.setProperty('--text-black-700',"#504e70");
        let btn=document.querySelector(".day-night");
        btn.innerHTML='<i class="fas fa-moon"></i>';
    }
