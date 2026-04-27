export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            BIENVENID@
          </h1>
          <p className="text-gray-500 mt-2">
            Inicia sesión en tu cuenta
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="correo@ejemplo.com"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Iniciar sesión
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          ¿No tienes cuenta?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Regístrate
          </span>
        </p>
      </div>
    </div>
  );
}