import React, { Component } from 'react'

class ShowInput extends Component {
	state = {
    	userInput: ''
    }
	
	updateUserInput = (userInput) => {
    	this.setState(() => ({
        	userInput: userInput
        }))
    }
	
	render() {
      	const { userInput } = this.state
		
      	return (
      		<div className="container">
          <input 
          	type="text" 
          	placeholder="Say Something"
          	value={userInput}
			onChange={(event) => this.updateUserInput(event.target.value)}/>
          <p className="echo">Echo:</p>
          <p>{userInput}</p>
        </div>
      )
    	
    }
}

export default ShowInput