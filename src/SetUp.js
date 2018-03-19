import React, { Component } from 'react';
import Client from './Client';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';

class SetUp extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
       
      }
    
      handleSubmit(event) {
        alert('El tamaño elegido es: ' + this.state.value);
        event.preventDefault();
        ReactDOM.render(
            <Dashboard tam={this.state.value} />,
            document.getElementById('root')
          );
      }
    
      render() {
        return (
            <div className="container">
            <br></br>
            <hr></hr>
            <form onSubmit={this.handleSubmit}>
              <label>
                Tamaño de tablero:
              </label>
                <div className="form-group row">
                  <div className="col-xs-3">
                    <input className="form-control" type="number" placeholder="Digite tamaño" required min="1" value={this.state.value} onChange={this.handleChange} />
                  </div>

                  <input className="btn"  type="submit" value="OK" />
              </div>
          </form>
            
            </div>
          
        );
      }
    }
export default SetUp;



