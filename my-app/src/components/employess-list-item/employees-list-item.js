import './employees-list-item.css';

const EmployeersListItem = (props) => {

    const {name, salary, id, onDelete, onToggleIncrease, onToggleRise, increase, rise, onChangeSalary} = props;
   
    let classNames = "list-group-item d-flex justify-content-between";

    if(increase){
      classNames += " increase";
    }

    if(rise){
      classNames += " like";
    }
  
    return (
      <li className={classNames}>
        <span className="list-group-item-label"
          onClick={onToggleRise}>
            {name}
        </span>
        <input 
              type="text" 
              className="list-group-item-input"
              defaultValue={salary + "$"}
              id={id}
              onChange={onChangeSalary}/>
        <div className="d-flex justify-content-center align-items-center">
          <button 
              className="btn-cookie btn-sm"
              type="button"
              onClick={onToggleIncrease}>
            <i className="fas fa-cookie"></i>
          </button>
          <button 
              className="btn-trash btn-sm"
              type="button"
              onClick={onDelete}>
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
}

export default EmployeersListItem;