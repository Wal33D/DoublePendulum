(function(){
    var c = $("#canvas"), 
        ctx = c[0].getContext('2d');

    var draw = function(){
        ctx.fillStyle = "#000";
        ctx.fillRect(10,10,50,50);   
    };

    $(function(){
        // set width and height
         ctx.canvas.height = 600;
         ctx.canvas.width = 600;
        // draw
        draw();

        // wait 2 seconds, repeate same process
        setTimeout(function(){
            ctx.canvas.height = 400;
            ctx.canvas.width = 400;
            draw();
        }, 2000)
    });
})();