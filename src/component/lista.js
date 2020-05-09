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
            pedido:new Array(),
            producto:undefined
        }
        this.handleClick = this.handleClick.bind(this)
    }
 

 async  handleClick(event){
        this.setState({ producto:await this.props.productos[event.target.id]  })
            try{
            console.log(this.state.producto)
            let $sumarCarrito=document.getElementById('sumarCarrito')
            let $overlay=document.getElementById('overlay')
            let $modal=document.getElementById('modal')
            let $nombreProducto= document.getElementById('nombreProducto')
            let $valorProducto=document.getElementById('valorProducto')
            $nombreProducto.innerHTML=this.state.producto.pro_nombre
            $valorProducto.innerHTML=this.state.producto.pro_valor
            // console.log(this.state.producto.pro_nombre)
            $modal.style.animation='modalIn .8s forwards'
            $overlay.classList.add('active')
    
        }catch(error){
            console.log(error)
        }
        
    
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
            
                <Unidad  producto={this.state.producto}/>
               
                </div>
        )               
        }
    }                   
export default Lista;


