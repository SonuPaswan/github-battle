var React = require('react');
var Link = require('react-router-dom').Link;

const About = () => {
    return (
        <BrowserRouter>
            <ul>
                <li>
                    <Link to='/'>About</Link>
                </li>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/contactus'>Contact Us</Link>
                </li>
            </ul>
      </BrowserRouter>
    )
}

module.exports = About;

