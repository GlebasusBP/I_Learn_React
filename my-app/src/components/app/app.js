import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SeachPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeersList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [
        {name:'John S.', salary: 800, increase: true, rise: true, id: 1},
        {name:'Max M.', salary: 1000, increase: false, rise: false, id: 2},
        {name:'Alex K.', salary: 3000, increase: false, rise: false, id: 3},
      ],
      term: '',
      filter: 'all'
    }
    this.maxId = 4
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      // const index = data.findIndex( elem => elem.id === id);
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after];
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary) => {
    const newItem = {name, salary, increase: false, rise: false, id: this.maxId++}
    this.setState(({data}) => {
      return {
        data: [...data, newItem]
      }
    })
  }

  onToggleIncrease = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex( elem => elem.id === id);

      const old = data[index];
      const newItem = {...old, increase: !old.increase};

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

      return {
        data: newArr
      }
    })  
  }

  onToggleRise = (id) => {
    this.setState(({data}) => ({
      data: data.map( item => {
        if(item.id === id){
          return {...item, rise: !item.rise};
        }
        return item;
      })
    }))  
  }

  searchEmp = (items, term) => {
    if(term.length === 0) return items;
    return items.filter(i => {
      return i.name.indexOf(term) > -1;
    })
  }

  onUpdateSearch = (str) => {
    this.setState({term: str})
  }

  filterEmployees = (items, filter) => {
    switch(filter){
      case 'rise':
        return items.filter(item => item.rise);
      case 'moreThen1000':
        return items.filter(item => item.salary >= 1000);
      default:
        return items;
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  onChangeSalary = (strSalary, id) => {
    const newSalary = +strSalary.slice(0, strSalary.length - 1);

    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === +id);

      const old = data[index];
      const newItem = {...old, salary: newSalary};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    
      return {
        data: newArr
      }
    })
  }

  render(){
    const {data, term, filter} = this.state;
    const countEmployeers = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    const visibleData = this.filterEmployees(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo
          countEmployeers={countEmployeers}
          increased={increased}/>
  
        <div className="search-panel">
          <SeachPanel
            onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}/>
        </div>
  
        <EmployeersList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
          onChangeSalary={this.onChangeSalary}/>
        <EmployeesAddForm 
          onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;