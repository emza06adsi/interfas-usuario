import React from 'react'
import './styles/lista.css'
import api from '../app'
import unidad from './unidad'                  
import Unidad from './unidad'
class Lista extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            error: null,
            data: undefined,
            pedido:new Array()
        }
        this.handleClick = this.handleClick.bind(this)
    }
 
    handleClick(event){
    console.log(this.props.productos[event.target.id])
    
    //   debugger  
    }

    ingresar(){
      let numero=-1
        return(
          this.props.productos.map(data=>{
            numero++
            return(
                
                        <section key={data.pro_id} className="lista">
                             <section className="lista-img">
                                 <img src={data.pro_imagen}></img>
                             </section>
                             <section className="lista-info">
    
                                <div className="lista-info_data"> 
                                     <p>{data.pro_nombre}</p>
                                    <p>$:{data.pro_valor}</p>
                                        <button id={numero} onClick={this.handleClick}>carrito</button>
                                    
                                </div>

                            </section>
                        </section>

                    )
            
          })
      )
    }
    
    render(){
        return(

                // <h1>{JSON.stringify(this.props.Productos)}</h1>
                    <div> 
            
                {this.ingresar()}
            
                <Unidad />
               
                </div>
        )               
        }
    }                   
export default Lista;


