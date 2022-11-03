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
                {name: 'Alex M.', salary: 800, increase: false, rise: true, id:1 },
                {name: 'Sam W.', salary: 1000, increase: true, rise: false, id:2},
                {name: 'Ann C.', salary: 3000, increase: false, rise: false, id:3},
            ],
            term: "",
            filter: "all",
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
    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items 
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }
    onUpdateSearch = (term) => {
        this.setState({term});
    }
    filterPost = (items, filter) => {
        switch(filter) {
            case "rise": 
                return items.filter(item => item.rise);
            case "salaryMore":
                return items.filter(item => item.salary > 1000);
            default :
                return items;
        }
    }
    onFilterSelect = (filter) => {
        this.setState({filter});
    }
    render() {
        const {data, term, filter} = this.state;
        const allEmpl = this.state.data.length;
        const allInc = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter); 
        return(
            <div className="app">
                <AppInfo
                    allEmpl={allEmpl}
                    allInc={allInc}/>
                <div className="search-panel">
                     <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                     <AppFilter
                     filter={filter}
                     onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteElem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm onAdd={this.createElem}/>
            </div>
        );
    }
}

export default App; 