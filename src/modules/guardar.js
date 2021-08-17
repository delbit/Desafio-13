import Producto from '../class/producto.js';
import { productos, dbIDs, lastID } from './data.js';

export function guardarFromForm(data) {
  let flagError = false;
  const msgErrorParametros = 'Parámetros no validos';

  if (data.title === undefined || data.title === '') {
    flagError = true;
  }

  if (data.price === undefined || data.price === '') {
    flagError = true;
  }

  if (isNaN(parseFloat(data.price))) {
    flagError = true;
  }

  if (data.thumbnail === undefined || data.thumbnail === '') {
    flagError = true;
  }

  if (flagError) {
    return 400;
  } else {
    lastID.lastID = lastID.lastID + 1; // Se incrementa el lastID por que se va a guarda un nuevo valor.

    const objProducto = new Producto(
      data.title,
      data.price,
      data.thumbnail,
      lastID.lastID
    );
    productos.push(objProducto);
    dbIDs.push(lastID.lastID);
    return 200;
  }
}
