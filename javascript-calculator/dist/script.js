function App() {
  const [exp, setExp] = React.useState('');
  const [ans, setAns] = React.useState(0);
  const Display = symbol => {
    setExp(prev => prev + symbol);
    if (exp[exp.length - 1] == "=")
    {
      if (/[1-9.]/.test(symbol))
      {
        setExp(symbol);
      } else

      {
        setExp(ans + symbol);
      }
    }
  };
  const calculate = () => {
    setAns(eval(exp));
    setExp(prev => prev + "=");
  };
  const Clear = () => {
    setExp("");
    setAns("");
  };
  return /*#__PURE__*/React.createElement("div", { className: "container" }, /*#__PURE__*/
  React.createElement("div", { className: "grid" }, /*#__PURE__*/
  React.createElement("div", { id: "display", className: "dis" }, /*#__PURE__*/
  React.createElement("input", { type: "text", value: exp, placeholder: "0", disabled: true }), /*#__PURE__*/
  React.createElement("div", { className: "Ans" }, ans)), /*#__PURE__*/

  React.createElement("div", { id: "clear", onClick: Clear, className: "padButton AC" }, "AC"), /*#__PURE__*/
  React.createElement("div", { id: "divide", onClick: () => Display("/"), className: "padButton div" }, "/"), /*#__PURE__*/
  React.createElement("div", { id: "multiply", onClick: () => Display("x"), className: "padButton mul" }, "x"), /*#__PURE__*/
  React.createElement("div", { id: "seven", onClick: () => Display("7"), className: "padButton seven" }, "7"), /*#__PURE__*/
  React.createElement("div", { id: "eight", onClick: () => Display("8"), className: "padButton eight" }, "8"), /*#__PURE__*/
  React.createElement("div", { id: "nine", onClick: () => Display("9"), className: "padButton nine" }, "9"), /*#__PURE__*/
  React.createElement("div", { id: "subtract", onClick: () => Display("-"), className: "padButton sub" }, "-"), /*#__PURE__*/
  React.createElement("div", { id: "four", onClick: () => Display("4"), className: "padButton four" }, "4"), /*#__PURE__*/
  React.createElement("div", { id: "five", onClick: () => Display("5"), className: "padButton five" }, "5"), /*#__PURE__*/
  React.createElement("div", { id: "six", onClick: () => Display("6"), className: "padButton six" }, "6"), /*#__PURE__*/
  React.createElement("div", { id: "add", onClick: () => Display("+"), className: "padButton plus" }, "+"), /*#__PURE__*/
  React.createElement("div", { id: "one", onClick: () => Display("1"), className: "padButton one" }, "1"), /*#__PURE__*/
  React.createElement("div", { id: "two", onClick: () => Display("2"), className: "padButton two" }, "2"), /*#__PURE__*/
  React.createElement("div", { id: "three", onClick: () => Display("3"), className: "padButton three" }, "3"), /*#__PURE__*/
  React.createElement("div", { id: "equals", onClick: calculate, className: "padButton equal" }, "="), /*#__PURE__*/
  React.createElement("div", { id: "zero", onClick: () => Display("0"), className: "padButton zero" }, "0"), /*#__PURE__*/
  React.createElement("div", { id: "decimal", onClick: () => Display("."), className: "padButton period" }, ".")));



}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));