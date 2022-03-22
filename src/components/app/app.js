import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: 'John',
                    surname: 'Smith',
                    salary: 500,
                    increase: true,
                    id: 1,
                },
                {
                    name: 'Alex',
                    surname: 'Mask',
                    salary: 1000,
                    increase: false,
                    id: 2,
                },
                {
                    name: 'George',
                    surname: 'Shepard',
                    salary: 1500,
                    increase: true,
                    id: 3,
                },
                {
                    name: 'Elona',
                    surname: 'Sagerse',
                    salary: 1750,
                    increase: true,
                    id: 4,
                },
                {
                    name: 'Ignat',
                    surname: 'Callel',
                    salary: 750,
                    increase: false,
                    id: 5,
                },
            ],
        }
    }
    
    deleteItem = (id) => {
        this.setState(({ data }) => {
            // const index = data.findIndex(elem => elem.id === id);
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [...before, ...after];

            return {
                data: data.filter(item => item.id !== id)
            }
        });
    }

    render() {
        const { data } = this.state;

        return (
            <div className="app">
                <AppInfo />
    
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList data={data} onDelete={this.deleteItem} />
                <EmployeesAddForm />
            </div>
        );
    }
};

export default App;