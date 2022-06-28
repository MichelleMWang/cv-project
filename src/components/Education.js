import React from 'react'; 

class Education extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            education: [] 
        }
    }

    addEducationState = () => { //happens when click add education button. creates new edu object inside of state 
        let newEdu = {
            school: '', 
            title: '', 
            start: '', 
            end: '', 
            id: this.state.education.length 
        }
        let edu = this.state.education.unshift(newEdu); 
        this.setState({edu}); 
    }

    handleSchoolChange = (e) => {
        const { name, id } = e.target; 
        console.log(name + ' and ' + id)
        this.setState((prevState) => {

        })
    }

    renderEducation = () => {
        return this.state.education.map((ticket) => {
            return(
                <form key={ticket.id}>
                    <input type="Text" placeholder="School Name" value={ticket.school} onChange={this.handleSchoolChange}></input>
                    <input type="text" placeholder="Title of Study"></input>
                    <label name="start date">Start Date: </label>
                    <input type="date" name="start date"></input>
                    <label name="end date">End Date: </label>
                    <input type="date" name="end date"></input>
                </form>
            ); 
        }); 
    }


    render() {
        return(
            <div>
                <button onClick={this.addEducationState}>+ Add Education</button>
                {this.renderEducation()}
            </div>
        );
    }
}

export default Education; 