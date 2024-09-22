import React from 'react';

const Maria_Gomez_Hernandez = () => {
  const person = {
    nombre: 'María Gómez Hernández',
    edad: 29,
    institucion: 'ISSSTE',
    alergias: 'Penicilina',
    numerosEmergencia: [
      { relacion: 'Madre', numero: '+52 33 2345 6789' },
      { relacion: 'Padre', numero: '+52 33 9876 5432' },
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

export default Maria_Gomez_Hernandez;
