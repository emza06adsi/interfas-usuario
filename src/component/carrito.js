import React from 'react'
import './styles/carrito.css'
import axios from 'axios' 

class Carrito extends React.Component{

    componentDidMount(){
        
    }

    cerrarmodal(){
        document.getElementById("overlayy").classList.remove('active')
        document.getElementById("modall").style.animation='modalOut .8s forwards'
        
    }

    cerrarModal(){
        document.getElementById("overlayyy").classList.remove('active')
        document.getElementById("modalll").style.animation='modalOut .8s forwards'
        window.location.reload()
    }
    
    hacerPedido(){
        if(document.getElementById("ubicación").value =="" ||
        document.getElementById("contacto").value ==""
        ){
            alert("Direccion o contacto no valido")
        }  else if(document.getElementById("ubicación").value !=""||
                  document.getElementById("contacto").value !=""){
            let  productos =[],cantidad =[],ubicacion=""; 
           productos= JSON.parse(sessionStorage.getItem("productos"))
           cantidad= JSON.parse(sessionStorage.getItem("cantidades"))
           var date = new Date();
           var segundo=date.getSeconds()
           var minuto=date.getMinutes()
           var hora= date.getHours()
           var dia = date.getDate();
           var mes = date.getMonth();
           var yyy = date.getFullYear();
           var fecha_formateada = yyy + '-' + mes + '-' + dia +" "+hora+":"+minuto+":"+segundo;
           console.log(fecha_formateada)
            let pedido={
               fecha:fecha_formateada,
               ubicacion:document.getElementById("ubicación").value,
               telefono:document.getElementById("contacto").value,
               productos:[]
            }
            if(cantidad!=null){
                for (let i=0;i<cantidad.length;i++){
                    pedido.productos.push(productos[i])
                    pedido.productos[i].pro_cantidad=cantidad[i]
                }
                    
                fetch('https://api-a-tu-servicio.herokuapp.com/api/pedidos/crearPedidos/', {
                    method: 'POST', // or 'PUT'
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(pedido),
                  })
                  .then(response => response.json())
                  .then(data => {
                    document.getElementById("overlayy").classList.remove('active')
                        document.getElementById("modall").style.animation='modalOut .8s forwards'
                        sessionStorage.removeItem("cantidades")
                        sessionStorage.removeItem("productos")
                        document.getElementById("overlayyy").classList.add('active')
                        document.getElementById("modalll").style.animation='modalInt .8s forwards'
                
                  })
                  .catch((error) => {
                    console.error('Error:', error);
                  });

            }else{
                alert("No hay productos en el carrito") 
            }
            
            
            
        }
        
        
        
    }

    render(){
       return(
        <React.Fragment>

        <div className="overlayy" id="overlayy">
            <section className="modall" id="modall" >

                <div >

                <table id="customers">
                    <thead>
                    <tr>
                        <th className="sticky">Producto</th>
                        <th className="sticky">Valor</th>
                        <th className="sticky">Cantidad</th>
                        <th className="sticky">V.C.</th>
                    </tr>
                    </thead>
                    <tbody className="tbody" id="tabla">
                        
                    </tbody>
                </table>

                <div className="divCompra">                
                    <input className="" placeholder="Ubicación" id="ubicación"> 

                    </input>
                    <input className="" placeholder="Telefono De Contacto" id="contacto" type="number"> 

                    </input>
                    <button className="btnModalCompra" onClick={this.hacerPedido} >
                        COMPRAR
                    </button>
                    <button className="btnModalVolver" onClick={this.cerrarmodal}>
                        VOLVER
                    </button>
                </div>
                </div>

            </section>

        </div>

            <div className="overlayy" id="overlayyy" onClick={this.cerrarModal}>
            <section className="modall" id="modalll" >

                <div>
                    <h1>Gracias por tu pedido en unos minutos estaremos en la puerta de tu casa.</h1>
                </div>

                

            </section>

        </div>


    </React.Fragment>
       )
    }


}
 
export default Carrito;
