import React from 'react';
import './styles/header.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

class Header extends React.Component{

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
                            <div class="col-auto">
                                <label
                                     class="sr-only"
                                    for="inlineFormInputGroup">
                                        Username
                                </label>
                                <div class="input-group mb-2">
                                    <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username"/>
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                        <img src="https://img.icons8.com/windows/16/000000/search.png"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="https://img.icons8.com/color/48/000000/shopping-cart.png"/>
                        </div>
                        
                    </div>
                </header>
            </React.Fragment>
        )
    }

} 
export default Header;