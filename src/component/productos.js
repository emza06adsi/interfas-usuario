import React from 'react'
import PageLoading from '../component/pageLoading'
import Lista from '../component/lista'
import api from '../app'

class Productos extends React.Component{

    constructor(props) {
    
        super(props)

        this.state = {
            loading: true,
            error: null,
            data: undefined
        }
    }
    componentDidMount(){
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
        if (this.state.loading === true) {
            return <PageLoading/>
        }else if(this.state.error){
            return (<h1>datas</h1>);
            // return `Eror: ${this.state.error.message}`;
          }    
        return(
            <React.Fragment>
                   
                    <main className="main">
                        <article className="container-producto">
                        {console.log("s")}                            
                            <Lista productos={this.state.data} />

                        </article>
                    </main>

            </React.Fragment>
        )
    }
}

export default Productos;