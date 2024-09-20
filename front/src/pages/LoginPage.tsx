const LoginPage  = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-gradient-to-br from-red-600 via-purple-500 to-blue-500">
        {/* gradiente */}
        <div className="w-1/2 min-h-screen w-screen "></div>
        
        <div className="flex w-full min-h-screen max-w-4xl bg-white shadow-lg justify-center rounded-2xl">

        {/* forms*/}
        <div className="w-3/4 p-8 flex flex-col justify-center gap-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Login</h2>
          <form className="flex flex-col gap-12">
            <div className="mb-4">
              <label className="block text-gray-700 text-lg font-semibold" htmlFor="login">
                Login
              </label>
              <input
                className="w-full px-3 text-lg py-2 border-b border-gray-400 focus:outline-none focus:border-gray-800"
                type="text"
                id="login"
                placeholder="Digite seu login"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-semibold" htmlFor="senha">
                Senha
              </label>
              <input
                className="w-full px-3 text-lg py-2 border-b border-gray-400 focus:outline-none focus:border-gray-800"
                type="password"
                id="senha"
                placeholder="Digite sua senha"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-red-500 text-white font-bold uppercase hover:bg-red-600"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
