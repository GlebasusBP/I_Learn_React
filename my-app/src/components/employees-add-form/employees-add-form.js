import { Component } from 'react';
 
import './employees-add-form.css';

class EmployeesAddForm extends Component {

constructor(props){
  super(props);
  this.state = {
    name: '',
    salary: ''
  }
}

onChangeInput = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

onSubmit = (event) => {
  event.preventDefault();
  if(this.state.name.length < 3 || !this.state.salary) return;
  this.props.onAdd(this.state.name, this.state.salary);
  this.setState({
    name: '',
    salary: ''
  })
}

render() {
  const {name, salary} = this.state;

  return (
    <div className="app-add-form">
      <h3>Добавить нового сотрудника</h3>
      <form className="add-form d-flex"
            onSubmit={this.onSubmit}>
        <input 
            type="text" 
            className="form-control new-post-label" 
            placeholder="Его имя"
            name="name"
            value={name}
            onChange={this.onChangeInput}
            />
        <input 
            type="number" 
            className="form-control new-post-label" 
            placeholder="Его З/П в $"
            name="salary"
            value={salary}
            onChange={this.onChangeInput}
            />
        <button
            className="btn btn-outline-light"
            type="submit">
          Добавить
        </button>
      </form>
    </div>
  );
 }
}

export default EmployeesAddForm;