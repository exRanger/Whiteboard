let xPosMouse,yPosMouse,{log:log}=console,fontLoad=document.querySelector("#floating-menu[data-v-ebbacb64]"),gridType=document.querySelector(".setGrid");function initSketchpad(){"use strict";var e=document.getElementById("sketchpad"),t=new Sketchpad({containerEl:e,features:{displayCrosshair:!1,displayGrid:!1},createPageConfig:{no:3,backgroundColor:"rgba(222,222,0, 0)"}});function n(e){console.log("selectTool",e),t.setTool(e),fontLoad.style.display="type"===e?"block":"none",document.querySelectorAll(".toolbar .button").forEach(function(e){e.classList.remove("active")}),document.getElementById("tool-"+e).classList.add("active"),document.getElementById("size").style.display="none";var n=t.getCurrentTool();if(document.getElementById("toolName").innerHTML=n.toolLabel||"Undefined",n.getColor,n.getFillColor,"function"==typeof n.getSize){var o=n.getSize();document.getElementById("size-slider").value=o}switch(e){case"pen":case"highlighter":document.getElementById("size").style.display="block";break;case"eraser":break;case"rectangle":case"circle":case"line":document.getElementById("size").style.display="block"}}gridType.addEventListener("change",e=>{console.log("clicked"),t.showGrid()}),window.sketchpad=t,n("pen"),document.getElementById("size-slider").addEventListener("change",function(e){"function"==typeof t.getCurrentTool().setSize&&t.getCurrentTool().setSize(e.target.value)}),document.getElementById("tool-save").addEventListener("click",function(){console.log(this),console.log(t.canvas.toDataURL),this.setAttribute("href",t.canvas.toDataURL()),this.download="picture.png"}),document.getElementById("tool-pen").addEventListener("click",function(){n("pen")}),document.getElementById("tool-highlighter").addEventListener("click",function(){n("highlighter")}),document.getElementById("tool-type").addEventListener("click",function(e){n("type")},!1),document.getElementById("tool-eraser").addEventListener("click",function(){n("eraser")}),document.getElementById("tool-cutout").addEventListener("click",function(){n("cutout")}),document.getElementById("tool-rectangle").addEventListener("click",function(){n("rectangle")}),document.getElementById("tool-line").addEventListener("click",function(){n("line")}),document.getElementById("tool-circle").addEventListener("click",function(){n("circle")}),document.getElementById("tool-rainbow").addEventListener("click",function(){n("rainbow")}),document.getElementById("tool-move-viewport").addEventListener("click",function(){n("move-viewport")}),document.getElementById("tool-rotate-viewport").addEventListener("click",function(){n("rotate-viewport")}),document.getElementById("tool-zoom-in").addEventListener("click",function(){t.setScale(2*t.scale)}),document.getElementById("tool-zoom-out").addEventListener("click",function(){t.setScale(t.scale/2)}),document.getElementById("reset").addEventListener("click",function(){t.reset()}),document.getElementById("tool-undo").addEventListener("click",function(){t.undo()}),document.getElementById("tool-redo").addEventListener("click",function(){t.redo()})}initSketchpad();
