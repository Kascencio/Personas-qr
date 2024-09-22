import React from 'react';

const Carlos_Martinez_Sanchez = () => {
  const person = {
    nombre: 'Carlos Martínez Sánchez',
    edad: 42,
    institucion: 'Seguro Popular',
    alergias: 'Mariscos',
    numerosEmergencia: [
      { relacion: 'Esposa', numero: '+52 81 3456 7890' },
      { relacion: 'Amigo', numero: '+52 81 6543 2109' },
    ],
  };

  return (
    <div className="person">
      <h2>{person.nombre}</h2>
      <p><strong>Edad:</strong> {person.edad} años</p>
      <p><strong>Institución de servicio médico:</strong> {person.institucion}</p>
      <p><strong>Alergias:</strong> {person.alergias}</p>
      <p><strong>Números de emergencia:</strong></p>
      <ul>
        {person.numerosEmergencia.map((contacto, index) => (
          <li key={index}>{contacto.relacion}: {contacto.numero}</li>
        ))}
      </ul>
    </div>
  );
};

export default Carlos_Martinez_Sanchez;
