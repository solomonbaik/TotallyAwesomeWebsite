function drawOval(ctx)
{
  ctx.save();
  //var time2 = new Date();
  //ctx.translate(time2.getSeconds(), 0);
  frameNum++;
  frameNum=frameNum%30;
  var translation = 0;
  if (frameNum<16)
  {
    translation=20;
  }
  ctx.translate(translation-75*Math.sin(frameNum/4), 0);


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
  ctx.restore();


  // Call draw when the website is ready
  window.requestAnimationFrame(draw);
}
var frameNum =0;
draw();
