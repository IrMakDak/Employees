import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
// import EmployeesListItem from '../employees-list-item/employees-list-item';
import EmployeesList from '../employees-list/employees-list';
import './app.css'; 
import EmployeesAddForm from '../employees-add-form/employees-add-form';
// import { Component } from 'react';

function App() {

    

    const data = [
        {name: 'Alex M.', salary: 800, increase: false},
        {name: 'Sam W.', salary: 1000, increase: true},
        {name: 'Ann C.', salary: 3000, increase: false},
    ];

    return(
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                 <SearchPanel/>
                 <AppFilter/>
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
            {/* <EmployeesListItem/> */}
        </div>
    );
}

export default App; 