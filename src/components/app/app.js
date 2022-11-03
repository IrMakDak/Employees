import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel'
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import { Component } from 'react';

import './app.css'; 

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Alex M.', salary: 800, increase: false, like: true, id:1 },
                {name: 'Sam W.', salary: 1000, increase: true, like: false, id:2},
                {name: 'Ann C.', salary: 3000, increase: false, like: false, id:3},
            ]
        }
        this.maxId = 4;
    }
    deleteElem = (id) => {
        this.setState(({data}) => {
            return {data: data.filter((item) => item.id !== id)}
        })
    }
    createElem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++,
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }
    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    }
    render() {
        const allEmpl = this.state.data.length;
        const allInc = this.state.data.filter(item => item.increase).length;
        return(
            <div className="app">
                <AppInfo
                    allEmpl={allEmpl}
                    allInc={allInc}/>
                <div className="search-panel">
                     <SearchPanel/>
                     <AppFilter/>
                </div>
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteElem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm onAdd={this.createElem}/>
            </div>
        );
    }
}

export default App; 