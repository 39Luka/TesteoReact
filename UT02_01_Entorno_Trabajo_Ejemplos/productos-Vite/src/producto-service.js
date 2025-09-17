import { Http } from './http.js';
import { SERVER } from './constants.js';

export class ProductoService {
  #http;
  constructor() {
    this.#http = new Http();
  }

  async getProductos() {
    const resp = await this.#http.get(`${SERVER}/productos`);
    return resp.data;
  }

  async add(producto) {
    const resp = await this.#http.post(`${SERVER}/productos`, producto);
    return resp.data;
  }

  async delete(id) {
    const resp = await this.#http.delete(`${SERVER}/productos/${id}`);
    return resp.data;
  }
}