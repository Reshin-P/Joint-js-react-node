import { shapes } from "jointjs";

export const rectangleShape = new shapes.basic.Rect({
  position: {
    x: 10,
    y: 20,
  },
  size: {
    width: 130,
    height: 90,
  },
  attrs: {
    text: {
      text: "Rectangle",
    },
  },
  inPorts: [""],
  outPorts: ["", ""],
});

export const circleShape = new shapes.basic.Circle({
  position: {
    x: 150,
    y: 20,
  },
  size: {
    width: 130,
    height: 90,
  },
  attrs: {
    text: {
      text: "d",
    },
  },
  inPorts: [""],
  outPorts: ["", ""],
});

export const rhombusShape = new shapes.basic.Rhombus({
  position: {
    x: 10,
    y: 140,
  },
  size: {
    width: 130,
    height: 90,
  },
  attrs: {
    text: {
      text: "Rhombus",
    },
  },
});

export const EllipseShape = new shapes.basic.Ellipse({
  position: {
    x: 150,
    y: 140,
  },
  size: {
    width: 130,
    height: 90,
  },
  attrs: {
    text: {
      text: "Ellipse",
    },
  },
});

export const imageShape = new shapes.devs.Coupled({
  position: {
    x: 10,
    y: 290,
  },
  size: {
    width: 130,
    height: 90,
  },
  attrs: {
    text: {
      text: "Test",
    },
  },
});

export const atomicShape = new shapes.devs.Atomic({
  position: {
    x: 150,
    y: 290,
  },
  size: {
    width: 130,
    height: 90,
  },

  inPorts: [""],
  outPorts: ["", "", " "],
});
