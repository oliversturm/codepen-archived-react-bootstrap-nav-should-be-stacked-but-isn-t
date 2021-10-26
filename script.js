var Bar = React.createClass({ displayName: "Bar",
  render: function () {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(ReactBootstrap.Navbar, { inverse: true }, /*#__PURE__*/
      React.createElement(ReactBootstrap.Navbar.Header, null, /*#__PURE__*/
      React.createElement(ReactBootstrap.Navbar.Toggle, null)), /*#__PURE__*/

      React.createElement(ReactBootstrap.Navbar.Collapse, null, /*#__PURE__*/
      React.createElement(ReactBootstrap.Nav, { stacked: true, bsStyle: "pills" }, /*#__PURE__*/
      React.createElement(ReactBootstrap.NavItem, { eventKey: "1" }, "Item 1"), /*#__PURE__*/
      React.createElement(ReactBootstrap.NavItem, { eventKey: "2" }, "Item 2"))))));





  } });


ReactDOM.render( /*#__PURE__*/React.createElement(Bar, null), document.getElementById("barContainer"));