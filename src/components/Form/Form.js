import React, {} from 'react'

class Form extends Component {
	constructor(props) {
		super(props)

		this.state = {
			modulename: '',
			moduleid:'',
			comments: '',
			time:'',
			date:'',
			topic: 'react'
		}
	}

	handleModulenameChange = event => {
		this.setState({
			modulename: event.target.value})
		}

		handleModuleidChange = event => {
			this.setState({
				moduleid: event.target.value})
			}	
	

	handleDesceriptiontsChange = event => {
		this.setState({
			description: event.target.value
		})

	}


	handletimeChange = event => {
		this.setState({
			time: event.target.value
		})
	}

	handleStartdateChange = event => {
		this.setState({
			date: event.target.value
		})
	}

	handleSubmit = event => {
		alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
		event.preventDefault()
	}

	render() {
		const { username, comments, topic } = this.state
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>Modulename </label>
					<input
						type="text"
						value={modulename}
						onChange={this.handleModulenameChange}
					/>
				</div>

				<div>
					<label>ModuleID </label>
					<input
						type="text"
						value={moduleid}
						onChange={this.handleModuleidChange}
					/>
				</div>

				<div>
					<label>Description</label>
					<textarea
						value={description}
						onChange={this.handleDescriptiontsChange}
					/>
				</div>

				<div>
					<label>Tasks</label>
					<textarea
						value={task}
						onChange={this.handletaskChange}
					/>
				</div>

				
				<div>
					<label>Estimate Time</label>
					<input
						type="Time"
						value={time}
						onChange={this.handletimeChange}
					/>
				</div>

				
				<div>
					<label>Start Date</label>
					<input
						type="Date"
						value={Sdate}
						onChange={this.handleStartdateChange} 
					/>
				</div>

				
				<div>
					<label>Estimate End date</label>
					<input
						type="Date"
						value={Edate}
						onChange={this.handledateChange}
					/>
				</div>
				
				<button type="set">create</button>
				<button type="rest">Reset</button>
			</form>
		)
	}
}

export default Form