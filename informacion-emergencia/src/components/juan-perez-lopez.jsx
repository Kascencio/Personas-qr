import React from 'react';

const Juan_Perez_Lopez = () => {
  const person = {
    nombre: 'Juan Pérez López',
    edad: 34,
    institucion: 'IMSS',
    alergias: 'Ninguna conocida',
    numerosEmergencia: [
      { relacion: 'Esposa', numero: '+52 55 1234 5678' },
      { relacion: 'Hermano', numero: '+52 55 8765 4321' },
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

export default Juan_Perez_Lopez;
