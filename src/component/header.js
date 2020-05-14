import React from 'react';
import './styles/header.css'
import Carrito from './carrito'

// import '../../node_modules/bootstrap/dist/css/bootstrap.css'

class Header extends React.Component{

    modalCarrito (){
    let $overlay = document.getElementById('overlayy')
    let $modal= document.getElementById('modall')        
        $modal.style.animation='modalInt .8s forwards'
        $overlay.classList.add('active')        
        let cantidades=[]
        cantidades=JSON.parse(sessionStorage.getItem("cantidades"))
        if(sessionStorage.length==0){
            document.getElementById('tabla').innerHTML=`
                    
            <tr>
            <td>no</td>
            <td>tenemos</td>
            <td>nada</td>
            <td>en carrito</td>
        </tr>

            `
        }
        else{
            
            let productos=[]
            
            productos=JSON.parse(sessionStorage.getItem("productos"))
            
            let total=0
            let datosP="",
            
            cantidadP,
            totalp
             for(var i=0;i<cantidades.length;i++){  
                
                datosP+=`
                    
                <tr>
                <td><img src="${productos[i].pro_imagen}" width="35px"/></td>
                <td>${productos[i].pro_valor}</td>
                <td>${cantidades[i]}</td>
                <td>${cantidades[i]*productos[i].pro_valor}</td>
            </tr>

                `
                total+=cantidades[i]*productos[i].pro_valor
            }

            datosP+=`
                    
                <tr>
                    <th>TOTAL</th>
                    <th></th>
                    <th></th>
                    <th>${total}</th>
                </tr>

                `

            document.getElementById('tabla').innerHTML=datosP
            
        }
        // <td>${productos[i].pro_valor}</td>
        // <td>${cantidades[i]}</td>
        // <td>${cantidades[i]*productos[i].pro_valor}</td>
  
       
    }

    render(){
        return(
            <React.Fragment>
                <header className="header">
                    <div className="header-opsiones">
                        <div>
                            <p>
                                {"A TU SERVICIO"}
                            </p>
                        </div>
                        <div className="header-opsiones_input">
                            <div className="col-auto">
                                <div className="input-group">
                                    <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Que buscas?"/>
                                    <div className="input-group-prepend" >
                                        <div>
                                        <img src="https://img.icons8.com/windows/32/000000/search.png"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div onClick={this.modalCarrito}>
                            <img src="https://img.icons8.com/color/48/000000/shopping-cart.png"/>
                        </div>
                        
                    </div>
                </header>

            <Carrito/>

            </React.Fragment>
        )
    }
} 
export default Header;