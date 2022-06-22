import express from "express";
const router = express.Router()
let data='{"cells":[{"type":"devs.Coupled","size":{"width":130,"height":90},"inPorts":[],"outPorts":[],"ports":{"groups":{"in":{"position":{"name":"left"},"attrs":{".port-label":{"fill":"#000"},".port-body":{"fill":"#fff","stroke":"#000","r":10,"magnet":true}},"label":{"position":{"name":"left","args":{"y":10}}}},"out":{"position":{"name":"right"},"attrs":{".port-label":{"fill":"#000"},".port-body":{"fill":"#fff","stroke":"#000","r":10,"magnet":true}},"label":{"position":{"name":"right","args":{"y":10}}}}},"items":[]},"position":{"x":155,"y":348},"angle":0,"id":"52611693-b300-44b1-9551-559dd31cabc0","z":5,"attrs":{"text":{"text":"Test"}}}]}'
router.route('/').get((req, res) => {
  
 
    res.json(data)
})

router.route('/').post((req, res) => {
    console.log("posted");
    console.log(req.body);
    res.json({message:"sucessfull"})

})







export default router