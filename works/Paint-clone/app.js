const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');
const saveBtn = document.getElementById('jsSave')

const initial_color = '#2c2c2c';
const canvas_size = 700;


canvas.height = canvas_size;
canvas.width = canvas_size;


ctx.fillStyle = 'white';
ctx.fillRect(0,0,canvas_size,canvas_size);


ctx.lineWidth = 2.5;
ctx.strokeStyle = 'initial_color'; 
ctx.fillStyle = 'initial_color';




let painting = false;
let filling = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}


function onMouseMove(event){
    x = event.offsetX;
    y = event.offsetY;
    if (!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else{
      ctx.lineTo(x,y);  
      ctx.stroke();
    }
}

function onMouseDown(event){
    painting = true;
}

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}


function handleRangeChange(event){
    const rangeValue =  event.target.value;
    ctx.lineWidth = rangeValue;
}


function handleModeClick(){
    if(filling === true){
        filling = false;
        mode.innerText = 'Draw';
    }
    else{
        filling = true;
        mode.innerText = 'Fill';
    }
}


function handleCanvasClick(){
    if(filling){
        ctx.fillRect(0,0,canvas_size,canvas_size);
    }

}

function handleCm(event){
    event.preventDefault();
}

function handleSaveClick(){
    const image = canvas.toDataURL('');
    const link = document.createElement('a');
    link.href = image;
    link.download = "PaintJS [Export]";
    link.click();
}

if(canvas){
    canvas.addEventListener('mousemove',onMouseMove);
    canvas.addEventListener('mousedown',onMouseDown);
    canvas.addEventListener('mouseup',stopPainting);
    canvas.addEventListener('mouseleave',stopPainting);
    canvas.addEventListener('click',handleCanvasClick);
    canvas.addEventListener('contextmenu',handleCm);
}


Array.from(colors).forEach(color => color.addEventListener('click',handleColorClick));

if (range){
    range.addEventListener('input',handleRangeChange);
}



if(mode){
    mode.addEventListener('click',handleModeClick)
}

if(saveBtn){
    saveBtn.addEventListener('click',handleSaveClick)
}