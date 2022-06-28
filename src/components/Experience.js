import React from 'react'; 

class Experience extends React.Component {
    render() {
        return(
            <div>
                <input type="Text" placeholder="Company Name"></input>
                <input type="text" placeholder="Position Title"></input>
                <input type="text" placeholder="Main Tasks"></input>
                <label name="start date">Start Date: </label>
                <input type="date" name="start date"></input>
                <label name="end date">End Date: </label>
                <input type="date" name="end date"></input>
            </div>
        );
    }
}

export default Experience; 