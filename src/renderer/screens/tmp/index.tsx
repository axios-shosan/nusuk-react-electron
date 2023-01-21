import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Index() {
  const navigate = useNavigate();
  return (
    <button
      type="submit"
      onClick={() => {
        navigate('/');
      }}
    >
      Hello
    </button>
  );
}
