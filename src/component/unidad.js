import React from 'react';
import './styles/unidad.css';
import { connect } from 'react-redux';
// import reducers from '../reducers/index'
var cantidad=0
var producto=[]
var cantidadArray=[] 
class Unidad extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            cantidad:1,
            valor:undefined,
            producto:undefined
        }
        this.handleClick = this.handleClick.bind(this)
        this.agregarCarrito=this.agregarCarrito.bind(this)    // this.new=this.new(this)
    }
    async handleClick(event){

    let valor=JSON.parse(event.target.value)
    
            this.setState({
                valor:await valor.pro_valor,
                producto:await valor
            }); 
            cantidad++
            document.getElementById('valorProducto').innerHTML=cantidad*this.state.valor
            document.getElementById('cantidadProducto').innerHTML=cantidad
            
        }
    
    agregarCarrito(){
    
        if (cantidad==0){
           alert("no hay productos para agregr al carrito") 
        }
else if(cantidad!==0){
    let $sumarCarrito=document.getElementById('sumarCarrito')
        let $overlay=document.getElementById('overlay')
        let $modal=document.getElementById('modal')
        $modal.style.animation='modalOut .8s forwards'
        $overlay.classList.remove('active')
        
        producto.push(this.state.producto)
        cantidadArray.push(cantidad)
        sessionStorage.setItem("productos",JSON.stringify(producto))
        sessionStorage.setItem("cantidades",JSON.stringify(cantidadArray))
        cantidad=0
        document.getElementById('cantidadProducto').innerHTML=cantidad
        console.log(sessionStorage)
}
    }
    
    render(){
        // console.log(this.props)
        return(
            <React.Fragment>

                <div className="overlay" id="overlay">
                    <section className="modal_" id="modal">
                        <div>
                            <h1 id="nombreProducto"></h1>
                            <section className="modal-container">
                                <div className="producto-modal">
                                    <div className="producto-valor"> <p><strong>Valor</strong></p> <p id="valorProducto"></p> </div> 
                                    <div> <p><strong>Cantidad</strong></p> <p id="cantidadProducto">0</p> </div>
                                </div>
                                 <div className="btnsumar">
                                    <button id="productobtn" onClick={this.handleClick}>
                                        +
                                    </button>
                                </div>  
                            </section>

                            <div className="modal-buttons">
                                <button className="btnModal" id="sumarCarrito" onClick={this.agregarCarrito}>Agregar</button>
                            </div>
                        </div>

                    </section>

                </div>


            </React.Fragment>
        )
    }

}

const mapStateToProps = (reducers)=>{
    return reducers.productosReducer;
}

export default connect(mapStateToProps,{/* Actions */})(Unidad)


