import React from 'react';

function LoginPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      <div className="bg-gray-200 bg-opacity-80 p-8 rounded-lg shadow-lg max-w-sm w-full">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center text-green-500 mb-6">Inicio de sesión</h2>
        
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Nombre de usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Ingresa tu nombre de usuario"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Ingresa tu contraseña"
            />
          </div>

          <button
            type="post"
            className="w-full py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >Ingresar</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
