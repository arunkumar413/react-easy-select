"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.EasySelect = EasySelect;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./style.css");

var _reactClickAwayListener = require("react-click-away-listener");

var _reactClickAwayListener2 = _interopRequireDefault(_reactClickAwayListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EasySelect(props) {
  var _useState = (0, _react.useState)("none"),
      _useState2 = _slicedToArray(_useState, 2),
      isDropDownOpen = _useState2[0],
      setDropDown = _useState2[1];

  var ref = (0, _react.useRef)(null);

  function handleSelect(evt, item) {
    props.onSelect(evt, item);
  }

  function addSelection(evt, item) {
    props.onSelect(evt, item);
  }

  var optionElements = props.options.map(function (item, index) {
    return _react2.default.createElement(
      "div",
      {
        onClick: function onClick(evt) {
          return handleSelect(evt, item);
        },
        key: index.toString(),
        className: "option"
      },
      item.label
    );
  });

  function displayDropDown(evt) {
    // evt.stopPropagation();
    setDropDown("block");
  }

  function hideDropDown() {
    setDropDown("none");
  }

  return _react2.default.createElement(
    _reactClickAwayListener2.default,
    { onClickAway: hideDropDown },
    _react2.default.createElement(
      "div",
      { onClick: displayDropDown, className: "easy-select-container" },
      _react2.default.createElement(
        "div",
        {
          className: "selected-container",
          style: isDropDownOpen === "block" ? { border: "solid 0.5px blue" } : {}
        },
        _react2.default.createElement(
          "span",
          { className: "selected-item" },
          " ",
          props.value.label,
          " "
        ),
        _react2.default.createElement(
          "span",
          { className: "material-symbols-outlined arrow" },
          "expand_more"
        )
      ),
      _react2.default.createElement(
        "div",
        { style: { display: isDropDownOpen }, className: "options-container" },
        optionElements
      )
    )
  );
}