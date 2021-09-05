let {log}  = console

let xPosMouse
let yPosMouse
let fontLoad = document.querySelector('#floating-menu[data-v-ebbacb64]')
let gridType = document.querySelector('.setGrid')
    
// @param initialize main function of draw canvas



//@ts-check ? = false
function initSketchpad() {
    "use strict";
    var sketchpadEl = document.getElementById("sketchpad");
    var sketchpad = new Sketchpad({
        containerEl: sketchpadEl,
        features: {
            displayCrosshair: false,
            displayGrid: false
        },
        createPageConfig: {
            no: 3,
            backgroundColor: "rgba(222,222,0, 0)"
        }
    });

   gridType.addEventListener('change', (e) =>{
    console.log('clicked')   
     
    sketchpad.showGrid()
   }
   )

    
    window.sketchpad = sketchpad;



    /**
     * Changes current tool
     * @param  {string} toolId  - tool id
     */
    function selectTool(toolId) {
        console.log("selectTool", toolId);
        sketchpad.setTool(toolId);
        if(toolId === 'type'){
            fontLoad.style.display = 'block'
        }else{
            fontLoad.style.display = 'none'
        }
        document.querySelectorAll(".toolbar .button").forEach(function (el) {
            el.classList.remove("active");
        });
        document.getElementById("tool-" + toolId).classList.add("active");

        document.getElementById("size").style.display = "none";
      

        var tool = sketchpad.getCurrentTool();

        document.getElementById("toolName").innerHTML = tool.toolLabel || "Undefined";
        /**
         * set toolbar for tool
         */

        if (typeof tool.getColor === "function") {
           
        }

        if (typeof tool.getFillColor === "function") {
           
        }

        if (typeof tool.getSize === "function") {
            var size = tool.getSize();
            document.getElementById("size-slider").value = size;
        }

        switch (toolId) {
        case "pen":
           
            document.getElementById("size").style.display = "block";
            break;
        case "highlighter":
             
            document.getElementById("size").style.display = "block";

            break;
        case "eraser":
            break;
        case "rectangle":
            
            document.getElementById("size").style.display = "block";
            break;
        case "circle":
             
            document.getElementById("size").style.display = "block";
            break;
        case "line":
           
            document.getElementById("size").style.display = "block";
            break;
        }
    }

    selectTool("pen");

    document.getElementById("size-slider").addEventListener("change", function (e) {
        if (typeof sketchpad.getCurrentTool().setSize === "function") {
            sketchpad.getCurrentTool().setSize(e.target.value);
        }
    });

    //save
   

    /**
     * Load sketch from json
     */
     document.getElementById('tool-save').addEventListener("click", function () {
        console.log(this)
        console.log(sketchpad.canvas.toDataURL)
        this.setAttribute("href", sketchpad.canvas.toDataURL());
        this.download = 'picture.png';
  }
     )

    

    //screenshot
     

    //pen
    document.getElementById('tool-pen').addEventListener("click", function () {
        selectTool("pen");
    });

    // marker
    document.getElementById('tool-highlighter').addEventListener("click", function () {
        selectTool("highlighter");
    });


    

   
    document.getElementById('tool-type').addEventListener("click", function (e) {
        
        selectTool("type");
    }, false);

    //eraser
    document.getElementById('tool-eraser').addEventListener("click", function () {
        selectTool("eraser");
    });


    //cutout
    document.getElementById('tool-cutout').addEventListener("click", function () {
        selectTool("cutout");
    });

    document.getElementById('tool-rectangle').addEventListener("click", function () {
        selectTool("rectangle");
    });

    document.getElementById('tool-line').addEventListener("click", function () {
        selectTool("line");
    });

    document.getElementById('tool-circle').addEventListener("click", function () {
        selectTool("circle");
    });

    document.getElementById('tool-rainbow').addEventListener("click", function () {
        selectTool("rainbow");
    });

    document.getElementById('tool-move-viewport').addEventListener("click", function () {
        selectTool("move-viewport");
    });

    document.getElementById('tool-rotate-viewport').addEventListener("click", function () {
        selectTool("rotate-viewport");
    });

    document.getElementById('tool-zoom-in').addEventListener("click", function () {
        sketchpad.setScale(sketchpad.scale * 2);
    });
     
    document.getElementById('tool-zoom-out').addEventListener("click", function () {
        sketchpad.setScale(sketchpad.scale / 2);
    });

    document.getElementById('reset').addEventListener("click", function () {
        sketchpad.reset();
    });

    document.getElementById('tool-undo').addEventListener("click", function () {
        sketchpad.undo();
    });
    document.getElementById('tool-redo').addEventListener("click", function () {
        sketchpad.redo();
    });

}
initSketchpad();