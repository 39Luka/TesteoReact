import { useState } from 'react';

function ValidacionEnEnvio() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres.");
      return;
    }
    setError("");
    console.log("Datos válidos. Enviando...");
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form 
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md"
      >
        <div className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
          Formulario &quot;Validación en Envío&quot;
        </div>

        <div className="mb-4">
          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Correo Electrónico:
          </label>
          <input
            id="email"
            type="email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!!error} 
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          />
        </div>

        <div className="mb-6">
          <label 
            htmlFor="pass" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Contraseña:
          </label>
          <input 
            id="pass"
            type="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-invalid={!!error} 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          />
        </div>
        <div>
            {error && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{error}</p>}
        </div>
        <div>
          <button 
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
          >
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  );
}
export default ValidacionEnEnvio;