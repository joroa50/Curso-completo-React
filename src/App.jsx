
import imagen0 from './imagenes/rey_atanagildo.png';
import imagen1 from './imagenes/rey_leogivildo.png';
import imagen2 from './imagenes/rey_sisebuto.png';
import rey from './imagenes/rey_incognito.png';
import './miCss.css'

function App() {
  const nombres = ['Atanagildo', 'Leovigildo', 'Sisebuto'];
  
  const cambiarImagen=(e)=>{
    if(e.target.src.includes("incognito")){
      e.target.style.visibility='hidden';
    } else{
      e.target.src=rey;
    }
    e.target.parentNode.style.backgroundColor="white"

  }
  const cambiarTexto = (e) => {
    if (e.target.innerHTML == ' Visto') {
      e.target.innerHTML = " ";
    } else {
      e.target.innerHTML = ' Visto';
    }
  }

  


  return (
    <div className='contenedor'>
      <div className='caja'>
        <img onClick={cambiarImagen} src={imagen0} />
        <div onClick={cambiarTexto} className='nombre'>{nombres[0]}</div>
      </div>
      <div  className='caja'>
        <img onClick={cambiarImagen} src={imagen1} />
        <div onClick={cambiarTexto}className='nombre'>{nombres[1]}</div>
      </div>
      <div  className='caja'>
        <img onClick={cambiarImagen}  src={imagen2} />
        <div onClick={cambiarTexto}className='nombre'>{nombres[2]}</div>
      </div>

    </div>
  )
}



export default App