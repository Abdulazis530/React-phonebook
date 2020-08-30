import React from 'react'
import {postChat} from '../actions'
import {connect} from 'react-redux'

 class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', message: '' };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }

    handleChangeMessage(event) {
        this.setState({ message: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addChat(this.state.name, this.state.message);
        this.setState({name: '', message: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
            <input type="text" value={this.state.name} onChange={this.handleChangeName} />
                </label>
                <label>
                    Message:
            <input type="text" value={this.state.message} onChange={this.handleChangeMessage} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}




const mapDispatchToProps = (dispatch) => ({
    addChat: (name,message) => dispatch(postChat(name,message))
})

export default connect(
    null,
    mapDispatchToProps
)(TodoForm)