
    var seq = ["red", "blue", "green", "yellow"];
    var seqr= [];
    var btn= [];
    var pu;
    var level=0;
    var bI;
    var started = false;

    function nextSequence(){
        started= true;
        $("#level-title").text("Level: " + level);
        var numra=0;
        var lol;
        numra=Math.floor(Math.random() * 4);
        lol= seq[numra];
        seqr.push(lol);
        $(document).ready(function() {
            $("#" + lol).fadeOut(50).fadeIn(50);
        });
        var audio = new Audio("sounds/" + lol + ".mp3");
            audio.play();
        
        btn=[]
        console.log(seqr);
        
        level++;
      return (seqr);
    }
    
    
    

    function animatePress(){
        $("#" + pu).addClass("pressed");
        setTimeout(function(){
            $("#" + pu).removeClass("pressed");
        }, 100);
        
    }

    function clickHandler(){
        
        bI= $(this).attr("id");
        pu=bI;
        btn.push(bI);
        console.log(bI);
        console.log(btn);
        var audio = new Audio("sounds/"+ pu +".mp3");
        audio.play();
        animatePress();
        checkAnswer(level);
        
        
    }
    $(document).ready(function() {
        $("#red").on("click",clickHandler);
        $("#green").on("click", clickHandler);
        $("#blue").on("click", clickHandler);
        $("#yellow").on("click", clickHandler);
    });
    $(document).keydown(function() {
        if(started == true){

        }else{
            nextSequence();
            console.log(seqr);
        }
    });
            
        
        
    
    function checkAnswer(level) {
        
        for(var i=0;i<btn.length;i++){
            if (btn[i] === seqr[i]){
                console.log("match");
                
                if(btn.toString()===seqr.toString()){
                    console.log("finish");
                    setTimeout(nextSequence, 1000);
                    return; 
                    
                }
            }else{
                console.log("no match");
                var audio = new Audio("./sounds/wrong.mp3");
                audio.play();
                $("body").addClass("game-over");
                setTimeout(function(){
                $("body").removeClass("game-over");
                }, 200);
                seqr=[];
                $("#level-title").text("Game over, Press Any Key to Restart");
                res();
                started= false;
                    }
                    
            }
            
    }
    function res(){
        level=0;
    }
    
