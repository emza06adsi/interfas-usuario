import React from 'react'
import './styles/carrito.css'
class Carrito extends React.Component{

    componentDidMount(){
        
    }

    compra(){

    }

    render(){
       return(
        <React.Fragment>

        <div className="overlayy" id="overlayy">
            <section className="modall" id="modall">

                <div >

                <table id="customers">
                    <thead>
                    <tr>
                        <th>producto</th>
                        <th>valor</th>
                        <th>cantidad</th>
                        <th>v.c.</th>
                    </tr>
                    </thead>
                    <tbody className="tbody" id="tabla">
                        
                    </tbody>
                </table>

                </div>

            </section>

        </div>


    </React.Fragment>
       )
    }


}
 
export default Carrito;




{/* <div>
<h1 id="nombreProducto"></h1>
<section className="modal-container">
    <div className="producto-modal">
        <div className="producto-valor"> <p><strong>valor</strong></p> <p id="valorProducto"></p> </div> 
        <div> <p><strong>cantidad</strong></p> <p id="cantidadProducto">1</p> </div>
    </div>
     <div className="btnsumar">
        <button onClick={this.handleClick}>
            +
        </button>
    </div>  
</section>

<div className="modal-buttons">
    <button className="btnModal" id="sumarCarrito" onClick={this.agregarCarrito}>Agregar</button>
</div>
</div> */}