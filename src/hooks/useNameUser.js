import { useState, useEffect } from 'react';

function useNameUser(id) {
  const [name, setName] = useState('User não identificado!');

  useEffect(() => {
    function handleChangeName(status) {
      if (status === 1) {
        setName('Maria');
      } else {
        setName('Gabriela');
      }
    }

    return handleChangeName(id);
  });

  return name;
}

export default useNameUser;
