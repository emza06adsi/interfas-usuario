import React from 'react';
import './styles/domiServicio.css'
class DomiServicio extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            pedido:[]
        };

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {

        this.setState({
            [e.target.name]: e.target.value

        });

    };

    handleSubmit = async e => {
        e.preventDefault();
       
       let $domioverlay=document.getElementById("domioverlay")
       let $domimodal=document.getElementById("domimodal")        
       $domioverlay.classList.add("active");
       $domimodal.style.animation='domiModalIn .8s forwards'
       
    };

    volver = ()=>{
        
        let $domioverlay=document.getElementById("domioverlay")
        let $domimodal=document.getElementById("domimodal")        
        $domioverlay.classList.remove("active");
        $domimodal.style.animation='domiModalOut .8s forwards'
         
    }

    cerrarModal=()=>{
        let $domioverlayOk = document.getElementById("domioverlayOk").classList.remove("active");         
        let $domimodalOk=document.getElementById("domimodalOk").style.animation='domiModalOut .8s forwards'
        
    }
    domiPedido=() =>{
            let domiPedido=[]
            domiPedido.pedido= this.state.encargo
            domiPedido.telefono= this.state.telefono
            domiPedido.direccion= this.state.direccion
            fetch("http://localhost:3001/api/domiServicio/", {
                method: 'POST', // or 'PUT'
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({pedido:this.state.encargo,
                                        telefono:this.state.telefono,
                                        direccion:this.state.direccion}),
              })
              .then(response => response.json())
              .then(data => {
                let $domioverlay=document.getElementById("domioverlay")
                let $domimodal=document.getElementById("domimodal")        
                let $domioverlayOk = document.getElementById("domioverlayOk")         
                let $domimodalOk=document.getElementById("domimodalOk")
                $domioverlay.classList.remove("active");
                $domimodal.style.animation='domiModalOut .8s forwards'
                $domioverlayOk.classList.add("active");
                $domimodalOk.style.animation='domiModalIn .8s forwards'
                
                })
              .catch((error) => {
                console.error('Error:', error);
              });
           
    }

render(){
  return(
<React.Fragment>      
 <div className="domiContainer">
    <p>¿No encontraste lo que buscas?</p>
    <p>!No hay problema, has un <strong>domi-servicio! </strong> </p>
    <form onSubmit={this.handleSubmit} className="domiContainer-form">
        <div className="domiContainer-form_div">
            <label>Encargo:</label>
            <textarea
             placeholder="Ejem: 2000 de pan donde Chucho"
             name="encargo"
             id="encargo"
             onChange={this.handleChange}
             value={this.state.domiencargo}
             autocomplete="off"
             required>
                 
            </textarea>

        </div>
        <div className="domiContainer-form_div">
            <label>Dirección de envió:</label>
            <input placeholder="Ejm:calle 85 sur #12 -b"
            type="text"
            name="direccion"
            id="direccion"
            onChange={this.handleChange}
            value={this.state.domidireccion}
            autocomplete="off"
            required> 
            </input>
        
        </div>
        <div className="domiContainer-form_div">
            <label>Teléfono de contacto:</label>
            <input 
            type="number"
            id="telefono"
            placeholder="Ejm:3204204107"
            name="telefono"
            onChange={this.handleChange}
            value={this.state.domitelefono}
            autocomplete="off"
            required> 
             
        </input>

        </div>
            <div className="domiContainer-form_div">
            <button className="domiContainer-form_div-btn"  >
            DOMI-SERVICIO
            </button>

        </div>
        
    </form>
    </div>
    
    <div className="domioverlay" id="domioverlay" onClick={this.cerrarModal}>
            <section className="domimodal" id="domimodal" >
                <div className="domimodal-div">
                    <p>Domi servicio tiene un costo de $500</p>
                    <p>¿deseas continuar?</p> 
                </div>

                <div className="domimodal-btn">
                <button className="domiContainer-form_div-btn" onClick={this.domiPedido}>
                Aceptar
                </button>
                <button className="domiContainer-form_div-btnn"  onClick={this.volver}>
                Rechazar    
                </button>
                </div>
                
            </section>
    </div>
    <div className="domioverlay" id="domioverlayOk" onClick={this.cerrarModal}>
        <section className="domimodal" id="domimodalOk" >

            <div>
                <h3>Gracias por tu pedido</h3> 
                <h4>en unos minutos estaremos</h4>
                <h4> en la puerta de tu casa.</h4>
            </div>

        </section>

    </div>

    </React.Fragment>
    
  )  
}

}

export default DomiServicio;

