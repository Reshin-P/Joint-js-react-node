import express from "express";
const router = express.Router()
let data ='{"cells":[{"type":"standard.Rectangle","attrs":{"body":{"refWidth":"100%","refHeight":"100%","strokeWidth":2,"stroke":"#000000","fill":"#FFFFFF"},"label":{"textVerticalAnchor":"middle","textAnchor":"middle","refX":"50%","refY":"50%","fontSize":14,"fill":"#333333"},"text":{"text":"Output redering","y":0}},"position":{"x":131,"y":123},"size":{"width":130,"height":150},"angle":0,"id":"05a7851a-dc6f-4817-8b1c-4d7a4869aef3","ports":{"items":[{"label":{"position":{"name":"right"},"markup":[{"tagName":"text","selector":"label"}]},"attrs":{"portBody":{"magnet":true,"width":6,"height":6,"x":130,"y":-5,"fill":"black"}},"markup":[{"tagName":"rect","selector":"portBody"}],"id":"ee1a685b-0d13-4fb0-8ae3-f517cd2d875c"},{"label":{"position":{"name":"right"},"markup":[{"tagName":"text","selector":"label"}]},"attrs":{"portBody":{"magnet":true,"width":6,"height":6,"x":130,"y":0,"fill":"black"}},"markup":[{"tagName":"rect","selector":"portBody"}],"id":"5ea17f5e-a4d2-4ffc-ba34-280eba0028e8"},{"label":{"position":{"name":"right"},"markup":[{"tagName":"text","selector":"label"}]},"attrs":{"portBody":{"magnet":true,"width":6,"height":6,"x":130,"y":10,"fill":"black"}},"markup":[{"tagName":"rect","selector":"portBody"}],"id":"67895776-0e85-45fd-8498-985590184b42"},{"label":{"position":{"name":"right"},"markup":[{"tagName":"text","selector":"label"}]},"attrs":{"portBody":{"magnet":true,"width":6,"height":6,"x":130,"y":19,"fill":"black"}},"markup":[{"tagName":"rect","selector":"portBody"}],"id":"1798a2c9-c6f0-4c1d-bdb2-3e6dffffbb3f"},{"label":{"position":{"name":"right"},"markup":[{"tagName":"text","selector":"label"}]},"attrs":{"portBody":{"magnet":true,"width":6,"height":6,"x":-5,"y":-45,"fill":"black"}},"markup":[{"tagName":"rect","selector":"portBody"}],"id":"fcd146bc-8204-4823-9f16-131f245f4cdb"},{"label":{"position":{"name":"right"},"markup":[{"tagName":"text","selector":"label"}]},"attrs":{"portBody":{"magnet":true,"width":6,"height":6,"x":130,"y":1,"fill":"black"}},"markup":[{"tagName":"rect","selector":"portBody"}],"id":"c081db36-318c-4926-be82-2fb4f89e2bb5"}]},"z":6},{"type":"basic.Rect","attrs":{"rect":{"fill":"#ffffff","stroke":"#000000","width":100,"height":60},"text":{"fill":"#000000","text":"Rectangle","font-size":14,"ref-x":0.5,"ref-y":0.5,"text-anchor":"middle","y-alignment":"middle","font-family":"Arial, helvetica, sans-serif"},".":{"fill":"#ffffff","stroke":"none"}},"position":{"x":378,"y":76},"size":{"width":130,"height":90},"angle":0,"inPorts":[""],"outPorts":["",""],"id":"ebc8ce09-3629-49a0-9e69-fb1233bf552a","z":1}]}'
router.route('/').get((req, res) => {
  
 
    res.json(data)
})

router.route('/').post((req, res) => {
    console.log("posted");
    console.log(req.body);
    res.json({message:"sucessfull"})

})







export default router