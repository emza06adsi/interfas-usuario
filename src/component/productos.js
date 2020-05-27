import React from 'react'
import PageLoading from '../component/pageLoading'
import Lista from '../component/lista'
import api from '../app'
import { connect } from 'react-redux';
import * as  usuariosActions from '../actions/productosActions'
import FilterResults from 'react-filter-search';
class Productos extends React.Component{

    constructor(props) {
    
        super(props)

        this.state = {
            loading: true,
            error: null,
            data: undefined,
            value: ''
        }
    }
    componentDidMount(){
        
        this.props.traertTodos() 
        
        // console.log(this.props.trerTodos)
         this.fetchData()

        }

    fetchData = async () => {
        this.setState({ loading: true, error: null })

        try {
            let data = await api.tienda.listProductos()
            let data2=data.body;
            let data3=data2[0]
            // for(let i=0;i<data3.lengt;i++){
            //     debugger
            // }
            this.setState({ loading: false, data: data3 })
                        
        } catch (error) {
            this.setState({ loading: false, error: error })
            
        }
                
    }

    
    render(){
        console.log(this.props)

        if (this.state.loading === true) {
            return <PageLoading/>
        }else if(this.state.error){
            return (<h1>datas</h1>);
            // return `Eror: ${this.state.error.message}`;
          }    
          console.log(this.props)
          return(
            <React.Fragment>
                    <main className="main">
                        <article className="container-producto">
                                                   
                            <Lista productos={this.props.productos} />

                        </article>
                    </main>

            </React.Fragment>
        )
    }
}


const mapStateToProps = (reducers)=>{
    return reducers.productosReducer;
}
export default connect(mapStateToProps,usuariosActions)(Productos);
