import React from 'react'
import './styles/unidad.css'
class Unidad extends React.Component{

    agregarCarrito(){
        let $sumarCarrito=document.getElementById('sumarCarrito')
        let $overlay=document.getElementById('overlay')
        let $modal=document.getElementById('modal')
        
        $modal.style.animation='modalOut .8s forwards'
        $overlay.classList.remove('active')
    }
    render(){
        return(
<React.Fragment>

<div className="overlay active" id="overlay">
<section className="modal " id="modal">
<div>
<h1>Atencion</h1>
<p>Estas por hacer un modal muy chevere</p>
<p>Te gusto</p>
<div className="modal-buttons">
            <button className="btnModal" id="sumarCarrito" onClick={this.agregarCarrito}>si, esta chido</button>
</div>
</div>


</section>

</div>

{/* <article className="modal-overlay" id="modal-overlay">

    
    <div className="modal-buttons">
        <button onClick={this.cerrarModal} className="form-control btn btn-success">volver</button>
    </div>

</article> */}




</React.Fragment>
        )
    }

}
export default Unidad