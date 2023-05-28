import React from "react";

class Example extends React.Component {
    state = {
        name: 'Truc',
        id: 'SE123'
    }

    onChangName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleClickButton = () => {
        alert('You can do it.');
    }
    render() {
        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text" onChange={(event) => this.onChangName(event)} />
                    My name is {this.state.name}
                </div>
                <div className="second">My ID student is: {this.state.id}</div>
                <div className="third">
                    <button onClick={() => { this.handleClickButton() }}>Click Me</button>
                </div>
            </>
        )
    }
}

export default Example;