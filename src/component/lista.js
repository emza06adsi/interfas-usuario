import React from 'react'
import './styles/lista.css'
import api from '../app'
import Unidad from './unidad'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import DomiServicio from './domiservicio' 
function useSearchProductos(productos){
    
    const [query, setQuery] = React.useState('')
   const [filterProductos,setFilterProductos] = React.useState(productos)
   React.useMemo(()=>{
       const result= productos.filter(producto =>{
       return producto.pro_nombre.toLowerCase().includes(query.toLowerCase());
   });
   setFilterProductos(result)
},[productos, query])
   
return { query,  setQuery,filterProductos }

}

function Lista(props) {

   let productos =props.productos;

   const {query ,setQuery, filterProductos}= useSearchProductos(productos)

   var state = {producto:undefined}
        
   async  function handleClick(event){

  let $producto = JSON.parse(event.target.id)
  
  state.producto=await $producto;
        try{
            let $sumarCarrito=document.getElementById('sumarCarrito')
            let $overlay=document.getElementById('overlay')
            let $modal=document.getElementById('modal')
            let $nombreProducto= document.getElementById('nombreProducto')
            let $valorProducto=document.getElementById('valorProducto')
            let $productobtn=document.getElementById('productobtn').value=JSON.stringify(state.producto)
            $nombreProducto.innerText=state.producto.pro_nombre
            $valorProducto.innerText=0
            $modal.style.animation='modalIn .8s forwards'
            $overlay.classList.add('active')

        }catch(error){
            console.log(error)
        }
    } 


    function ingresar(){
        let numero=-1

        return(
         
            filterProductos.map(data=>{
                numero++
                return(
                
                <section key={data.pro_id} className    ="lista">
                    <section className="lista-img">
                        <img src={data.pro_imagen} width="100%"></img>
                    </section>
                    <section className="lista-info">
    
                        <section className="lista-info_data"> 
                            <p>{data.pro_nombre}</p>
                            <p>$:{data.pro_valor}</p>
                            <button id={JSON.stringify(data)} onClick={handleClick}>Carrito</button>
                        </section>

                    </section>
                </section>

            )
            
          }
        )
      )
    }
    
        if(filterProductos.length==0){
            return(
                <React.Fragment>
                <div className="form-group ">
                
                <div className="input-group mb-3">
                        
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="¿Que buscas?"
                            value={query}
                            onChange={(e)=>{
                                setQuery(e.target.value)}
                                }>
                    </input>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <img src="https://img.icons8.com/metro/20/000000/detective.png"/>
                        </span>
                    </div>
                </div>
                    <DomiServicio/>            
            </div>   
            </React.Fragment>
            )
        }
    
        return(

            <div> 
                <div className="form-group ">
                
                    <div className="input-group mb-3">
                            
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="¿Que buscas?"
                                value={query}
                                onChange={(e)=>{
                                    setQuery(e.target.value)}
                                    }>
                        </input>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <img src="https://img.icons8.com/metro/20/000000/detective.png"/>
                            </span>
                        </div>
                    </div>
                
                </div>                     
                {ingresar()}

                <Unidad  producto={state.producto}/>
                
                <DomiServicio/>                                                                                                                                         
                </div>
        )               
}
                   
export default Lista;


