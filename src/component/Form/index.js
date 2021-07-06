import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formOpen: true,
            job: '',
            
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({ formOpen: !this.state.formOpen });
        const { job } = this.state;
        const content = { job };
        this.props.onSubmit(content);
    }

    render() {
        const button = <button className="btn btn-success" onClick={() => { this.setState({ formOpen: !this.state.formOpen }) }}>
            <i className="material-icons">Add Job</i></button>;
        const form = (
            <div className="container">
                <label>Job: </label> <input className="form-control" value={this.state.job} onChange={e => this.setState({ job: e.target.value })} />
                <br></br>
                <button className="btn btn-success form-control" onClick={this.onClick}>Add</button></div>
            );
        return this.state.formOpen ? form : button;
    }
}


