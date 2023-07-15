import EmployeersListItem from "../employess-list-item/employees-list-item";
import './employees-list.css';

const EmployeersList = ({data, onDelete, onToggleRise, onToggleIncrease, onChangeSalary}) => {

  const elements = data.map(item => {
    const { id, ...itemProp } = item;
    return (
      <EmployeersListItem 
        key={id} 
        {...itemProp} 
        onDelete={() => onDelete(id)}
        onToggleIncrease={() => onToggleIncrease(id)}
        onToggleRise={() => onToggleRise(id)}
        onChangeSalary={(e) => onChangeSalary(e.target.value, e.target.id)}
        id={id}/>
    )
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
}

export default EmployeersList;