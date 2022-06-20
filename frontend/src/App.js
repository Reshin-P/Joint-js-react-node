import { useEffect, useState } from 'react';
import {dia,shapes,elementTools} from 'jointjs'
import $ from 'jquery'
import {Row,Col,Form, Button} from 'react-bootstrap'
import { atomicShape, circleShape, EllipseShape, imageShape, rectangleShape, rhombusShape } from './Shapes.js';

import './App.css'
function App() {

  const [sizeChange,setSizeChange]=useState(false)
  const [element,setElement]=useState(null)
  const [selectWidth,SetSelectWidth]=useState(null)
  const [selectHeight,SetSelectHeight]=useState(null)
console.log("width",selectWidth);
console.log("height",selectHeight);


const handleElementSize=(Swidth,SHeitht)=>{
console.log(";;;",selectWidth);
 if(!selectWidth){
 SetSelectWidth(element.model.prop('size/width'))
  console.log("off",selectWidth);
 }
 if(!selectHeight){
  SetSelectHeight(element.model.prop('size/height'))
   console.log("off",selectHeight);
  }
  element.model.resize(selectWidth,selectHeight)
  SetSelectWidth(null)
  SetSelectHeight(null)
      }


  useEffect(()=>{
// Canvas where sape are dropped

var boundaryTool = new elementTools.Boundary();
var removeButton = new elementTools.Remove();

var toolsView = new dia.ToolsView({
    tools: [
        boundaryTool,
        removeButton
    ]
});
var graph = new dia.Graph,
  paper = new dia.Paper({
    el: $('#paper'),
    model: graph
  });

// Canvas from which you take shapes
var stencilGraph = new dia.Graph,
  stencilPaper = new dia.Paper({
    el: $('#stencil'),
    model: stencilGraph,
    interactive: false
  });


  stencilGraph.addCells([rectangleShape, circleShape, rhombusShape, EllipseShape, imageShape, atomicShape]);
  paper.on('cell:pointerdown', function(cellView, e, x, y) {
    cellView.addTools(toolsView)
    setSizeChange(true)
    // console.log(x,"/////");
  
    setElement(cellView)
  })
  // paper.on('cell:pointerup', function(cellView, e, x, y) {
  //   setSizeChange(false)
  //   cellView.unhighlight()
  //   cellView.hideTools();
  // })

  
  
 
stencilPaper.on('cell:pointerdown', function(cellView, e, x, y) {
  $('body').append('<div id="flyPaper" style="position:fixed;z-index:100;opacity:.7;pointer-event:none;"></div>');
  var flyGraph = new dia.Graph,
    flyPaper = new dia.Paper({
      el: $('#flyPaper'),
      model: flyGraph,
      interactive: false
    }),
    flyShape = cellView.model.clone(),
    pos = cellView.model.position(),
    offset = {
      x: x - pos.x,
      y: y - pos.y
    };
    

  flyShape.position(0, 0);
  flyGraph.addCell(flyShape);
  $("#flyPaper").offset({
    left: e.pageX - offset.x,
    top: e.pageY - offset.y
  });
 
  $('body').on('mousemove.fly', function(e) {
    $("#flyPaper").offset({
      left: e.pageX - offset.x,
      top: e.pageY - offset.y
    });
  });
  $('body').on('mouseup.fly', function(e) {
    var x = e.pageX,
      y = e.pageY,
      target = paper.$el.offset();
    
    // Dropped over paper ?

    if (x > target.left && x < target.left + paper.$el.width() && y > target.top && y < target.top + paper.$el.height()) {
      var s = flyShape.clone();
      s.position(x - target.left - offset.x, y - target.top - offset.y);
      graph.addCell(s);
    }
    $('body').off('mousemove.fly').off('mouseup.fly');
    flyShape.remove();
    $('#flyPaper').remove();
  });
});
  },[])
  return (
//    <div className='main'>
//  <div className='stencil' id="stencil">
  
//  </div>
// <div id="paper"></div>
//    </div>

<div className='main-div'>

<Row className='main-row'>

  <Col className='col1' sm={12} md={12} lg={2} xl={2} >

  <div  id="stencil"></div>

  </Col>
  <Col id='canvas' className='col2' sm={12} md={8} lg={8} xl={8} >
    
  <div id="paper"></div>
 
  </Col>
  <Col className='col3' sm={12} md={12} lg={2} xl={2} >
  <div  className='div3'></div>
{sizeChange&&<div className='size'>
<Form.Select className='size-select' onChange={(e)=>{
  SetSelectWidth(e.target.value)
  console.log(e.target.value);
}} aria-label="Default select example">
  <option>Width</option>
  <option  value="50">50</option>
  <option value="100">100</option>
  <option  value="150">150</option>
  <option value="200">200</option>
  <option  value="250">250</option>
  <option value="300">300</option>
  <option  value="350">350</option>
  <option  value="400">400</option>
  <option  value="450">450</option>
  <option  value="500">500</option>

</Form.Select>
<Form.Select className='size-select' onChange={(e)=>{
  SetSelectHeight(e.target.value)
  console.log(e.target.value);
}} aria-label="Default select example">
  <option>Height</option>
  <option  value="50">50</option>
  <option value="100">100</option>
  <option  value="150">150</option>
  <option value="200">200</option>
  <option  value="250">250</option>
  <option value="300">300</option>
  <option  value="350">350</option>
  <option  value="400">400</option>
  <option  value="450">450</option>
  <option  value="500">500</option>

</Form.Select>
<button onClick={  handleElementSize}>OK</button>

</div>}
  </Col>
</Row>
</div>
  );
}

export default App;
