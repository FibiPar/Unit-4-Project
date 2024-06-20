let Luffy=0;
let Nami=0;
let Usopp=0;
let Zoro=0;
let Sanji=0;
let Franky=0;
let Jinbe=0;
let Robin=0;
let Chopper=0;
let Brook=0;

let q1a1= document.querySelector("#q1a1");
let q1a2=document.querySelector("#q1a2");
let q1a3=document.querySelector("#q1a3");
let q1a4=document.querySelector("#q1a4");
let q1a5=document.querySelector("#q1a5");
let q1a6=document.querySelector("#q1a6");
let q1a7=document.querySelector("#q1a7");
let q1a8=document.querySelector("#q1a8");
let q1a9=document.querySelector("#q1a9");
let q1a10=document.querySelector("#q1a10");

let q2a1= document.querySelector("#q2a1");
let q2a2=document.querySelector("#q2a2");
let q2a3=document.querySelector("#q2a3");
let q2a4=document.querySelector("#q2a4");
let q2a5=document.querySelector("#q2a5");
let q2a6=document.querySelector("#q2a6");
let q2a7=document.querySelector("#q2a7");
let q2a8=document.querySelector("#q2a8");
let q2a9=document.querySelector("#q2a9");
let q2a10=document.querySelector("#q2a10");

let q3a1= document.querySelector("#q3a1");
let q3a2=document.querySelector("#q3a2");
let q3a3=document.querySelector("#q3a3");
let q3a4=document.querySelector("#q3a4");
let q3a5=document.querySelector("#q3a5");
let q3a6=document.querySelector("#q3a6");
let q3a7=document.querySelector("#q3a7");
let q3a8=document.querySelector("#q3a8");
let q3a9=document.querySelector("#q3a9");
let q3a10=document.querySelector("#q3a10");

let q4a1= document.querySelector("#q4a1");
let q4a2=document.querySelector("#q4a2");
let q4a3=document.querySelector("#q4a3");
let q4a4=document.querySelector("#q4a4");
let q4a5=document.querySelector("#q4a5");
let q4a6=document.querySelector("#q4a6");
let q4a7=document.querySelector("#q4a7");
let q4a8=document.querySelector("#q4a8");
let q4a9=document.querySelector("#q4a9");
let q4a10=document.querySelector("#q4a10");

let q5a1= document.querySelector("#q5a1");
let q5a2=document.querySelector("#q5a2");
let q5a3=document.querySelector("#q5a3");
let q5a4=document.querySelector("#q5a4");
let q5a5=document.querySelector("#q5a5");
let q5a6=document.querySelector("#q5a6");
let q5a7=document.querySelector("#q5a7");
let q5a8=document.querySelector("#q5a8");
let q5a9=document.querySelector("#q5a9");
let q5a10=document.querySelector("#q5a10");

let result=document.querySelector(".result");

function transparentQ1(){
    q1a1.style.backgroundColor="#333333CC";
    q1a2.style.backgroundColor="#333333CC";
    q1a3.style.backgroundColor="#333333CC";
    q1a4.style.backgroundColor="#333333CC";
    q1a5.style.backgroundColor="#333333CC";
    q1a6.style.backgroundColor="#333333CC";
    q1a7.style.backgroundColor="#333333CC";
    q1a8.style.backgroundColor="#333333CC";
    q1a9.style.backgroundColor="#333333CC";
    q1a10.style.backgroundColor="#333333CC";
}

function opaqueQ1(){
    q1a1.style.backgroundColor="#333";
    q1a2.style.backgroundColor="#333";
    q1a3.style.backgroundColor="#333";
    q1a4.style.backgroundColor="#333";
    q1a5.style.backgroundColor="#333";
    q1a6.style.backgroundColor="#333";
    q1a7.style.backgroundColor="#333";
    q1a8.style.backgroundColor="#333";
    q1a9.style.backgroundColor="#333";
    q1a10.style.backgroundColor="#333";
}

function q1Buttons(button){
    if (button.style.backgroundColor==="rgb(17,17,17"){
        opaqueQ1();
        button.style.backgroundColor="#333";
    }else{
        transparentQ1();
        button.style.backgroundColor="#111";
    }
}

q1a1.addEventListener("click",()=> { Luffy++; q1Buttons(q1a1);});
q1a2.addEventListener("click",()=> { Nami++; q1Buttons(q1a2);});
q1a3.addEventListener("click",()=> { Usopp++; q1Buttons(q1a3);});
q1a4.addEventListener("click",()=> { Zoro++; q1Buttons(q1a4);});
q1a5.addEventListener("click",()=> { Sanji++; q1Buttons(q1a5);});
q1a6.addEventListener("click",()=> { Franky++; q1Buttons(q1a6);});
q1a7.addEventListener("click",()=> { Jinbe++; q1Buttons(q1a7);});
q1a8.addEventListener("click",()=> { Robin++; q1Buttons(q1a8);});
q1a9.addEventListener("click",()=> { Chopper++; q1Buttons(q1a9);});
q1a10.addEventListener("click",()=>{ Brook++; q1Buttons(q1a10);});


