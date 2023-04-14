import './App.css';
import { useState } from 'react';

function App() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('hide');
  const [loading, setLoading] = useState('hide');
  const [action, setAction] = useState('typing');
  if (action === 'success') {
    return <h1>That's right, Thank you!</h1>
  }
  function submitForm(answer) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (answer.toLowerCase() === 'istanbul') {
          resolve();
        } else {
          reject(new Error('Good guess but a wrong answer. Try again!'));
        }
      }, 1500);
    });
  }
  async function handleFormSubmit(e) {
    e.preventDefault();
    setLoading('show');
    setError('hide');
    setAction('submitting');
    try {
      await submitForm(answer);
      setAction('success');
    } catch (err) {
      setAction('typing');
      setError(err);
    } finally {
      setLoading('hide');
    }
  }
  function handleTextareaChange(e) {
    setAnswer(e.target.value);
    setError('hide');
  }
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h2>City quiz</h2>
        <p>What city is located on two continents?</p>
        <textarea value={answer} onChange={handleTextareaChange} disabled={action === 'submitting'}/>
        <br />
        <button disabled={ action === 'submitting' || answer.length === 0}>Submit</button>
        {loading !== 'hide' && <p> Loading ... </p>}
        {error !== 'hide' && <p id="error">{answer} ??? {error.message}</p>}
      </form>
    </>
  );
}
export default App