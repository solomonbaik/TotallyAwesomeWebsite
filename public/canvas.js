function drawPic(ctx)
{
  ctx.save();
  //var time2 = new Date();
  //ctx.translate(time2.getSeconds(), 0);
  frameNum++;
  frameNum=frameNum%30;
  var translation = 0;
  if (frameNum<16)
  {
    translation=75
  }
  ctx.translate(translation-3*frameNum, translation+frameNum);


  //drawing oval

  ctx.beginPath();
  ctx.moveTo(200,200);
  ctx.quadraticCurveTo(160,250,200,300);
  ctx.quadraticCurveTo(240,250,200,200);

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
  ctx.lineWidth = 10;
  ctx.translate(100, 100);
  drawPic(ctx);
  ctx.restore();


  // Call draw when the website is ready
  window.requestAnimationFrame(draw);
}
var frameNum =0;
draw();
