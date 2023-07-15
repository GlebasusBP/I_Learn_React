import { Component } from 'react';

import './search-panel.css';

class SeachPanel extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: ''
    }
  }

  onUpdateSearch = (event) => {
    const str = event.target.value;
    this.setState({term: str});
    this.props.onUpdateSearch(str)
  }

  render(){
    return (
      <input 
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        value={this.state.term}
        onChange={this.onUpdateSearch}
      />
    );
  }
}

export default SeachPanel;