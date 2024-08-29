import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioTarea from './components/FormularioTarea';

function App() {

  return (
    <>
    <main className='container my-5'>
     <h1 className='text-center'>Bienvendos</h1>
     <h2>Ingresa tus tareas</h2>
      <FormularioTarea></FormularioTarea>
    </main>
    {/* agregar el maquetado del footer debajo */}
    </>
  )
}

export default App
