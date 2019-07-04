"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _react = _interopRequireDefault(require("react"));

var _Form = _interopRequireDefault(require("react-bootstrap/Form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var GradeIndexElement =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GradeIndexElement, _React$Component);

  function GradeIndexElement(props) {
    var _this;

    _classCallCheck(this, GradeIndexElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GradeIndexElement).call(this, props));
    console.log(props);
    return _this;
  }

  _createClass(GradeIndexElement, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement("div", {
        className: "gradeIndexRow"
      }, _react["default"].createElement(_Form["default"].Group, {
        controlId: "name"
      }, _react["default"].createElement(_Form["default"].Control, {
        required: true,
        type: "text",
        placeholder: "Quiz 1",
        defaultValue: !this.props["default"] ? "" : "Quiz 1",
        onChange: function onChange(e) {
          return _this2.props.handleChange(e, _this2.props.id);
        }
      })), _react["default"].createElement(_Form["default"].Group, {
        controlId: "mark"
      }, _react["default"].createElement(_Form["default"].Control, {
        required: true,
        type: "number",
        placeholder: "85",
        defaultValue: !this.props["default"] ? "" : "85",
        step: ".01",
        onChange: function onChange(e) {
          return _this2.props.handleChange(e, _this2.props.id);
        }
      })), _react["default"].createElement(_Form["default"].Group, {
        controlId: "weight"
      }, _react["default"].createElement(_Form["default"].Control, {
        required: true,
        type: "number",
        placeholder: "40",
        defaultValue: !this.props["default"] ? "" : "40",
        step: "1",
        onChange: function onChange(e) {
          return _this2.props.handleChange(e, _this2.props.id);
        }
      })));
    }
  }]);

  return GradeIndexElement;
}(_react["default"].Component);

exports["default"] = GradeIndexElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvQ29tcG9uZW50cy9HcmFkZUluZGV4RWxlbWVudC50c3giXSwibmFtZXMiOlsiR3JhZGVJbmRleEVsZW1lbnQiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJlIiwiaGFuZGxlQ2hhbmdlIiwiaWQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVFxQkEsaUI7Ozs7O0FBQ25CLDZCQUFZQyxLQUFaLEVBQTBCO0FBQUE7O0FBQUE7O0FBQ3hCLDJGQUFNQSxLQUFOO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBRndCO0FBR3pCOzs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDRSxnQ0FBQyxnQkFBRCxDQUFNLEtBQU47QUFBWSxRQUFBLFNBQVMsRUFBQztBQUF0QixTQUNFLGdDQUFDLGdCQUFELENBQU0sT0FBTjtBQUNFLFFBQUEsUUFBUSxNQURWO0FBRUUsUUFBQSxJQUFJLEVBQUMsTUFGUDtBQUdFLFFBQUEsV0FBVyxFQUFDLFFBSGQ7QUFJRSxRQUFBLFlBQVksRUFBRSxDQUFDLEtBQUtBLEtBQUwsV0FBRCxHQUFzQixFQUF0QixHQUEyQixRQUozQztBQUtFLFFBQUEsUUFBUSxFQUFFLGtCQUFDRyxDQUFEO0FBQUEsaUJBQVcsTUFBSSxDQUFDSCxLQUFMLENBQVdJLFlBQVgsQ0FBd0JELENBQXhCLEVBQTJCLE1BQUksQ0FBQ0gsS0FBTCxDQUFXSyxFQUF0QyxDQUFYO0FBQUE7QUFMWixRQURGLENBREYsRUFVRSxnQ0FBQyxnQkFBRCxDQUFNLEtBQU47QUFBWSxRQUFBLFNBQVMsRUFBQztBQUF0QixTQUNFLGdDQUFDLGdCQUFELENBQU0sT0FBTjtBQUNFLFFBQUEsUUFBUSxNQURWO0FBRUUsUUFBQSxJQUFJLEVBQUMsUUFGUDtBQUdFLFFBQUEsV0FBVyxFQUFDLElBSGQ7QUFJRSxRQUFBLFlBQVksRUFBRSxDQUFDLEtBQUtMLEtBQUwsV0FBRCxHQUFzQixFQUF0QixHQUEyQixJQUozQztBQUtFLFFBQUEsSUFBSSxFQUFDLEtBTFA7QUFNRSxRQUFBLFFBQVEsRUFBRSxrQkFBQ0csQ0FBRDtBQUFBLGlCQUFXLE1BQUksQ0FBQ0gsS0FBTCxDQUFXSSxZQUFYLENBQXdCRCxDQUF4QixFQUEyQixNQUFJLENBQUNILEtBQUwsQ0FBV0ssRUFBdEMsQ0FBWDtBQUFBO0FBTlosUUFERixDQVZGLEVBb0JFLGdDQUFDLGdCQUFELENBQU0sS0FBTjtBQUFZLFFBQUEsU0FBUyxFQUFDO0FBQXRCLFNBQ0UsZ0NBQUMsZ0JBQUQsQ0FBTSxPQUFOO0FBQ0UsUUFBQSxRQUFRLE1BRFY7QUFFRSxRQUFBLElBQUksRUFBQyxRQUZQO0FBR0UsUUFBQSxXQUFXLEVBQUMsSUFIZDtBQUlFLFFBQUEsWUFBWSxFQUFFLENBQUMsS0FBS0wsS0FBTCxXQUFELEdBQXNCLEVBQXRCLEdBQTJCLElBSjNDO0FBS0UsUUFBQSxJQUFJLEVBQUMsR0FMUDtBQU1FLFFBQUEsUUFBUSxFQUFFLGtCQUFDRyxDQUFEO0FBQUEsaUJBQVcsTUFBSSxDQUFDSCxLQUFMLENBQVdJLFlBQVgsQ0FBd0JELENBQXhCLEVBQTJCLE1BQUksQ0FBQ0gsS0FBTCxDQUFXSyxFQUF0QyxDQUFYO0FBQUE7QUFOWixRQURGLENBcEJGLENBREY7QUFpQ0Q7Ozs7RUF4QzRDQyxrQkFBTUMsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGlkOiBudW1iZXIsXG4gICAgaGFuZGxlQ2hhbmdlOiBGdW5jdGlvbixcbiAgICBkZWZhdWx0OiBCb29sZWFuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYWRlSW5kZXhFbGVtZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCB7fT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc29sZS5sb2cocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyYWRlSW5kZXhSb3dcIj5cbiAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwibmFtZVwiPlxuICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlF1aXogMVwiXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9eyF0aGlzLnByb3BzLmRlZmF1bHQgPyBcIlwiIDogXCJRdWl6IDFcIn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTphbnkpID0+IHRoaXMucHJvcHMuaGFuZGxlQ2hhbmdlKGUsIHRoaXMucHJvcHMuaWQpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwibWFya1wiPlxuICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiODVcIlxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXshdGhpcy5wcm9wcy5kZWZhdWx0ID8gXCJcIiA6IFwiODVcIn1cbiAgICAgICAgICAgIHN0ZXA9XCIuMDFcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlOmFueSkgPT4gdGhpcy5wcm9wcy5oYW5kbGVDaGFuZ2UoZSwgdGhpcy5wcm9wcy5pZCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJ3ZWlnaHRcIj5cbiAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjQwXCJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17IXRoaXMucHJvcHMuZGVmYXVsdCA/IFwiXCIgOiBcIjQwXCJ9XG4gICAgICAgICAgICBzdGVwPVwiMVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGU6YW55KSA9PiB0aGlzLnByb3BzLmhhbmRsZUNoYW5nZShlLCB0aGlzLnByb3BzLmlkKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=