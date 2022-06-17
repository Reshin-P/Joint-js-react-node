import { dia, shapes } from 'jointjs';
import $ from 'jquery';
import { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { atomicShape, circleShape, EllipseShape, imageShape, rectangleShape, rhombusShape } from './Shapes.js';
import axios from './util/axiosConfig.js'
import './App.css';

function App() {

  // GRAPH STATES 3
  const [stencilGraph, setStencilGraph] = useState(new dia.Graph({}, { cellNamespace: shapes }))
  const [flyGraph, setFlyGraph] = useState(new dia.Graph({}, { cellNamespace: shapes }))
  const [graph1, setGraph] = useState(new dia.Graph({}, { cellNamespace: shapes }))

  // PAPER STATES 3
  const [stencilPaper, setStencilPaper] = useState()
  const [paper, setPaper] = useState()
  const [flyPaper, setFlyPaper] = useState()
  const [fullArea, setFullArea] = useState()
  const [flyshape, setFlay] = useState()
  let count = 0




  // GET SAVED GRAPH SETTINGS FROM BACKEND
  // useEffect(() => {

  //   const getdata = async () => {
  //     let { data } = await axios.get('/user')
  //     console.log("data",data);
  //     if (data) {
  //       data=JSON.parse(data)
  //       console.log("after",data);
  //       graph1.fromJSON(data)
  //       let datas = new dia.Paper({
  //         el: drawArea2.current,
  //         width: 1500,
  //         height: 700,
  //         model: graph1,
  //         cellViewNamespace: shapes 
  //       });
  //       setPaper(datas)
  //     } else {
  //       console.log(graph1);
  //       let datas = new dia.Paper({
  //         el: drawArea2.current,
  //         width: 1500,
  //         height: 700,
  //         model: graph1,
  //         cellViewNamespace: shapes 
  //       });
  //       setPaper(datas)
  //       console.log(paper);
  //     }
  //   }
  //   getdata()
  // }, [drawArea2])

  //------------------------------------------------------------------->>


  //USEEFFECT FOR SETTING SHAPES MODELS
  useEffect(() => {
    console.log("useeEffect");
    const getdata = async () => {
      let { data } = await axios.get('/user')

      if (data) {
        data = JSON.parse(data)
        graph1.fromJSON(data)
      }

      // Canvas from which you take shapes
      setStencilPaper(new dia.Paper({
        el: $('#drawArea1'),
        model: stencilGraph,
        cellViewNamespace: shapes
      }))

      // Canvas where sape are dropped
      setPaper(new dia.Paper({
        el: $('#drawArea2'),
        model: graph1,
        cellViewNamespace: shapes
      }))

      stencilGraph.addCells([rectangleShape, circleShape, rhombusShape, EllipseShape, imageShape, atomicShape]);

    }
    getdata();


  }, [])

  //------------------------------------------------------------------->>

  // GRAPH CHANGE POSITION  EVENT FOR SENDING DATA TO BACKEND
  graph1.on('change:position', async function (cell) {

    // graph1.set('graphCustomProperty', true);
    // graph1.set('graphExportTime', Date.now());
    let jsonObject = graph1.toJSON();
    let jsonString = JSON.stringify(jsonObject)

    // const { data } = await axios.post('/user', {data:jsonString})

  });


  // STENCILPAPER POINTER EVENT 
  if (stencilPaper) {
    stencilPaper.on('cell:pointerup', function (cellView, e, x, y) {

      $('#flyPaper').remove();
    })
    stencilPaper.on('cell:pointerdown', function (cellView, e, x, y) {


      $('body').append('<div id="flyPaper" style="position:fixed;z-index:100;pointer-event:none;background-color: rgb(146, 172, 32);"></div>');

      setFlyPaper(new dia.Paper({
        el: $('#flyPaper'),
        model: flyGraph,
        interactive: false
      }))


      let flyShape = cellView.model.clone()

      let pos = cellView.model.position()

      let offset = {
        x: x - pos.x,
        y: y - pos.y
      };


      flyShape.position(0, 0);
      flyGraph.addCell(flyShape)
      $("#flyPaper").offset({
        left: e.pageX - offset.x,
        top: e.pageY - offset.y
      });


      $('body').on('mousemove.fly', function (e) {
        $("#flyPaper").offset({
          left: e.pageX - offset.x,
          top: e.pageY - offset.y
        });
      });
      $('body').on('mouseup.fly', function (e) {
        var x = e.pageX,
          y = e.pageY,
          target = paper.$el.offset()



        // Dropped over paper ?

        if (x > target.left && x < target.left + paper.$el.width() && y > target.top && y < target.top + paper.$el.height()) {
          var s = flyShape.clone();
          s.position(x - target.left - offset.x, y - target.top - offset.y);
          graph1.addCell(s);
        }

        $('body').off('mousemove.fly').off('mouseup.fly');
        flyShape.remove()
        $('#flyPaper').remove();




      });
    });
  }
  //--------------------------------------------------------------------->

  const insertRectangle = () => {
  }
  return (
    <div id='body' className='main-div'>

      <Row className='main-row'>

        <Col className='col1' sm={12} md={12} lg={2} xl={2} >
          <div id='drawArea1'  ></div>

        </Col>
        <Col style={{ backgroundColor: 'white' }} className='col2' sm={12} md={10} lg={10} xl={10} >

          <div id='drawArea2'></div>
        </Col>
      </Row>

    </div>
  );
}

export default App;
