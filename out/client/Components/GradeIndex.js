"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.function.bind");

var _react = _interopRequireDefault(require("react"));

require("../Styling/GradeIndex.css");

var _GradeIndexElement = _interopRequireDefault(require("./GradeIndexElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GradeIndex =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GradeIndex, _React$Component);

  function GradeIndex() {
    var _this;

    _classCallCheck(this, GradeIndex);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GradeIndex).call(this, {}));

    _defineProperty(_assertThisInitialized(_this), "id", 0);

    _this.state = {
      inputs: [{
        id: _this.getId(),
        name: 'Quiz 1',
        mark: '85',
        weight: '40',
        "default": true
      }]
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(GradeIndex, [{
    key: "handleChange",
    value: function handleChange(e, id) {
      this.setState({
        inputs: this.state.inputs.map(function (elm) {
          if (elm.id === id) {
            elm[e.target.id] = e.target.value;
          }

          return elm;
        })
      });
      console.log(this.state);
    }
  }, {
    key: "getId",
    value: function getId() {
      return ++this.id;
    }
  }, {
    key: "newRow",
    value: function newRow() {
      this.setState({
        inputs: [].concat(_toConsumableArray(this.state.inputs), [{
          id: this.getId(),
          name: '',
          mark: '',
          weight: '',
          "default": false
        }])
      });
    }
  }, {
    key: "resetForm",
    value: function resetForm() {
      this.setState({
        inputs: [{
          id: this.getId(),
          name: 'Quiz 1',
          mark: '85',
          weight: '40',
          "default": true
        }]
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement("div", {
        className: "gradeIndexWrapper"
      }, _react["default"].createElement("h1", null, "MaxAverage"), _react["default"].createElement("div", {
        className: "gradeIndexContainer"
      }, _react["default"].createElement("div", {
        className: "gradeIndexHeader"
      }, _react["default"].createElement("h3", null, "Name"), _react["default"].createElement("h3", null, "Mark"), _react["default"].createElement("h3", null, "Weight")), _react["default"].createElement("div", {
        className: "gradeIndexForm"
      }, this.state.inputs.map(function (elm) {
        return _react["default"].createElement(_GradeIndexElement["default"], {
          "default": elm["default"],
          key: elm.id,
          id: elm.id,
          handleChange: _this2.handleChange
        });
      })), _react["default"].createElement("div", {
        className: "actionButtons"
      }, _react["default"].createElement("p", {
        className: "actionClick",
        onClick: function onClick() {
          return _this2.newRow();
        }
      }, "Add Another Grade"), _react["default"].createElement("p", {
        className: "actionClick",
        onClick: function onClick() {
          return _this2.resetForm();
        }
      }, "Reset Form")), _react["default"].createElement("hr", null)));
    }
  }]);

  return GradeIndex;
}(_react["default"].Component);

exports["default"] = GradeIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvQ29tcG9uZW50cy9HcmFkZUluZGV4LnRzeCJdLCJuYW1lcyI6WyJHcmFkZUluZGV4Iiwic3RhdGUiLCJpbnB1dHMiLCJpZCIsImdldElkIiwibmFtZSIsIm1hcmsiLCJ3ZWlnaHQiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZSIsInNldFN0YXRlIiwibWFwIiwiZWxtIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwibmV3Um93IiwicmVzZXRGb3JtIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBY3FCQSxVOzs7OztBQUdqQix3QkFBYztBQUFBOztBQUFBOztBQUNaLG9GQUFNLEVBQU47O0FBRFkseURBRkQsQ0FFQzs7QUFFWixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsTUFBTSxFQUFFLENBQUM7QUFDUEMsUUFBQUEsRUFBRSxFQUFFLE1BQUtDLEtBQUwsRUFERztBQUNXQyxRQUFBQSxJQUFJLEVBQUUsUUFEakI7QUFDMkJDLFFBQUFBLElBQUksRUFBRSxJQURqQztBQUN1Q0MsUUFBQUEsTUFBTSxFQUFFLElBRC9DO0FBQ3FELG1CQUFTO0FBRDlELE9BQUQ7QUFERyxLQUFiO0FBS0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQiwrQkFBcEI7QUFQWTtBQVFiOzs7O2lDQUVZQyxDLEVBQXdDUCxFLEVBQVc7QUFDOUQsV0FBS1EsUUFBTCxDQUFjO0FBQ1pULFFBQUFBLE1BQU0sRUFBRSxLQUFLRCxLQUFMLENBQVdDLE1BQVgsQ0FBa0JVLEdBQWxCLENBQXNCLFVBQUNDLEdBQUQsRUFBbUI7QUFDL0MsY0FBSUEsR0FBRyxDQUFDVixFQUFKLEtBQVdBLEVBQWYsRUFBbUI7QUFDakJVLFlBQUFBLEdBQUcsQ0FBQ0gsQ0FBQyxDQUFDSSxNQUFGLENBQVNYLEVBQVYsQ0FBSCxHQUFtQk8sQ0FBQyxDQUFDSSxNQUFGLENBQVNDLEtBQTVCO0FBQ0Q7O0FBQ0QsaUJBQU9GLEdBQVA7QUFDRCxTQUxPO0FBREksT0FBZDtBQVFBRyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLaEIsS0FBakI7QUFDRDs7OzRCQUVPO0FBQ04sYUFBTyxFQUFFLEtBQUtFLEVBQWQ7QUFDRDs7OzZCQUVRO0FBQ1AsV0FBS1EsUUFBTCxDQUFjO0FBQ1pULFFBQUFBLE1BQU0sK0JBQU0sS0FBS0QsS0FBTCxDQUFXQyxNQUFqQixJQUF5QjtBQUM3QkMsVUFBQUEsRUFBRSxFQUFFLEtBQUtDLEtBQUwsRUFEeUI7QUFDWEMsVUFBQUEsSUFBSSxFQUFFLEVBREs7QUFDREMsVUFBQUEsSUFBSSxFQUFFLEVBREw7QUFDU0MsVUFBQUEsTUFBTSxFQUFFLEVBRGpCO0FBQ3FCLHFCQUFTO0FBRDlCLFNBQXpCO0FBRE0sT0FBZDtBQUtEOzs7Z0NBRVc7QUFDVixXQUFLSSxRQUFMLENBQWM7QUFDWlQsUUFBQUEsTUFBTSxFQUFFLENBQUM7QUFDUEMsVUFBQUEsRUFBRSxFQUFFLEtBQUtDLEtBQUwsRUFERztBQUNXQyxVQUFBQSxJQUFJLEVBQUUsUUFEakI7QUFDMkJDLFVBQUFBLElBQUksRUFBRSxJQURqQztBQUN1Q0MsVUFBQUEsTUFBTSxFQUFFLElBRC9DO0FBQ3FELHFCQUFTO0FBRDlELFNBQUQ7QUFESSxPQUFkO0FBS0Q7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0UseURBREYsRUFFRTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDRSxtREFERixFQUVFLG1EQUZGLEVBR0UscURBSEYsQ0FERixFQU1FO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNHLEtBQUtOLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQlUsR0FBbEIsQ0FBc0IsVUFBQ0MsR0FBRDtBQUFBLGVBQW1CLGdDQUFDLDZCQUFEO0FBQW1CLHFCQUFTQSxHQUFHLFdBQS9CO0FBQXlDLFVBQUEsR0FBRyxFQUFFQSxHQUFHLENBQUNWLEVBQWxEO0FBQXNELFVBQUEsRUFBRSxFQUFFVSxHQUFHLENBQUNWLEVBQTlEO0FBQWtFLFVBQUEsWUFBWSxFQUFFLE1BQUksQ0FBQ0s7QUFBckYsVUFBbkI7QUFBQSxPQUF0QixDQURILENBTkYsRUFTRTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDRTtBQUFHLFFBQUEsU0FBUyxFQUFDLGFBQWI7QUFBMkIsUUFBQSxPQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUNVLE1BQUwsRUFBTjtBQUFBO0FBQXBDLDZCQURGLEVBRUU7QUFBRyxRQUFBLFNBQVMsRUFBQyxhQUFiO0FBQTJCLFFBQUEsT0FBTyxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDQyxTQUFMLEVBQU47QUFBQTtBQUFwQyxzQkFGRixDQVRGLEVBYUUsMkNBYkYsQ0FGRixDQURGO0FBb0JEOzs7O0VBbEVtQ0Msa0JBQU1DLFMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9jbGljay1ldmVudHMtaGF2ZS1rZXktZXZlbnRzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9TdHlsaW5nL0dyYWRlSW5kZXguY3NzJztcbmltcG9ydCBHcmFkZUluZGV4RWxlbWVudCBmcm9tICcuL0dyYWRlSW5kZXhFbGVtZW50JztcblxuaW50ZXJmYWNlIHJvd1N0YXRlIHtcbiAgICBpZDogbnVtYmVyLFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBtYXJrOiBzdHJpbmcsXG4gICAgd2VpZ2h0OiBzdHJpbmcsXG4gICAgZGVmYXVsdDogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICAgIGlucHV0czogcm93U3RhdGVbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFkZUluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCBTdGF0ZT4ge1xuICAgIHByaXZhdGUgaWQgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcih7fSk7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBpbnB1dHM6IFt7XG4gICAgICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSwgbmFtZTogJ1F1aXogMScsIG1hcms6ICc4NScsIHdlaWdodDogJzQwJywgZGVmYXVsdDogdHJ1ZVxuICAgICAgICB9XVxuICAgICAgfTtcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sIGlkOm51bWJlcikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlucHV0czogdGhpcy5zdGF0ZS5pbnB1dHMubWFwKChlbG06IHJvd1N0YXRlKSA9PiB7XG4gICAgICAgICAgaWYgKGVsbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIGVsbVtlLnRhcmdldC5pZF0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGVsbTtcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgfVxuXG4gICAgZ2V0SWQoKSB7XG4gICAgICByZXR1cm4gKyt0aGlzLmlkO1xuICAgIH1cblxuICAgIG5ld1JvdygpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpbnB1dHM6IFsuLi50aGlzLnN0YXRlLmlucHV0cywge1xuICAgICAgICAgIGlkOiB0aGlzLmdldElkKCksIG5hbWU6ICcnLCBtYXJrOiAnJywgd2VpZ2h0OiAnJywgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfV1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc2V0Rm9ybSgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpbnB1dHM6IFt7XG4gICAgICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSwgbmFtZTogJ1F1aXogMScsIG1hcms6ICc4NScsIHdlaWdodDogJzQwJywgZGVmYXVsdDogdHJ1ZVxuICAgICAgICB9XVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmFkZUluZGV4V3JhcHBlclwiPlxuICAgICAgICAgIDxoMT5NYXhBdmVyYWdlPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyYWRlSW5kZXhDb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JhZGVJbmRleEhlYWRlclwiPlxuICAgICAgICAgICAgICA8aDM+TmFtZTwvaDM+XG4gICAgICAgICAgICAgIDxoMz5NYXJrPC9oMz5cbiAgICAgICAgICAgICAgPGgzPldlaWdodDwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JhZGVJbmRleEZvcm1cIj5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaW5wdXRzLm1hcCgoZWxtOnJvd1N0YXRlKSA9PiAoPEdyYWRlSW5kZXhFbGVtZW50IGRlZmF1bHQ9e2VsbS5kZWZhdWx0fSBrZXk9e2VsbS5pZH0gaWQ9e2VsbS5pZH0gaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz4pKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25CdXR0b25zXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjdGlvbkNsaWNrXCIgb25DbGljaz17KCkgPT4gdGhpcy5uZXdSb3coKX0+QWRkIEFub3RoZXIgR3JhZGU8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjdGlvbkNsaWNrXCIgb25DbGljaz17KCkgPT4gdGhpcy5yZXNldEZvcm0oKX0+UmVzZXQgRm9ybTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG59XG4iXX0=