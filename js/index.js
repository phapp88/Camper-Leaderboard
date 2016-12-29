"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Header.prototype.render = function render() {
    return React.createElement(
      "header",
      null,
      React.createElement("img", { src: "https://dl.dropboxusercontent.com/s/rmrtek8455aou15/fccLogo.png?dl=0", alt: "fcc logo" })
    );
  };

  return Header;
}(React.Component);

var Leaderboard = function (_React$Component2) {
  _inherits(Leaderboard, _React$Component2);

  function Leaderboard() {
    _classCallCheck(this, Leaderboard);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  Leaderboard.prototype.render = function render() {
    var number = 0;
    return React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "h2",
        null,
        "Leaderboard"
      ),
      React.createElement(TopRow, { list: this.props.list, changeList: this.props.changeList }),
      this.props.campers.map(function (camper) {
        return React.createElement(CamperRow, { number: ++number, camper: camper });
      })
    );
  };

  return Leaderboard;
}(React.Component);

var TopRow = function (_React$Component3) {
  _inherits(TopRow, _React$Component3);

  function TopRow() {
    _classCallCheck(this, TopRow);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  TopRow.prototype.handleClick = function handleClick(e) {

    var buttonText = e.currentTarget.textContent;
    var list = buttonText == 'All time points ' ? 'alltime' : 'recent';
    this.props.changeList(list);
  };

  TopRow.prototype.render = function render() {
    var recentIconClassName = this.props.list == 'recent' ? 'fa fa-sort-desc' : '';
    var alltimeIconClassName = this.props.list == 'alltime' ? 'fa fa-sort-desc' : '';
    return React.createElement(
      "div",
      { className: "row", id: "topRow" },
      React.createElement(
        "div",
        { className: "col-xs-1 text-left" },
        "#"
      ),
      React.createElement(
        "div",
        { className: "col-xs-3 text-left" },
        "Camper Name"
      ),
      React.createElement(
        "div",
        { className: "col-xs-4" },
        React.createElement(
          "p",
          { onClick: this.handleClick.bind(this) },
          React.createElement(
            "u",
            null,
            "Points in past 30 days ",
            React.createElement("i", { className: recentIconClassName })
          )
        )
      ),
      React.createElement(
        "div",
        { className: "col-xs-4" },
        React.createElement(
          "p",
          { onClick: this.handleClick.bind(this) },
          React.createElement(
            "u",
            null,
            "All time points ",
            React.createElement("i", { className: alltimeIconClassName })
          )
        )
      )
    );
  };

  return TopRow;
}(React.Component);

var CamperRow = function (_React$Component4) {
  _inherits(CamperRow, _React$Component4);

  function CamperRow() {
    _classCallCheck(this, CamperRow);

    return _possibleConstructorReturn(this, _React$Component4.apply(this, arguments));
  }

  CamperRow.prototype.render = function render() {
    var url = "https://www.freecodecamp.com/" + this.props.camper.username;
    var parentClass = this.props.number % 2 === 0 ? 'row' : 'row odd';
    return React.createElement(
      "div",
      { className: parentClass },
      React.createElement(
        "div",
        { className: "col-xs-1 text-left" },
        this.props.number
      ),
      React.createElement(
        "div",
        { className: "col-xs-3 text-left" },
        React.createElement(
          "a",
          { href: url, target: "_blank" },
          React.createElement("img", { src: this.props.camper.img }),
          this.props.camper.username
        )
      ),
      React.createElement(
        "div",
        { className: "col-xs-4" },
        this.props.camper.recent
      ),
      React.createElement(
        "div",
        { className: "col-xs-4" },
        this.props.camper.alltime
      )
    );
  };

  return CamperRow;
}(React.Component);

var Footer = function (_React$Component5) {
  _inherits(Footer, _React$Component5);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _React$Component5.apply(this, arguments));
  }

  Footer.prototype.render = function render() {
    return React.createElement(
      "footer",
      null,
      "By ",
      React.createElement(
        "a",
        { href: "https://www.freecodecamp.com/phapp88", target: "_blank" },
        "Paul Happ"
      )
    );
  };

  return Footer;
}(React.Component);

var Layout = function (_React$Component6) {
  _inherits(Layout, _React$Component6);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this7 = _possibleConstructorReturn(this, _React$Component6.call(this));

    _this7.state = {
      campers: [],
      list: 'recent'
    };
    _this7.getData = _this7.getData.bind(_this7);
    return _this7;
  }

  Layout.prototype.getData = function getData(dataUrl) {
    var _this = this;
    var xhr = new XMLHttpRequest(),
        method = 'GET',
        url = dataUrl;

    xhr.responseType = 'json';
    xhr.open(method, url);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        _this.setState({ campers: xhr.response.map(function (obj) {
            return obj;
          }) });
      }
    };
    xhr.send();
  };

  Layout.prototype.changeList = function changeList(list) {
    this.setState({ list: list });
    this.getData("https://fcctop100.herokuapp.com/api/fccusers/top/" + list);
  };

  Layout.prototype.render = function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Header, null),
      React.createElement(Leaderboard, { campers: this.state.campers, list: this.state.list, changeList: this.changeList.bind(this) }),
      React.createElement(Footer, null)
    );
  };

  Layout.prototype.componentDidMount = function componentDidMount() {
    this.getData("https://fcctop100.herokuapp.com/api/fccusers/top/" + this.state.list);
  };

  return Layout;
}(React.Component);

var app = document.getElementById('app');

ReactDOM.render(React.createElement(Layout, null), app);