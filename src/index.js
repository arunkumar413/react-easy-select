import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import ClickAwayListener from "react-click-away-listener";

export function EasySelect(props) {
  const [isDropDownOpen, setDropDown] = useState("none");
  const ref = useRef(null);

  function handleSelect(evt, item) {
    props.onSelect(evt, item);
  }

  function addSelection(evt, item) {
    props.onSelect(evt, item);
  }

  const optionElements = props.options.map(function (item, index) {
    return (
      <div
        onClick={(evt) => handleSelect(evt, item)}
        key={index.toString()}
        className="option"
      >
        {item.label}
      </div>
    );
  });

  function displayDropDown(evt) {
    // evt.stopPropagation();
    setDropDown("block");
  }

  function hideDropDown() {
    setDropDown("none");
  }

  return (
    <ClickAwayListener onClickAway={hideDropDown}>
      <div onClick={displayDropDown} className="easy-select-container">
        <div
          className="selected-container"
          style={
            isDropDownOpen === "block" ? { border: "solid 0.5px blue" } : {}
          }
        >
          <span className="selected-item"> {props.value.label} </span>
          <span className="material-symbols-outlined arrow">expand_more</span>
        </div>
        <div style={{ display: isDropDownOpen }} className="options-container">
          {optionElements}
        </div>
      </div>
    </ClickAwayListener>
  );
}
