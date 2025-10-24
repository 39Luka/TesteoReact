function Contenedor({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-8">
      {children}
    </div>
  );
}

export default Contenedor;