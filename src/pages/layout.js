import React from 'react';
import './styles/layout.css'
import Header from '../component/header'
import Productos from '../component/productos'
class Layout extends React.Component{
    

    render(){
        return(
            <React.Fragment>
                <div className="body">
                    <Header></Header>        
{console.log("layout")}
                    <Productos/>    
                    <footer className="footer"></footer>
                </div>
            </React.Fragment>
        )
    }

}
export default Layout;