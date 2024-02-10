import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function CambioPass() {
  const [contraseniaNueva, setContraseniaNueva] = useState("");
  const [repetirContraseniaNueva, setRepetirContraseniaNueva] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const { email } = location.state;
  const navigate = useNavigate();

  const validarContraseniaNueva = (valor) => {
    return valor.length >= 8;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Validación de contraseña nueva
    if (!validarContraseniaNueva(contraseniaNueva)) {
      setError("La contraseña debe tener al menos 8 caracteres");
      return;
    }
  
    // Validación de coincidencia de contraseñas
    if (contraseniaNueva !== repetirContraseniaNueva) {
      setError("Las contraseñas no coinciden");
      return;
    }
  
    // Si pasa todas las validaciones, enviar la solicitud al servidor
    try {
      console.log('Enviando solicitud con correo:', email);
      const response = await axios.post('http://localhost:3001/cambiarContrasenia', {
        correo: email,
        contraseniaNueva: contraseniaNueva
      });
  
      console.log('Respuesta del servidor:', response);
  
      if (response.status === 200) {
        alert('Contraseña cambiada exitosamente:');
        // Aquí podrías redirigir al usuario a otra página si lo deseas
        navigate('/Login');
      }
    } catch (error) {
      console.error('Error al cambiar la contraseña:', error);
      setError("Hubo un error al cambiar la contraseña. Por favor, inténtalo de nuevo.");
      console.log('Correo electrónico recibido:', email);
    }
  };
  
  return (
    <div>
      <section className="bg-gray-50 w-screen dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Cambio de contraseña
            </h2>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
              <div>
                <label htmlFor="contraseniaNueva" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Nueva contraseña
                </label>
                <input
                  type="password"
                  id="contraseniaNueva"
                  value={contraseniaNueva}
                  onChange={(e) => setContraseniaNueva(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label htmlFor="repetirContraseniaNueva" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Confirmar contraseña
                </label>
                <input
                  type="password"
                  id="repetirContraseniaNueva"
                  value={repetirContraseniaNueva}
                  onChange={(e) => setRepetirContraseniaNueva(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              {error && <div className="text-red-500">{error}</div>}
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Cambiar Contraseña
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
