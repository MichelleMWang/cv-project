import React from 'react'; 

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '', 
            email: '', 
            phone: ''
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handlePhoneChange = (event) => {
        this.setState({
            phone: event.target.value
        })
    }

    render() {
        return(
            <div>
                <form>
                    <input type="Text" placeholder="Your Name" value={this.state.name} onChange={this.handleNameChange}></input>
                    <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}></input>
                    <input type="text" placeholder="Phone Number" value={this.state.phone} onChange={this.handlePhoneChange}></input>
                </form>
            </div>
        );
    }
}

export default Header; 