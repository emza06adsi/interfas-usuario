import React from 'react';
import './styles/header.css'
// import '../../node_modules/bootstrap/dist/css/bootstrap.css'

class Header extends React.Component{

    alerta (){
        console.log(sessionStorage)
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
                        <div onClick={this.alerta}>
                            <img src="https://img.icons8.com/color/48/000000/shopping-cart.png"/>
                        </div>
                        
                    </div>
                </header>
            </React.Fragment>
        )
    }
} 
export default Header;