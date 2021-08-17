import { leerMessages } from './../modules/app.js';

/**
 * DATOS A MANIPULAR
 */
const productos = []; //Array de productos
const dbIDs = []; //Array de los IDs de los productos
const lastID = { lastID: 0 }; //Ultimo ID de producto utilizado
const messages = [];

function checkMessagesOld() {
  let messageOld = JSON.parse(leerMessages());
  if (messageOld !== -1) {
    messages.push.apply(messages, messageOld);
  }
}

checkMessagesOld();
export { productos, dbIDs, lastID, messages };
