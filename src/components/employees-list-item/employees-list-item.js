import './employees-list-item.css';

import { Component } from 'react';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            rise: false
        }
    }

    checkIncreaseSalary = () => {
        this.setState(({ increase }) => ({
            increase: !increase,
        }));
    }

    riseEmployeesHandler = () => {
        this.setState(({ rise }) => ({
            rise: !rise
        }));
    };

    render() {
        const { name, surname, salary, onDelete } = this.props;
        const { increase, rise } = this.state;

        let classNames = 'list-group-item d-flex justify-content-between';
    
        if (increase) {
            classNames += ' increase';
        }

        if (rise) {
            classNames += ' like';
        }
    
        return (
            <li className={classNames}>
                <span onClick={this.riseEmployeesHandler} className="list-group-item-label">
                    {name} {surname}
                </span>
                <input type="text" className="list-group-item-input" defaultValue={salary + ' $'} />
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={this.checkIncreaseSalary} type="button" className="btn-cookie btn-sm">
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button onClick={onDelete} type="button" className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
};

export default EmployeesListItem;