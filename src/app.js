const BASE_URL = 'https://api-a-tu-servicio.herokuapp.com';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  tienda: {
    listPedidosActivos() {
      // return fetch('http://localhost:3001/api/pedidos/')
      return callApi('/api/pedidos/pedido/activo');

    },
    listPedidosInactivos() {
      // return fetch('http://localhost:3001/api/pedidos/')
      return callApi('/api/pedidos/pedido/inactivos');
    },
    listClientes() {
      // return fetch('http://localhost:3001/api/pedidos/')
      return callApi('/api/user/');
    }, listProductos() {
      // return fetch('http://localhost:3001/api/pedidos/')
      return callApi('/api/tienda/');
    }, listProductosPorId(id) {
      // return fetch('http://localhost:3001/api/pedidos/')
      return callApi(`/api/pedidos/${id}`);
    },
    
    updateProductos(data) {
      return callApi(`/api/tienda/`, {
        method: 'PUT',
        body: JSON.stringify(data),
      });
    },
    logearUsuario(data) {
      return callApi(`/auth/login`, {
        method: 'post',
        body: JSON.stringify(data),
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(badgeId) {
      return callApi(`/badges/${badgeId}`, {
        method: 'DELETE',
      });
    },
  },
};

export default api;
