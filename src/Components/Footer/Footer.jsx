import { AiFillCar } from 'react-icons/ai';
import { GiHabitatDome } from 'react-icons/gi';
import { BsFillPeopleFill } from 'react-icons/bs';
import { RiMessage3Fill } from 'react-icons/ri';
import { BiHotel } from 'react-icons/bi';
import "./Footer.scss";
import { array } from '../../Data/data.js';


export function Footer() {
  const iconos = [AiFillCar,GiHabitatDome,BsFillPeopleFill,BiHotel, RiMessage3Fill];

  return (
    <div className='all' >
      <h5>Servicios Disponibles</h5>
      <section>
        <div className="card-container">
          {iconos.map((Icono, index) => (
            <div key={index}className="card" >
              <figure className="icono">np
                <Icono  className="mi-icono"/>
              </figure>
              <p className="card-title">{array[index].nombre}</p>
              <p className="card-text">{array[index].mensaje}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Footer;
 
