import React, { useState } from 'react';
import Modal from 'react-modal';
import Axios from 'axios';
import './StylesBoletos.css';

function Boletos() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [viajes, setViajes] = useState([]);
  const [origen, setOrigen] = useState('todos');
  const [destino, setDestino] = useState('todos');
  const [fecha, setFecha] = useState('');

  const handleBuscarViajes = async () => {
    try {
      const response = await Axios.post(
        'http://localhost:3001/buscarViajes',
        {
          origen: origen,
          destino: destino,
          fecha: fecha,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setViajes(response.data);
      setModalIsOpen(true);
    } catch (error) {
      console.error('Error al buscar viajes:', error);
      if (error.response) {
        // La solicitud fue hecha y el servidor respondió con un estado diferente a 2xx
        console.error('Respuesta del servidor:', error.response.data);
      } else if (error.request) {
        // La solicitud fue hecha pero no se recibió ninguna respuesta
        console.error('No se recibió respuesta del servidor');
      } else {
        // Algo sucedió en la configuración de la solicitud que provocó que se lanzara un error
        console.error('Error de configuración en la solicitud:', error.message);
      }
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="fondo-div">
        <div className="contenido-div">
          <div className="input-group">
            <label htmlFor="origen">Dirección de origen:</label>
            <select id="origen" value={origen} onChange={(e) => setOrigen(e.target.value)}>
              <option value="todos">Todos</option>
              <option value="CDMX">CDMX</option>
              <option value="Monterrey">Monterrey</option>
              <option value="Guadalajara">Guadalajara</option>
              <option value="Tampico">Tampico</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="destino">Dirección de destino:</label>
            <select id="destino" value={destino} onChange={(e) => setDestino(e.target.value)}>
              <option value="todos">Todos</option>
              <option value="CDMX">CDMX</option>
              <option value="Monterrey">Monterrey</option>
              <option value="Guadalajara">Guadalajara</option>
              <option value="Tampico">Tampico</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="input3">Fecha:</label>
            <input type="date" id="input3" value={fecha} onChange={(e) => setFecha(e.target.value)} />
          </div>

          <div className="input-group">
            <button
              type="button"
              onClick={handleBuscarViajes}
              className="flex w-250px justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Buscar
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Resultados de Búsqueda</h2>
        <div>
          {viajes.map((viaje) => (
            <div key={viaje.id}>
              <p>Fecha: {viaje.Fecha}</p>
              <p>Origen: {viaje.Origen}</p>
              <p>Destino: {viaje.Destino}</p>
              <p>Hora: {viaje.Hora}</p>
              <hr />
            </div>
          ))}
        </div>
        <button onClick={closeModal}>Cerrar</button>
      </Modal>

      <div className="secctio-B">
        <div className="asientos-container">
          {/* Botones de asientos */}
          <div className="asientos">
            {[...Array(10)].map((_, index) => (
              <input type="button" value={index + 1} className="fila1" key={`btnP${index + 1}`} />
            ))}
          </div>
        </div>

        {[2, 3, 4].map((fila) => (
          <div className="asientos-container" key={`fila${fila}`}>
            {/* Botones de asientos */}
            <div className="asientos">
              {[...Array(10)].map((_, index) => (
                <input type="button" value={index + 1} className="fila1" key={`btnP${index + 1}`} />
              ))}
            </div>
          </div>
        ))}

        <div className="form-boleto">
          <form action="post">
            <h5>Viajes especiales ramos</h5>
            <label htmlFor="">Nombre</label>
            <input type="text" />
            <label htmlFor="">Edad</label>
            <input type="text" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Boletos;
