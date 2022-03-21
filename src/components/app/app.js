import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
    const data = [
        {
            name: 'John',
            surname: 'Smith',
            salary: 500,
            increase: true,
        },
        {
            name: 'Alex',
            surname: 'Mask',
            salary: 1000,
            increase: false,
        },
        {
            name: 'George',
            surname: 'Shepard',
            salary: 1500,
            increase: true,
        },
        {
            name: 'Elona',
            surname: 'Sagerse',
            salary: 1750,
            increase: true,
        },
        {
            name: 'Ignat',
            surname: 'Callel',
            salary: 750,
            increase: false,
        },
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployeesList data={data} />
            <EmployeesAddForm />
        </div>
    );
};

export default App;