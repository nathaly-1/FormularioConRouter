
import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';



//url para conectar api  https://gateway.marvel.com:443/v1/public/characters?apikey=15e8722fc2b0df42a4b41150e5bd5cee

// key  privada 2cecf6fa3766fbc9211f122ca4862af9e574d44a

// key public 15e8722fc2b0df42a4b41150e5bd5cee
//ts:1

// 12cecf6fa3766fbc9211f122ca4862af9e574d44a15e8722fc2b0df42a4b41150e5bd5cee
//hash: f66a3aa0b60347413c64d951a3721669



const App = () => {

  const cookies = new Cookies({ sameSite: 'none', secure: true });

  cookies.set('cookieName', 'cookieValue');

  const [personajes, setPersonajes] = useState([])

  useEffect(() => {
    axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=15e8722fc2b0df42a4b41150e5bd5cee&hash=f66a3aa0b60347413c64d951a3721669').then(res => {
      setPersonajes(res.data.data.results)

    }).catch(error => console.log(error))
  }, [])

  console.log(personajes)

  return (
    <div >
      <h3><center>Marvel</center></h3>
      <br></br>
      <div className="row row-cols-1 row-cols-md-3 g-4 ">

        {personajes.map(per => {
          return(
            <div className="col" key={per.id}>
            <div className="card border-primary" style={{width: "18rem;" , height:"18rem"}}>
              <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} className="card-img-top" style={{width: "80%" , height:"80%"}} alt='' />
              <div className="card-footer bg-transparent border-successy">
                <p className="card-text">{per.name}</p>
              </div>
            </div>
          </div>

          )
          

      })


        }

      </div>
    </div>
  );
}

export default App;
