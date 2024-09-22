import React from 'react';

const Ana_Lopez_Ramirez = () => {
  const person = {
    nombre: 'Ana López Ramírez',
    edad: 25,
    institucion: 'IMSS',
    alergias: 'Lactosa, Gluten',
    numerosEmergencia: [
      { relacion: 'Hermana', numero: '+52 55 4567 8901' },
      { relacion: 'Madre', numero: '+52 55 1098 7654' },
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

export default Ana_Lopez_Ramirez;