function transparentQ2(){
    q2a1.style.backgroundColor="#333333CC";
    q2a2.style.backgroundColor="#333333CC";
    q2a3.style.backgroundColor="#333333CC";
    q2a4.style.backgroundColor="#333333CC";
    q2a5.style.backgroundColor="#333333CC";
    q2a6.style.backgroundColor="#333333CC";
    q2a7.style.backgroundColor="#333333CC";
    q2a8.style.backgroundColor="#333333CC";
    q2a9.style.backgroundColor="#333333CC";
    q2a10.style.backgroundColor="#333333CC";
}

function opaqueQ2(){
    q2a1.style.backgroundColor="#333";
    q2a2.style.backgroundColor="#333";
    q2a3.style.backgroundColor="#333";
    q2a4.style.backgroundColor="#333";
    q2a5.style.backgroundColor="#333";
    q2a6.style.backgroundColor="#333";
    q2a7.style.backgroundColor="#333";
    q2a8.style.backgroundColor="#333";
    q2a9.style.backgroundColor="#333";
    q2a10.style.backgroundColor="#333";
}

function q2Buttons(button){
    if (button.style.backgroundColor==="rgb(17,17,17"){
        opaqueQ2();
        button.style.backgroundColor="#333";
    }else{
        transparentQ2();
        button.style.backgroundColor="#111";
    }
}

q2a1.addEventListener("click",()=> { Luffy++; q2Buttons(q2a1);});
q2a2.addEventListener("click",()=> { Nami++; q2Buttons(q2a2);});
q2a3.addEventListener("click",()=> { Usopp++; q2Buttons(q2a3);});
q2a4.addEventListener("click",()=> { Zoro++; q2Buttons(q2a4);});
q2a5.addEventListener("click",()=> { Sanji++; q2Buttons(q2a5);});
q2a6.addEventListener("click",()=> { Franky++; q2Buttons(q2a6);});
q2a7.addEventListener("click",()=> { Jinbe++; q2Buttons(q2a7);});
q2a8.addEventListener("click",()=> { Robin++; q2Buttons(q2a8);});
q2a9.addEventListener("click",()=> { Chopper++; q2Buttons(q2a9);});
q2a10.addEventListener("click",()=>{ Brook++; q2Buttons(q2a10);});

function transparentQ3(){
    q3a1.style.backgroundColor="#333333CC";
    q3a2.style.backgroundColor="#333333CC";
    q3a3.style.backgroundColor="#333333CC";
    q3a4.style.backgroundColor="#333333CC";
    q3a5.style.backgroundColor="#333333CC";
    q3a6.style.backgroundColor="#333333CC";
    q3a7.style.backgroundColor="#333333CC";
    q3a8.style.backgroundColor="#333333CC";
    q3a9.style.backgroundColor="#333333CC";
    q3a10.style.backgroundColor="#333333CC";
}

function opaqueQ3(){
    q3a1.style.backgroundColor="#333";
    q3a2.style.backgroundColor="#333";
    q3a3.style.backgroundColor="#333";
    q3a4.style.backgroundColor="#333";
    q3a5.style.backgroundColor="#333";
    q3a6.style.backgroundColor="#333";
    q3a7.style.backgroundColor="#333";
    q3a8.style.backgroundColor="#333";
    q3a9.style.backgroundColor="#333";
    q3a10.style.backgroundColor="#333";
}

function q3Buttons(button){
    if (button.style.backgroundColor==="rgb(17,17,17"){
        opaqueQ3();
        button.style.backgroundColor="#333";
    }else{
        transparentQ3();
        button.style.backgroundColor="#111";
    }
}

q3a1.addEventListener("click",()=> { Luffy++; q3Buttons(q3a1);});
q3a2.addEventListener("click",()=> { Nami++; q3Buttons(q3a2);});
q3a3.addEventListener("click",()=> { Usopp++; q3Buttons(q3a3);});
q3a4.addEventListener("click",()=> { Zoro++; q3Buttons(q3a4);});
q3a5.addEventListener("click",()=> { Sanji++; q3Buttons(q3a5);});
q3a6.addEventListener("click",()=> { Franky++; q3Buttons(q3a6);});
q3a7.addEventListener("click",()=> { Jinbe++; q3Buttons(q3a7);});
q3a8.addEventListener("click",()=> { Robin++; q3Buttons(q3a8);});
q3a9.addEventListener("click",()=> { Chopper++; q3Buttons(q3a9);});
q3a10.addEventListener("click",()=>{ Brook++; q3Buttons(q3a10);});

