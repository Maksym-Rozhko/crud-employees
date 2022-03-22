import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            salary: '',
        };
    }

    onValueChange = (e) => {
        const target = e.target;

        this.setState({
        [target.name]: target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(
            this.state.name, 
            this.state.surname,
            this.state.salary
        );
        this.setState({
            name: '',
            surname: '',
            salary: '',
        });
    };

    render() {
        const { name, surname, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form onSubmit={this.onSubmit} className="add-form d-flex">
                    <input type="text" 
                        className="form-control new-post-label" 
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}    
                    />
                    <input type="text" 
                        className="form-control new-post-label" 
                        placeholder="Как его фамилия?"
                        name="surname"
                        value={surname}
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