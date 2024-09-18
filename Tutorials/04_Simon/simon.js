
    var seq = ["red", "blue", "green", "yellow"]
    var seqr= []

    function nextSequence(){
        var numra=0;
        var lol;
        numra=Math.floor(Math.random() * 4);
        lol= seq[numra];
        seqr.push(lol);
        return lol;
    }
    console.log(nextSequence());
    console.log(nextSequence());
    console.log(nextSequence());
    console.log(nextSequence());
    console.log(nextSequence());
    console.log(seqr);
    $(document).ready(function() {
        $("#red").on("click", function(){
            var audio = new Audio("sounds/red.mp3");
            audio.play();
            $("#red").fadeOut(50);
            $("#red").fadeIn(50);
        } );

        $("#green").on("click", function(){
            var audio = new Audio("sounds/green.mp3");
            audio.play();
            $("#green").fadeOut(50);
            $("#green").fadeIn(50);
        } );

        $("#blue").on("click", function(){
            var audio = new Audio("sounds/blue.mp3");
            audio.play();
            $("#blue").fadeOut(50);
            $("#blue").fadeIn(50);
        } );

        $("#yellow").on("click", function(){
            var audio = new Audio("sounds/yellow.mp3");
            audio.play();
            $("#yellow").fadeOut(50);
            $("#yellow").fadeIn(50);
        } );
    });
