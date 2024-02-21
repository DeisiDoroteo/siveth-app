import { useState } from "react";
import Input from "../componentes/ui/input.jsx";
import { BiHide , BiShow } from "react-icons/bi";
import '../styles/Hide.css'
import Label from "../componentes/ui/label.jsx";
import Axios from "axios";
import { Link } from 'react-router-dom';


export default function Login({ title }) {
  const [ShowPwd, setShowPwd] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true); // Estado para verificar si el correo es válido
  const [passwordValid, setPasswordValid] = useState(true); // Estado para verificar si la contraseña es válida

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailPattern.test(email);
    setEmailValid(isValidEmail);

    // Validación de la contraseña
    const isValidPassword = password.length >= 8;
    setPasswordValid(isValidPassword);

    if (!isValidEmail || email.trim() === '' || !isValidPassword || password.trim() === '') {
      return; // Si el correo o la contraseña no son válidos o están vacíos, no envíes la solicitud
    }

    // Resto del código para el inicio de sesión
    try {
      const response = await Axios.post(
        'http://localhost:3001/Login',
        {
          correo: email,
          contrasenia: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      const responseData = response.data;
  
      if (response.status === 200 && responseData.status === 'success') {
        // Redirige a la página de inicio del usuario o a donde desees
        window.location.href = "/admin/";
      } else {
        // Muestra un mensaje de error detallado si es posible
        alert('Error en el inicio de sesión: ' + responseData.message);
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      // Muestra un mensaje de error genérico
      alert('Error en el inicio de sesión. Contraseña incorrecta.');
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <a href="#">{title}</a>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight pb-2.5 text-gray-900">
            Iniciar sesion
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="email">Correo Electrónico</Label>
              <div className="mt-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    borderColor:
                      emailValid && email.trim() !== ""
                        ? "green"
                        : emailValid
                        ? ""
                        : "red",
                  }} // Cambia el color del borde según la validación y si el campo está vacío
                />
              </div>
              {!emailValid && (
                <span className="text-red-600 text-sm">
                  Correo electrónico inválido
                </span>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Contraseña</Label>
                <div className="text-sm">
                  <Link
                    to="/SendEmail"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    ¿Olvidó su contraseña?
                  </Link>
                </div>
              </div>
              <div className="mt-2 relative">
                <Input
                  id="password"
                  name="password"
                  type={ShowPwd ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  placeholder="****"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    borderColor:
                      passwordValid && password.trim() !== ""
                        ? "green"
                        : passwordValid
                        ? ""
                        : "red",
                      }} // Cambia el color del borde según la validación y si el campo está vacío
                      className={`w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-neutral-800 ${
                        ShowPwd ? "" : "hide-password-icon"
                      }`}
                    />
                <div className="absolute inset-y-0 top-1.5 right-0 flex items-center pr-3 " onClick={()=>setShowPwd(!ShowPwd)}>
                  {ShowPwd ? <BiHide className="text-indigo-600 text-xl"/> : <BiShow className="text-indigo-500 text-xl"/>}
                </div>
              </div>
              {!passwordValid && (
                <span className="text-red-600 text-sm">
                  La contraseña debe tener al menos 8 caracteres
                </span>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Iniciar sesión
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            ¿Aún no tienes una cuenta?{" "}
            <Link
              to={"/Registro"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Regístrate Aquí
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}


/*
   const handleSubmit = async (e) => {
     e.preventDefault();

      Realiza la solicitud GET al servidor para iniciar sesión
     try {
       const response = await Axios.post(
         "http:localhost:3001/Login",
         {
           correo: email,
           contrasenia: password,
         },
         {
           headers: {
             "Content-Type": "application/json",
           },
         }
       );

       const responseData = response.data;

       if (response.status === 200 && responseData.status === "success") {
          Redirige a la página de inicio del usuario o a donde desees
         window.location.href = "/admin/";
       } else {
          Muestra un mensaje de error detallado si es posible
         alert("Error en el inicio de sesión: " + responseData.message);
       }
     } catch (error) {
        if (error.response) {
           if (error.response.status === 400) {
        Redirige a la página de Error400 si el código de estado es 400
             window.location.href = "/Error400";
           } else if (error.response.status === 500) {
              Redirige a la página de Error500 si el código de estado es 500
             window.location.href = "/Error500";
           } else {
              Muestra un mensaje de error detallado si es posible
             alert("Error en el inicio de sesión: " + error.response.data.message);
          }
       }
        if (error.request) {
          La solicitud fue realizada pero no se recibió respuesta
         console.error("No se recibió respuesta del servidor");
        
       } else {
          Ocurrió un error antes de enviar la solicitud
         console.error("Error al enviar la solicitud:", error.message);
       }
      
     }
   };
*/