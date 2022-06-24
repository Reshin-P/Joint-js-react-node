import express from "express";
const router = express.Router()
let data='{"cells":[{"type":"basic.Rhombus","size":{"width":130,"height":90},"position":{"x":112,"y":51},"angle":0,"id":"5e2bcc56-4b8d-442a-b8ea-2a6a00379887","z":3,"ports":{"items":[{"group":"in","attrs":{"label":{"text":"in1"}},"id":"20a31fca-a805-45ae-904c-4fa20462e931"},{"group":"in","attrs":{"label":{"text":"in2"}},"id":"c533ca9d-62b2-4c81-aeab-149690752c1c"},{"group":"out","attrs":{"label":{"text":"out"}},"id":"e6fbcbf6-55e6-45f6-8a1e-50dfc3e5277b"},{"group":"out","attrs":{"label":{"text":"out"}},"id":"a8dd4e44-0799-49f6-bab9-93eeabfe395e"}]},"attrs":{"text":{"text":"Rhombus"}}},{"type":"basic.Ellipse","size":{"width":130,"height":90},"position":{"x":368,"y":254},"angle":0,"id":"ca419278-196f-4222-9c78-95a82a9056bb","z":4,"ports":{"items":[{"group":"in","attrs":{"label":{"text":"in1"}},"id":"5540e166-be3c-4e15-a69e-822a0816d963"},{"group":"in","attrs":{"label":{"text":"in2"}},"id":"a8c48cd9-ce89-4410-aa92-e048cc8fe2ef"},{"group":"out","attrs":{"label":{"text":"out"}},"id":"9028a3f3-ccd1-4b9b-ba4d-28ec34e49888"},{"group":"out","attrs":{"label":{"text":"out"}},"id":"e16ce372-393a-4621-aec2-5823a5d6ea1a"}]},"attrs":{"text":{"text":"Ellipse"}}}]}'
router.route('/').get((req, res) => {
  
 
    res.json(data)
})

router.route('/').post((req, res) => {
    console.log("posted");
    console.log(req.body);
    res.json({message:"sucessfull"})

})







export default router