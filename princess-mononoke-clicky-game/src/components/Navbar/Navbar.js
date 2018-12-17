import React from "react"
import "./Navbar.css"

class Navbar extends React.Component {

    state = {
        notCount: '',
        count: 0
    }

    handleIncrement = () => {
        this.setState({ count:this.state.count + 1 })
    }

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <h5>Clicky Game!</h5>
                    </li>
                </ul>
                <span className="navbar-text">
                    Score: {this.state.count}
                </span>
            </nav>
        )
    }
}

export default Navbar