import React from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      duplicates: []
    }
    // this.interaction = null;
  }

  // componentDidMount() {
  //   this.interaction = setTimeout(this.handleSubmit, 100);
  // }

  // componentDidUpdate() {
  //   clearTimeout(this.interaction);
  //   this.interaction = setTimeout(this.handleSubmit, 500);
  // }

  handleSubmit = () => {
    var numberArray = [7000,7001,7002,7003,7004,7005];
  var getUserInput;
  
  const getInputs = () => {
  getUserInput = document.getElementById("user-input").value.split(',');
  
  getUserInput.forEach(val => {
    if(val.includes('-')){
      let range = val.split('-');
      for(var i = parseInt(range[0].trim()); i <= range[1]; i++) {
        numberArray.push(i);
      }
    } else {
      numberArray.push(parseInt(val.trim()));
    }
  })
  }
  getInputs();
  
  const findDuplicates = () => {
    var obj = {};
          var result = [];
  
          numberArray.forEach(function (item) {
            if(!obj[item])
                obj[item] = 0;
              obj[item] += 1;
          })
         
  
          for (var i in obj) {
             if(obj[i] >= 2) {
                 result.push(i);
             }
          }
  
          return result;
  }
  
  var res = findDuplicates();
  if(res.length > 0) {
    this.setState({
      duplicates: res
    })
  } else if(getUserInput[0] === "") {
    alert("Input cannot be empty");
    getInputs();
  } else {
    alert("No Duplicates");
  }
  }

  render() {
    const { duplicates } = this.state;
    return (
      <div className="App">
        <input type="text" id="user-input" />
        <button onClick={this.handleSubmit}>Submit</button>
        <div>
          {
   duplicates.length > 0 && <div>{`The duplicates are `}
  {
    duplicates.map(val => <span>{val} </span>)
  }
  </div>
          }
        </div>
      </div>
    );
  }
  
}

export default App;
