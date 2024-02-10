import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../componentes/Chatbot/config.js';
import MessageParser from '../componentes/Chatbot/MessageParser';
import ActionProvider from '../componentes/Chatbot/ActionProvider';

function Ayuda() {
  const chatbotContainerStyle = {
    display: 'flex',
     // Asegura que el ancho 100% funcione correctamente
    justifyContent: 'center',
    alignItems: 'center',
     
    backgroundColor: '#C0DBEA',
    
    marginTop: '15px'// Establece el ancho al 100% del ancho de la ventana
  };

  return (
    <div style={chatbotContainerStyle}>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default Ayuda;
