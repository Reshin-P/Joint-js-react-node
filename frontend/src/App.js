import { dia,  } from 'jointjs';
import $ from 'jquery';
import { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { atomicShape, circleShape, EllipseShape, imageShape, rectangleShape, rhombusShape } from './Shapes.js';
import axios from './util/axiosConfig.js'
import './App.css';

function App() {
const myholder=useRef()



  

  useEffect(()=>{
    
    var canvas = $('#canvas');
    const graph = new dia.Graph();

    const paper = new dia.Paper({
        el: myholder.current,
        model: graph,
        width: canvas.outerWidth(),
        height: canvas.outerHeight(),
        gridSize: 20,
        drawGrid: true,
        background: {
            color: "#fff"
        }
    });

    var stencilGraph = new dia.Graph( ),
    stencilPaper = new dia.Paper({
        el: $('#stencil'),
        height: 1000,
        model: stencilGraph,
        interactive: false
    });
    stencilGraph.addCells([rectangleShape, circleShape, rhombusShape, EllipseShape, imageShape, atomicShape]);

    //STENCIL-PAPER POINER EVENT

    stencilPaper.on('cell:pointerdown', function(cellView, e, x, y) {
      $('body').append('<div id="flyPaper" style="position:fixed;z-index:100;opacity:.7;pointer-event:none;"></div>');
      var flyGraph = new dia.Graph(),
        flyPaper = new dia.Paper({
          el: $('#flyPaper'),
          model: flyGraph,
          interactive: false,
          width: 120,
          height:160
        }),
        flyShape = cellView.model.clone(),
        pos = cellView.model.position(),
        offset = {
          x: x - pos.x,
          y: y - pos.y
        };
    
      flyShape.position(0, 0);

      flyShape.size({
          width: 120,
          height: 160
      })
      
      flyShape.attr({image:{
          width: 120,
          height: 160
      },
      '.label': {
          y: -20,
      }})
      
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
        console.log("ddddd");
        // Dropped over paper ?
        if (x > target.left && x < target.left + paper.$el.width() && y > target.top && y < target.top + paper.$el.height()) {
          console.log("hiiii");
          var s = flyShape.clone();
          s.position(x - target.left - offset.x, y - target.top - offset.y);
          graph.addCell(s);
        }
        $('body').off('mousemove.fly').off('mouseup.fly');
        flyShape.remove();
        $('#flyPaper').remove();
      });
  });
  //------------------------->>


  },[])

  //------------------------------------------------------------------->>

  return (
    <div id='body' className='main-div'>

      <Row className='main-row'>

        <Col className='col1' sm={12} md={12} lg={2} xl={2} >
          <div id='stencil'  ></div>

        </Col>
        <Col id='canvas' style={{ backgroundColor: 'white' }} className='col2' sm={12} md={10} lg={10} xl={10} >

          <div className='myholder'  ref={myholder}></div>
        </Col>
      </Row>

    </div>
  );
}

export default App;