function transparentQ4(){
    q4a1.style.backgroundColor="#333333CC";
    q4a2.style.backgroundColor="#333333CC";
    q4a3.style.backgroundColor="#333333CC";
    q4a4.style.backgroundColor="#333333CC";
    q4a5.style.backgroundColor="#333333CC";
    q4a6.style.backgroundColor="#333333CC";
    q4a7.style.backgroundColor="#333333CC";
    q4a8.style.backgroundColor="#333333CC";
    q4a9.style.backgroundColor="#333333CC";
    q4a10.style.backgroundColor="#333333CC";
}

function opaqueQ4(){
    q4a1.style.backgroundColor="#333";
    q4a2.style.backgroundColor="#333";
    q4a3.style.backgroundColor="#333";
    q4a4.style.backgroundColor="#333";
    q4a5.style.backgroundColor="#333";
    q4a6.style.backgroundColor="#333";
    q4a7.style.backgroundColor="#333";
    q4a8.style.backgroundColor="#333";
    q4a9.style.backgroundColor="#333";
    q4a10.style.backgroundColor="#333";
}

function q4Buttons(button){
    if (button.style.backgroundColor==="rgb(17,17,17"){
        opaqueQ4();
        button.style.backgroundColor="#333";
    }else{
        transparentQ4();
        button.style.backgroundColor="#111";
    }
}

q4a1.addEventListener("click",()=> { Luffy++; q4Buttons(q4a1);});
q4a2.addEventListener("click",()=> { Nami++; q4Buttons(q4a2);});
q4a3.addEventListener("click",()=> { Usopp++; q4Buttons(q4a3);});
q4a4.addEventListener("click",()=> { Zoro++; q4Buttons(q4a4);});
q4a5.addEventListener("click",()=> { Sanji++; q4Buttons(q4a5);});
q4a6.addEventListener("click",()=> { Franky++; q4Buttons(q4a6);});
q4a7.addEventListener("click",()=> { Jinbe++; q4Buttons(q4a7);});
q4a8.addEventListener("click",()=> { Robin++; q4Buttons(q4a8);});
q4a9.addEventListener("click",()=> { Chopper++; q4Buttons(q4a9);});
q4a10.addEventListener("click",()=>{ Brook++; q4Buttons(q4a10);});

function transparentQ5(){
    q5a1.style.backgroundColor="#333333CC";
    q5a2.style.backgroundColor="#333333CC";
    q5a3.style.backgroundColor="#333333CC";
    q5a4.style.backgroundColor="#333333CC";
    q5a5.style.backgroundColor="#333333CC";
    q5a6.style.backgroundColor="#333333CC";
    q5a7.style.backgroundColor="#333333CC";
    q5a8.style.backgroundColor="#333333CC";
    q5a9.style.backgroundColor="#333333CC";
    q5a10.style.backgroundColor="#333333CC";
}

function opaqueQ5(){
    q5a1.style.backgroundColor="#333";
    q5a2.style.backgroundColor="#333";
    q5a3.style.backgroundColor="#333";
    q5a4.style.backgroundColor="#333";
    q5a5.style.backgroundColor="#333";
    q5a6.style.backgroundColor="#333";
    q5a7.style.backgroundColor="#333";
    q5a8.style.backgroundColor="#333";
    q5a9.style.backgroundColor="#333";
    q5a10.style.backgroundColor="#333";
}

function q5Buttons(button){
    if (button.style.backgroundColor==="rgb(17,17,17"){
        opaqueQ5();
        button.style.backgroundColor="#333";
    }else{
        transparentQ5();
        button.style.backgroundColor="#111";
        results();
    }
}

q5a1.addEventListener("click",()=> { Luffy++; q5Buttons(q5a1);});
q5a2.addEventListener("click",()=> { Nami++; q5Buttons(q5a2);});
q5a3.addEventListener("click",()=> { Usopp++; q5Buttons(q5a3);});
q5a4.addEventListener("click",()=> { Zoro++; q5Buttons(q5a4);});
q5a5.addEventListener("click",()=> { Sanji++; q5Buttons(q5a5);});
q5a6.addEventListener("click",()=> { Franky++; q5Buttons(q5a6);});
q5a7.addEventListener("click",()=> { Jinbe++; q5Buttons(q5a7);});
q5a8.addEventListener("click",()=> { Robin++; q5Buttons(q5a8);});
q5a9.addEventListener("click",()=> { Chopper++; q5Buttons(q5a9);});
q5a10.addEventListener("click",()=>{ Brook++; q5Buttons(q5a10);});

function results(){
    const findMax= [Luffy, Nami, Usopp, Zoro, Sanji, Franky, Jinbe, Robin, Chopper, Brook];
    const results=["Luffy", "Nami", "Usopp", "Zoro", "Sanji", "Franky", "Jinbe", "Robin", "Chopper","Brook"]
    let max= Math.max(...findMax);
    let i=0;
    for (i; i<findMax.length; i++) {
        if (findMax[i]===max){
            break;
        }
    }
    result.textContent= "You are "+ results[i]; count++;

}