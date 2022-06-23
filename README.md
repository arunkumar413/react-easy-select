easy-select, A simple select component based on react.

## Usage

```
export default function App() {
  const [selected, setSelected] = useState({ label: "", value: "" });

  const selectOptions = [
    { label: "January", value: 0 },
    { label: "February", value: 1 },
    { label: "March", value: 2 },
    { label: "April", value: 3 },
    { label: "May", value: 4 },
    { label: "June", value: 5 },
    { label: "July", value: 6 },
    { label: "March", value: 7 },
  ];

  function handleSelect(evt, item) {
    debugger;
    setSelected({ ...selected, label: item.label, value: item.value });
  }

  return (
    <div className="App">
      {" "}
      <EasySelect
        value={selected}
        options={selectOptions}
        onSelect={handleSelect}
      />{" "}
    </div>
  );
}

```

## Styling

Below is the default style. You can change this defualt syle in the ` style.css ` file. Every thing is wrapped under the class ` easy-select-container` . You can vary the width of the container explicitly. Otherwise it should take the available width of the parent container.

```
.easy-select-container {
  width: 200px;
}

.easy-select-container .selected-container {
  font-family: sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
}

.easy-select-container .options-container {
  font-family: sans-serif;
  padding: 5px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}

.easy-select-container .selected-container:hover {
  border: solid 1px blue;
}

.easy-select-container .option {
  padding: 10px;
}

.easy-select-container .option:hover {
  background-color: azure;
  color: blue;
}

.easy-select-container .arrow {
  text-align: right;
}

```
