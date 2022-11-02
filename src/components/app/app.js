import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
// import EmployeesListItem from '../employees-list-item/employees-list-item';
import EmployeesList from '../employees-list/employees-list';
import './app.css'; 
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Alex M.', salary: 800, increase: false, id:1 },
                {name: 'Sam W.', salary: 1000, increase: true, id:2},
                {name: 'Ann C.', salary: 3000, increase: false, id:3},
            ]
        }
        this.maxId = 4;
    }
    deleteElem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }
    createElem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++,
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }
    render() {
        return(
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                     <SearchPanel/>
                     <AppFilter/>
                </div>
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteElem}/>
                     <EmployeesAddForm onAdd={this.createElem}/>
            </div>
        );
    }

    
}

export default App; 