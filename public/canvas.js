function drawOval(ctx)
{
  ctx.save();
  frameNum++;
  frameNum=frameNum%30;
  var translation = 0;
  if (frameNum<16)
  {
    translation=40;
  }
  ctx.translate(translation-75*(Math.sin(frameNum/5)), 0);

  //drawing oval
  var xTrans = 150;
  var yTrans = 200;
  ctx.beginPath();
  ctx.moveTo(xTrans,yTrans);
  ctx.quadraticCurveTo(xTrans-40,yTrans+50,xTrans,yTrans+100);
  ctx.quadraticCurveTo(xTrans+40,yTrans+50,xTrans,yTrans);

  ctx.stroke();
  ctx.restore();
}

function drawBigCircle(ctx)
{
  ctx.moveTo(185,240);
  ctx.save();
  var time2 = new Date();

  //drawing circle
  ctx.arc(185,240,150,(time2.getMilliseconds()/100)%(Math.PI*2),(time2.getMilliseconds()/170)%(Math.PI*2)+2);
  ctx.stroke();
  ctx.restore();
}

function draw() {
  var ctx = document.getElementById('drawing').getContext('2d');
  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 900, 700); // clear canvas

  // Figure out what pen we wanna draw with
  ctx.fillStyle = 'rgba(0, 153, 255, 5)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 3)';

  ctx.save();
  ctx.lineWidth = 4;
  ctx.translate(100, 100);
  drawOval(ctx);
  drawBigCircle(ctx);
  ctx.restore();


  // Call draw when the website is ready
  window.requestAnimationFrame(draw);
}
var frameNum =0;
draw();
