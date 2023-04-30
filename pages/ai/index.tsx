import { useState } from 'react';

function Ai() {
  const [content, setContent] = useState();
  const [loading, setLoading] = useState(false);

  function onGenerateResponse() {
    setLoading(true);

    fetch('api/ai').then((response) => {
      response.json().then((json) => {
        setLoading(false);
        setContent(json);
      });
    });
  }

  return (
    <div>
      <button
        onClick={onGenerateResponse}
        className={
          'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
        }
      >
        Generate response
      </button>
      {loading ? <span>loading...</span> : <code>{content}</code>}
    </div>
  );
}

export default Ai;
