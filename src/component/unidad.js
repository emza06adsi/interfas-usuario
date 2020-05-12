import React from 'react';
import './styles/unidad.css';
import { connect } from 'react-redux';
// import reducers from '../reducers/index'
var cantidad=1
class Unidad extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            cantidad:1,
            valor:undefined,
            productos:[]
        }
        this.handleClick = this.handleClick.bind(this)
        // this.new=this.new(this)
    }
    async handleClick(){
            this.setState({valor:await this.props.producto.pro_valor}) 
            // this.setState({cantidad:await this.state.cantidad+1})
            cantidad++
            console.log(cantidad*this.state.valor) 
            document.getElementById('valorProducto').innerHTML=cantidad*this.state.valor
            document.getElementById('cantidadProducto').innerHTML=cantidad
            // document.getElementById('valorProducto').innerHTML=this.state.valor
    }
    
    agregarCarrito(){
    
        let $sumarCarrito=document.getElementById('sumarCarrito')
        let $overlay=document.getElementById('overlay')
        let $modal=document.getElementById('modal')
        $modal.style.animation='modalOut .8s forwards'
        $overlay.classList.remove('active')
        cantidad=1
        document.getElementById('cantidadProducto').innerHTML=cantidad
    }
    
    render(){
        // console.log(this.props)
        return(
            <React.Fragment>

                <div className="overlay" id="overlay">
                    <section className="modal " id="modal">
                        <div>
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


