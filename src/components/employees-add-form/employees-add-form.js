import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            salary: '',
        };
    }

    onValueChange = (e) => {
        const target = e.target;

        this.setState({
        [target.name]: target.value
        })
    };

    render() {
        const { firstName, lastName, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex">
                    <input type="text" 
                        className="form-control new-post-label" 
                        placeholder="Как его зовут?"
                        name="firstName"
                        value={firstName}
                        onChange={this.onValueChange}    
                    />
                    <input type="text" 
                        className="form-control new-post-label" 
                        placeholder="Как его фамилия?"
                        name="lastName"
                        value={lastName}
                        onChange={this.onValueChange}    
                    />
                    <input type="number" 
                        className="form-control new-post-label" 
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}    
                    />
                    <button type="submit" className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
};

export default EmployeesAddForm;