(function () {

    var canvas = document.getElementById('canv');
    var ctx = canvas.getContext('2d');

    for (var i = 0; i < 500 - (25 + i * 20); i++) {
        ctx.beginPath();
        ctx.moveTo(30, 25 + i * 20);
        ctx.lineTo(470, 25 + i * 20);
        ctx.strokeStyle = 'lightGray';
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    for (var i = 0; i < 500 - (40 + i * 20); i++) {
        ctx.beginPath();
        ctx.moveTo(40 + i * 20, 20);
        ctx.lineTo(40 + i * 20, 480);
        ctx.strokeStyle = 'lightGray';
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    ctx.beginPath();
    ctx.moveTo(40, 25);
    ctx.lineTo(40, 465);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(39, 464);
    ctx.lineTo(460, 464);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.stroke();

    var arr = [100, 60, 180, 100, 300, 200, 40, 60, 20];
    var arr2 = ["orange", "yellow", "blue", "red", "green", "orange", "yellow", "blue", "red", "green"];
    for (var i = 0; i < 200 - (i * 20); i++) {
        ctx.fillStyle = arr2[i];
        ctx.fillRect((60 + i * 40), 463, 20, -arr[i]);
    }

    // circle charts

    var canvas2 = document.getElementById('canv2');
    var ctx2 = canvas2.getContext('2d');
    var i = 70;
    
    ctx2.beginPath();
    ctx2.arc(150, 250, 100, 0, 2 * Math.PI);
    ctx2.strokeStyle = 'lightGrey';
    ctx2.lineWidth = 10;
    ctx2.stroke();

    ctx2.beginPath();
    ctx2.arc(150, 250, 100, 0, Math.PI /180 * 3.6*i );
    ctx2.strokeStyle = 'blue';
    ctx2.lineWidth = 10;
    ctx2.stroke();

    // var x=30;
    // ctx2.beginPath();
    // ctx2.arc(250, 250, 100, 10, Math.PI /180 * 3.6*x );
    // ctx2.strokeStyle = 'lightblue';
    // ctx2.lineWidth = 11;
    // ctx2.stroke();

    ctx2.beginPath();
    ctx2.font = "30px Arial";
    ctx2.fillText( i+"%" , 125, 260);

    // third charts

    var canvas3 = document.getElementById('canv3');
    var ctx3 = canvas3.getContext('2d');

    for (var i = 0; i < 500 - (25 + i * 20); i++) {
        ctx3.beginPath();
        ctx3.moveTo(30, 25 + i * 20);
        ctx3.lineTo(470, 25 + i * 20);
        ctx3.strokeStyle = 'lightGray';
        ctx3.lineWidth = 1;
        ctx3.stroke();
    }

    for (var i = 0; i < 500 - (40 + i * 20); i++) {
        ctx3.beginPath();
        ctx3.moveTo(40 + i * 20, 20);
        ctx3.lineTo(40 + i * 20, 480);
        ctx3.strokeStyle = 'lightGray';
        ctx3.lineWidth = 1;
        ctx3.stroke();
    }

    ctx3.beginPath();
    ctx3.moveTo(40, 25);
    ctx3.lineTo(40, 465);
    ctx3.strokeStyle = 'black';
    ctx3.lineWidth = 3;
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(39, 464);
    ctx3.lineTo(460, 464);
    ctx3.strokeStyle = 'black';
    ctx3.lineWidth = 3;
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.arc(135, 325, 7, 0, 2 * Math.PI);
    ctx3.fillStyle = 'orange';
    ctx3.fill();

    ctx3.beginPath();
    ctx3.arc(160, 400, 7, 0, 2 * Math.PI);
    ctx3.fillStyle = 'orange';
    ctx3.fill();
    
    ctx3.beginPath();
    ctx3.arc(200, 205, 7, 0, 2 * Math.PI);
    ctx3.fillStyle = 'orange';
    ctx3.fill();

        
    ctx3.beginPath();
    ctx3.arc(300, 305, 7, 0, 2 * Math.PI);
    ctx3.fillStyle = 'orange';
    ctx3.fill();

    ctx3.beginPath();
    ctx3.moveTo(80 , 462)
    ctx3.lineTo(135 , 325)
    ctx3.lineTo(160 , 400)
    ctx3.lineTo(200 , 205)
    ctx3.lineTo(300 , 305)
    ctx3.strokeStyle = 'orange';
    ctx3.lineWidth = 3;
    ctx3.stroke();
   
})()
