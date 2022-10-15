import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({data}) => { //[{}, {}, {}]
     data = data.map((item) => {
        return(
            <EmployeesListItem  {...item}/>
        )
    })
    return (
        <ul className="app-list list-group">
            {data}
        </ul>
    );
}

export default EmployeesList;