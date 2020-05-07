import React from 'react'
import './styles/lista.css'
var productos                    
class Lista extends React.Component{

    ingresar(){
      return(
          this.props.productos.map(data=>{
              return(
                        <section key={data.pro_id} className="lista">
                             <section className="lista-img">
                                 <img src={data.pro_imagen}></img>
                             </section>
                             <section className="lista-info">
    
                                <div className="lista-info_data"> 
                                     <p>{data.pro_nombre}</p>
                                    <p>$:{data.pro_valor}</p>
                                    <button>carrito</button>
                                </div>

                            </section>
                        </section>

                    )
          })
      )
    }
    
    render(){
        return(

                // <h1>{JSON.stringify(this.props.Productos)}</h1>
                    <div> 
            
                {this.ingresar()
            }
                </div>
        )               
        }
    }                   
export default Lista;


// {
    // console.log(this.props.datas.body[0])
// this.props.datas.body[0].map((data) => {
//     console.log("kjkj")
//     return(
//         <tr key={data.data.pro_id}>
//         <td>j</td>
//         <td>h</td>
//         <td>j</td>
//         <td>s</td>
//         <td>d</td>
//     </tr>
// <section key={data.pro_id} className="lista">
//                             <section className="lista-img">
//                                 <img src={data.pro_imagen}></img>
//                             </section>
//                         <section className="lista-info">
    
//                             <div className="lista-info_data"> 
//                                 <p>{"this.props.nombre"}</p>
//                                 <p>$:{"this.props.valor"}</p>
//                                 <button>carrito</button>
//                             </div>

//                         </section>
//                     </section>


    // )
    
// })

// }
