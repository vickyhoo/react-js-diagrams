import { BaseAction } from './BaseAction';

export class SelectingAction extends BaseAction {
  constructor(mouseX, mouseY) {
    super(mouseX, mouseY);
    this.mouseX2 = mouseX;
    this.mouseY2 = mouseY;
  }

  containsElement(x, y, diagramModel) {
    const { mouseX, mouseX2, mouseY, mouseY2 } = this;
    const [zx, zy] = diagramModel.getZoomLevel();
    const elX = (x + diagramModel.getOffsetX()) * (zx / 100);
    const elY = (y + diagramModel.getOffsetY()) * (zy / 100);

    return (
      ((mouseX2 < mouseX) ? elX < mouseX : elX > mouseX) &&
      ((mouseX2 < mouseX) ? elX > mouseX2 : elX < mouseX2) &&
      ((mouseY2 < mouseY) ? elY < mouseY : elY > mouseY) &&
      ((mouseY2 < mouseY) ? elY > mouseY2 : elY < mouseY2)
    );
  }
}
