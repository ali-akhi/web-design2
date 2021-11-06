import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";

class App extends React.Component {
  state = {
    color: "Blue"
  }
  onchangeHandler= e =>{
    this.setState({
      color: e.target.value
    })
  }
  render(){
    const styleObj= {
      background: this.state.color
    };
    return (
      <div style= {styleObj} className= "container">
        <div className= "ui card">
          <div className= "content">
            <div className= "header">
              رنگ: {this.state.color}
            </div>
            <div className= "ui search">
              <input 
                className="prompt"
                onChange={this.onchangeHandler}
                value= {this.state.color}
                type= "text"
              />
            </div>
          </div>
        </div>
      </div>  
    )
  }
  
}
export default App
ReactDOM.render(<App />, document.getElementById('root'));