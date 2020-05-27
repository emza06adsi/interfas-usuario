import FilterResults from 'react-filter-search';
import React from 'react' 
import SearchResults from './ayuda2' 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: ''
    };
  }
  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({ data: json }));
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  ingresar(){

    return(
        <div>
        {
        "dd"
        }
        </div>   
    )
}
  render() {
    // const { data, value } = this.state;
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        {this.ingresar}        
        {/* {console.log(this.state.data)} */}
        {/* <SearchResults data={this.state.data}/> */}
      </div>
    );
  }
}


export default App;

