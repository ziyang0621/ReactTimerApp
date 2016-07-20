var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React Timer App
          </li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Time</IndexLink>
          </li>
          <li>
            <Link to="/" activeClassName="active-link">CountDown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Create by <a href="https://github.com/ziyang0621" target="_blank">Ziyang Tan</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Navigation;
