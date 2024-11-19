
import imagen0 from './imagenes/rey_atanagildo.png';
import imagen1 from './imagenes/rey_leogivildo.png';
import imagen2 from './imagenes/rey_sisebuto.png';
import './miCss.css'

function App() {
  const nombres = ['Atanagildo', 'Leovigildo', 'Sisebuto'];

  return (
    <div className='contenedor'>
      <div className='caja'>
        <img src={imagen0} />
        <div className='nombre'>{nombres[0]}</div>
      </div>
      <div className='caja'>
        <img src={imagen1}/>
        <div className='nombre'>{nombres[1]}</div>
      </div>
      <div className='caja'>
        <img src={imagen2} />
        <div className='nombre'>{nombres[2]}</div>
      </div>
    </div>
  )
}



export default App