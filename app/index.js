var React = require("react");
var ReactDOM = require('react-dom');
require('./index.css');

var App = require('./components/App');
// var About = require('./playgrounds/About');

ReactDOM.render(
    <App />, 
    document.getElementById('app')
);