'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectingAction = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseAction2 = require('./BaseAction');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectingAction = exports.SelectingAction = function (_BaseAction) {
  _inherits(SelectingAction, _BaseAction);

  function SelectingAction(mouseX, mouseY) {
    _classCallCheck(this, SelectingAction);

    var _this = _possibleConstructorReturn(this, (SelectingAction.__proto__ || Object.getPrototypeOf(SelectingAction)).call(this, mouseX, mouseY));

    _this.mouseX2 = mouseX;
    _this.mouseY2 = mouseY;
    return _this;
  }

  _createClass(SelectingAction, [{
    key: 'containsElement',
    value: function containsElement(x, y, diagramModel) {
      var mouseX = this.mouseX,
          mouseX2 = this.mouseX2,
          mouseY = this.mouseY,
          mouseY2 = this.mouseY2;

      var _diagramModel$getZoom = diagramModel.getZoomLevel(),
          _diagramModel$getZoom2 = _slicedToArray(_diagramModel$getZoom, 2),
          zx = _diagramModel$getZoom2[0],
          zy = _diagramModel$getZoom2[1];

      var elX = (x + diagramModel.getOffsetX()) * (zx / 100);
      var elY = (y + diagramModel.getOffsetY()) * (zy / 100);

      return (mouseX2 < mouseX ? elX < mouseX : elX > mouseX) && (mouseX2 < mouseX ? elX > mouseX2 : elX < mouseX2) && (mouseY2 < mouseY ? elY < mouseY : elY > mouseY) && (mouseY2 < mouseY ? elY > mouseY2 : elY < mouseY2);
    }
  }]);

  return SelectingAction;
}(_BaseAction2.BaseAction);