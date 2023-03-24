// create a react component that inputs a textarea message the performs a fetch request to localhost:3001 gets back a response as a data.message and displays that message in a box below
import './App.css'
import { useState } from 'react';




// const response = await openai.listEngines(); 

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3005', {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    setResponse(data.message);
  }

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  }
  return (
    <div className="max-w-xl mx-auto flex items-center justify-center flex-col">
      <form onSubmit={handleSubmit} className="   w-full bg-white shadow-md rounded px-4 pt-6 pb-8 m-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            value={message}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Enter your message here..."
          />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </div>
      </form>
      {response && (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-lg font-bold mb-2 text-teal-300">Response:</h2>
          <p className="text-gray-700">{response}</p>
        </div>
      )}
    </div>
  );
}

export default App;