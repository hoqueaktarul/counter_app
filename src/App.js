import "./styles.css";
import React, { useState } from "react";
function Counter() {
  const [inti_value, setinit_value] = useState(0);
  const [value, setvalue] = useState(0);
  const [much_value, setmuch_value] = useState(1);
  // console.log(much_value, typeof much_value);

  function inc() {
    // console.log("inc");

    setvalue(value + much_value);
  }
  function dec() {
    // console.log("dec");

    setvalue(value - much_value);
  }
  function reset() {
    // console.log("reset");

    setvalue(parseInt(inti_value, 10));
  }
  const init = (e) => {
    setinit_value(e.target.value);
    if (e.target.value) {
      setvalue(parseInt(e.target.value));
    } else {
      setvalue(0);
    }
  };
  function much(e) {
    if (e.target.value) {
      setmuch_value(parseInt(e.target.value));
    } else {
      setmuch_value(1);
    }
  }
  return (
    <div>
      <h1 style={{ color: "rgb(4, 150, 210)" }}>Counter App</h1>
      <div>
        <label>
          initional valu:
          <input type="number" onChange={init} value={inti_value} />
        </label>
      </div>
      <div>
        <label>
          how much value:
          <input type="number" id="ok" onChange={much} value={much_value} />
        </label>
      </div>
      <div>
        <h2>{value}</h2>
      </div>
      <div>
        <button className="btn" onClick={inc}>
          inc
        </button>
        <button className="btn" onClick={dec}>
          dec
        </button>
        <button className="btn" onClick={reset}>
          reset
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App" style={{ backgroundColor: "aquamarine" }}>
      <Counter />
    </div>
  );
}
