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
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <h5>Clicky Game!</h5>
                </li>
                <li className="nav-item">
                    <p className="counter-text">
                        Score: {this.state.count}
                    </p>
                </li>
            </ul>
        )
    }
}

export default Navbar