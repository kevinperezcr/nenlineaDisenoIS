import React, { Component } from 'react';
import Client from './Client';
//import axios from 'axios';

class Dashboard extends Component {

  constructor(props){
    super(props);

    this.client = new Client();    
    this.state = { metodo:{} };
    this.client.metodoPOST(this.props.tam).then(result => this.setState({metodo:result}));    
    console.log("constructor...");


  }


  casilla(i, j){

    this.state.metodo.jugadaX = i;
    this.state.metodo.jugadaY = j;
    this.client.validarPOST(this.state.metodo).then(result => this.setState({metodo:result}));    
    
  }

  pintarGane(){
    if (this.state.metodo.gana===1){
      console.log("Gana fichas rojas")
      alert("Ganó el jugador con fichas rojas!");
     
    }
    else if(this.state.metodo.gana===2){
      console.log("Gana fichas amarillas")
      alert("Ganó el jugador con fichas amarillas!");
    }

  }
  setImageNinLine(wich){
    
    if(wich===0){

      return "./casilla.png";
    }

    else if(wich===1){

      return "./fichaJugador1.png";
    }

    else if(wich === 2){

      return "./fichaJugador2.png";
    }

    else if(wich === 3){
 
      return "./fichaGanaJugador1.png";
      
    }
    else if(wich === 4){
  
      return "./fichaGanaJugador2.png";
      
    }

    
    

  }

  render() {

      
      if(this.state.metodo.matriz !== undefined){

        console.log("if met.game "+this.state.metodo.juego);

        const style = {
       
          margin: 0,
          padding: 0,
          borderCollapse: "collapse"
        };

        return (
        

          <div className="dash">
              {console.log(this.state.metodo.gana)}
                     
            <div>
            
            <h1>Dashboard</h1>
              <table style={style}>
              <tbody>
                {this.state.metodo.matriz.map((listaFicha, index) => (
                <tr key={index}>
                  
                  {listaFicha.map((ficha, ind)=> (


                  <td style={style} key={index+ind+ficha} onClick={() => this.casilla(index, ind)}> <img src={this.setImageNinLine(ficha.status)} key={index+ind+ficha}  alt={ficha.status}/> </td>

                ))}
                
                
              
                </tr>
              ))}

              
            </tbody>

            
            </table>

           </div>

              {this.pintarGane()}
          </div>
    
        );
      }


      return (

        <div className="dash">

           <div className="Container">
            
             <img src="./loading2.gif" alt="loading"/>

           </div>

        </div>
  
      );
      
  
    
  }

}

export default Dashboard;



