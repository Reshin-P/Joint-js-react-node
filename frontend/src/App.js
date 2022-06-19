import { useEffect } from 'react';
import {dia,shapes} from 'jointjs'
import $ from 'jquery'
import {Row,Col} from 'react-bootstrap'
import { atomicShape, circleShape, EllipseShape, imageShape, rectangleShape, rhombusShape } from './Shapes.js';

import './App.css'
function App() {
  useEffect(()=>{
// Canvas where sape are dropped
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

  </Col>
</Row>
</div>
  );
}

export default App;
