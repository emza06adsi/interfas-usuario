import React from 'react'
import './styles/lista.css'
import api from '../app'
import unidad from './unidad'                  
import Unidad from './unidad'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'








function Lista(props) {

   let productos =props.productos;
   
   
    
   var state = {
            loading: true,
            error: null,
            data: undefined,
            pedido:new Array(),
            producto:undefined
        }
        
        async  function handleClick(event){
            // this.setState({ producto:await this.props.productos[event.target.id]  })
            state.producto=await productos[event.target.id];
            try{
                // console.log(this.state.producto)
                
                let $sumarCarrito=document.getElementById('sumarCarrito')
                let $overlay=document.getElementById('overlay')
                let $modal=document.getElementById('modal')
                let $nombreProducto= document.getElementById('nombreProducto')
                let $valorProducto=document.getElementById('valorProducto')
                $nombreProducto.innerText=state.producto.pro_nombre
                $valorProducto.innerText=state.producto.pro_valor
                debugger
                $modal.style.animation='modalIn .8s forwards'
                $overlay.classList.add('active')
                    
            }catch(error){
                console.log(error)
            }
            
        
        } 


   function ingresar(){
      let numero=-1
        return(
         
            productos.map(data=>{
            numero++
            return(
                
                        <section key={data.pro_id} className="lista">
                             <section className="lista-img">
                                 <img src={data.pro_imagen}></img>
                             </section>
                             <section className="lista-info">
    
                                <section className="lista-info_data"> 
                                     <p>{data.pro_nombre}</p>
                                    <p>$:{data.pro_valor}</p>
                                        <button id={numero} onClick={handleClick}>carrito</button>
                                        {/* <button id={numero} >carrito</button> */}
                                    
                                </section>

                            </section>
                        </section>

                    )
            
          })
      )
    }
    
    
        return(

                // <h1>{JSON.stringify(this.props.Productos)}</h1>
                    <div> 
<div className="form-group ">
                
                <div className="input-group mb-3">
                            
                            <input
                    type="text"
                    className="form-control"
                   placeholder="¿Que buscas?"
                   >
                                </input>
                                <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">
                                <img src="https://img.icons8.com/metro/20/000000/detective.png"/>
                                    {/* <img src="https://img.icons8.com/windows/20/000000/user-male.png" /> */}
                                </span>
                            </div>
                        </div>
                
            </div>                     
                {ingresar()}
            
                <Unidad  producto={state.producto}/>
               
                </div>
        )               
        }
                   
export default Lista;


