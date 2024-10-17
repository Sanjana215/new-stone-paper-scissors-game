let choices=document.querySelectorAll(".choice");
let user_choice;
let compu_choice;
let choice_arr=["paper","rock","scissors"];
let user_score=document.querySelector("#user-score");
let compu_score=document.querySelector("#compu-score");
let result_text=document.querySelector("#game-result");
let announcer=document.querySelector(".announce");
let button=document.querySelector(".buttons");
let new_button=document.querySelector(".new-button");

showresult=()=>{
    user_s=parseInt(user_score.innerText,10);
    compu_s=parseInt(compu_score.innerText,10);
    announcer.classList.remove("hidden");
    new_button.classList.remove("hidden");
    
        if(user_s>compu_s)
        {
            announcer.innerText="Congragulations! User is the Winner";
        }
        else if(compu_s>user_s)
        {
            announcer.innerText="Bad Luck! Computer is the Winner";
        }
        else{
            announcer.innerText="The Game is a tie";
        }
        
}

restart=()=>{
    user_score.innerText=0;
    compu_score.innerText=0;
    announcer.classList.add("hidden");
    new_button.classList.add("hidden");
}

decide_result=(user_choice,compu_choice)=>{
    if(user_choice===compu_choice)
    {
          result_text.innerText=`Both chose ${compu_choice}`;
    }
    else if(user_choice==="rock" && compu_choice=="paper")
    {
        let score=parseInt(compu_score.innerText,10);
        compu_score.innerText=score+1;
        result_text.innerText="Computer chose Paper"
    }
    else if(user_choice==="paper" && compu_choice=="rock")
    {
        let score=parseInt(user_score.innerText,10);
        user_score.innerText=score+1;
        result_text.innerText="Computer chose Rock"
    }

    else if(user_choice==="rock" && compu_choice=="scissors")
    {
        let score=parseInt(user_score.innerText,10);
        user_score.innerText=score+1;
        result_text.innerText="Computer chose Scissors"
    }
    else if(user_choice==="scissors" && compu_choice=="rock")
    {
        let score=parseInt(compu_score.innerText,10);
        compu_score.innerText=score+1;
        result_text.innerText="Computer chose Rock"
    }

    else if(user_choice==="scissors" && compu_choice=="paper")
    {
        let score=parseInt(user_score.innerText,10);
        user_score.innerText=score+1;
        result_text.innerText="computer chose Paper"
    }
    else if(user_choice==="paper" && compu_choice=="scissors")
    {
        let score=parseInt(compu_score.innerText,10);
        compu_score.innerText=score+1;  
        result_text.innerText="Computer chose Scissors"
    }
}
gen_comp=(user_choice)=>{
    let index=Math.floor(Math.random()*3);
    compu_choice=choice_arr[index];
    decide_result(user_choice,compu_choice);
}
for(let choice of choices )
{
    choice.addEventListener("click",()=>{
        user_choice=choice.getAttribute("id");
        gen_comp(user_choice);
    })
}
button.addEventListener("click",showresult);
new_button.addEventListener("click",restart);

