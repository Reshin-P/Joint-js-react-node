const data = {
    cells: [
      {
        type: "basic.Rhombus",
        size: { width: 130, height: 90 },
        position: { x: 717, y: 112 },
        angle: 0,
        id: "1a672efa-e2b8-4607-a8f7-baa7039a4347",
        z: 3,
        attrs: { text: { text: "Rhombus" } },
      },
      {
        type: "basic.Ellipse",
        size: { width: 130, height: 90 },
        position: { x: 358, y: 199 },
        angle: 0,
        id: "550f68cf-3399-43c4-b906-02216d1fcbb2",
        z: 4,
        attrs: { text: { text: "Ellipse" } },
      },
      {
        type: "standard.Rectangle",
        position: { x: 251, y: 451 },
        size: { width: 130, height: 150 },
        angle: 0,
        id: "3d0d3ab5-b3d4-44bb-a37b-bc7644f9b62d",
        ports: {
          items: [
            {
              label: {
                position: { name: "right" },
                markup: [{ tagName: "text", selector: "label" }],
              },
              attrs: {
                portBody: {
                  magnet: true,
                  width: 6,
                  height: 6,
                  x: 130,
                  y: -5,
                  fill: "black",
                },
              },
              markup: [{ tagName: "rect", selector: "portBody" }],
              id: "c75cd57b-b1aa-4337-b0ce-7de101a12ce4",
            },
            {
              label: {
                position: { name: "right" },
                markup: [{ tagName: "text", selector: "label" }],
              },
              attrs: {
                portBody: {
                  magnet: true,
                  width: 6,
                  height: 6,
                  x: 130,
                  y: 0,
                  fill: "black",
                },
              },
              markup: [{ tagName: "rect", selector: "portBody" }],
              id: "2ad603be-f084-47ff-baf8-1b56272427b9",
            },
            {
              label: {
                position: { name: "right" },
                markup: [{ tagName: "text", selector: "label" }],
              },
              attrs: {
                portBody: {
                  magnet: true,
                  width: 6,
                  height: 6,
                  x: 130,
                  y: 10,
                  fill: "black",
                },
              },
              markup: [{ tagName: "rect", selector: "portBody" }],
              id: "95fc228f-5528-4d4e-afc0-b7489a3b323c",
            },
            {
              label: {
                position: { name: "right" },
                markup: [{ tagName: "text", selector: "label" }],
              },
              attrs: {
                portBody: {
                  magnet: true,
                  width: 6,
                  height: 6,
                  x: 130,
                  y: 19,
                  fill: "black",
                },
              },
              markup: [{ tagName: "rect", selector: "portBody" }],
              id: "2bc4050c-cd89-406f-89c0-d82cbddae71e",
            },
            {
              label: {
                position: { name: "right" },
                markup: [{ tagName: "text", selector: "label" }],
              },
              attrs: {
                portBody: {
                  magnet: true,
                  width: 6,
                  height: 6,
                  x: -5,
                  y: -45,
                  fill: "black",
                },
              },
              markup: [{ tagName: "rect", selector: "portBody" }],
              id: "e3db82e4-5be5-4ee9-9f93-eecbae49e799",
            },
            {
              label: {
                position: { name: "right" },
                markup: [{ tagName: "text", selector: "label" }],
              },
              attrs: {
                portBody: {
                  magnet: true,
                  width: 6,
                  height: 6,
                  x: 130,
                  y: 1,
                  fill: "black",
                },
              },
              markup: [{ tagName: "rect", selector: "portBody" }],
              id: "4848265e-c4dc-4847-8108-71cd3c0e83c1",
            },
          ],
        },
        z: 6,
        attrs: { text: { text: "Output redering", y: 0 } },
      },
      {
        type: "standard.Fader",
        position: { x: 772, y: 264 },
        size: { width: 90, height: 90 },
        angle: 0,
        attr: { line: "red" },
        ports: {
          groups: {
            in: {
              position: { name: "left" },
              attrs: {
                portBody: {
                  magnet: true,
                  r: 6,
                  fill: "#023047",
                  stroke: "#023047",
                },
              },
              label: {
                position: { name: "left", args: { y: 6 } },
                markup: [
                  { tagName: "text", selector: "label", className: "label-text" },
                ],
              },
              markup: [{ tagName: "circle", selector: "portBody" }],
            },
            out: {
              position: { name: "right" },
              attrs: {
                portBody: {
                  magnet: true,
                  r: 6,
                  fill: "#E6A502",
                  stroke: "#023047",
                },
              },
              label: {
                position: { name: "right", args: { y: 6 } },
                markup: [
                  { tagName: "text", selector: "label", className: "label-text" },
                ],
              },
              markup: [{ tagName: "circle", selector: "portBody" }],
            },
          },
          items: [
            {
              label: {
                position: { name: "right" },
                markup: [{ tagName: "text", selector: "label" }],
              },
              attrs: {
                portBody: {
                  magnet: true,
                  width: 6,
                  height: 6,
                  x: 5,
                  y: 19,
                  fill: "black",
                },
              },
              markup: [{ tagName: "rect", selector: "portBody" }],
              id: "ca190eb4-4550-49bc-b04d-d37d4d0f12e0",
            },
            {
              label: {
                position: { name: "right" },
                markup: [{ tagName: "text", selector: "label" }],
              },
              attrs: {
                portBody: {
                  magnet: true,
                  width: 6,
                  height: 6,
                  x: 52,
                  y: -24,
                  fill: "black",
                },
              },
              markup: [{ tagName: "rect", selector: "portBody" }],
              id: "6ce6fe8f-41ed-4c10-b48e-893d6a03036f",
            },
          ],
        },
        id: "1a119f52-637d-46f1-a60e-0da6c15fc096",
        z: 10,
        attrs: {},
      },
    ],
  };