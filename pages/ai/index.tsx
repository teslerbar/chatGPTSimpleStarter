import { useEffect, useState } from 'react';

function Ai() {
  const [content, setContent] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function generateResponse() {
      setLoading(true);
      
      const response = await fetch('api/ai');
      const json = await response.json();

      setLoading(false);
      setContent(json.text);
    }

    generateResponse();
  }, []);

  return loading ? <span>loading...</span> : <code>{content}</code>;
}

export default Ai;
