import axios from 'axios'
export const traertTodos=   ()  =>async (dispatah)   =>  {
    

 const respuesta= await axios.get('https://api-a-tu-servicio.herokuapp.com/api/tienda');
    // console.log(respuesta.data.body[0])    
     
    dispatah({
        type:'traer_productos',
        payload:respuesta.data.body[0]

        // payload:[
        //     {"pro_id":1,
        //     "pro_tipo_producto":"dulceria",
        //     "pro_nombre":"RIZADAS PAPAS",
        //     "pro_cantidad":12,
        //     "pro_valor":1300,
        //     "pro_imagen":"http://localhost:3001/api/tienda/imagenes/1_RIZADAS PAPAS.jpg"},
        //     {"pro_id":2,"pro_tipo_producto":"dulceria","pro_nombre":"bonbonbun","pro_cantidad":80,"pro_valor":300,"pro_imagen":"http://localhost:3001/api/tienda/imagenes/2_bonbonbun.jpg"},{"pro_id":3,"pro_tipo_producto":"dulceria","pro_nombre":"super ricas","pro_cantidad":12,"pro_valor":1200,"pro_imagen":"http://localhost:3001/api/tienda/imagenes/3_super ricas.jpg"},{"pro_id":4,"pro_tipo_producto":"dulceria","pro_nombre":"JET CALCIO","pro_cantidad":24,"pro_valor":600,"pro_imagen":"http://localhost:3001/api/tienda/imagenes/4_JET CALCIO.jpg"},{"pro_id":5,"pro_tipo_producto":"dulceria","pro_nombre":"MINIBUN MEGA","pro_cantidad":100,"pro_valor":100,"pro_imagen":"http://localhost:3001/api/tienda/imagenes/5_MINIBUN MEGA.jpg"}]
    }) 

}




// this.setState({ loading: true, error: null })

        // try {
        //     let data = await api.tienda.listProductos()
        //     let data2=data.body;
        //     let data3=data2[0]
        //     // for(let i=0;i<data3.lengt;i++){
        //     //     debugger
        //     // }
        //     this.setState({ loading: false, data: data3 })
                        
        // } catch (error) {
        //     this.setState({ loading: false, error: error })
            
        // 