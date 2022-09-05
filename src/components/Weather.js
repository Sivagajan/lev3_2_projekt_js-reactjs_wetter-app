import { useState } from "react"
import Data from "./Data"

const Weather = () => {

    const [geoLat, setGeoLat] = useState('51.15')
    const [geoLon, setGeoLon] = useState('6.37')
/*     const [data, setData] = useState({})
 */
    const mg = () =>{
        setGeoLat('51.15')
        setGeoLon('6.37')
        console.log(geoLat,geoLon)
       /*  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geoLat}&lon=${geoLon}&appid=9f0b6032b1bf0e34da324382ec5bf821&units=Metric`)
            .then(res => res.json())
            .then(data => setData(data)) */
    }

    const duesseldorf = () => {
        setGeoLat('51.25')
        setGeoLon('6.78')
        console.log(geoLat,geoLon)
       /*  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geoLat}&lon=${geoLon}&appid=9f0b6032b1bf0e34da324382ec5bf821&units=Metric`)
        .then(res => res.json())
        .then(data => setData(data)) */
    }

    const hamburg = () => {
        setGeoLat('53.55')
        setGeoLon('10.06')
        console.log(geoLat,geoLon)
       /*  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geoLat}&lon=${geoLon}&appid=9f0b6032b1bf0e34da324382ec5bf821&units=Metric`)
        .then(res => res.json())
        .then(data => setData(data)) */
    }

    const berlin = () => {
        setGeoLat('52.52')
        setGeoLon('13.39')
        console.log(geoLat,geoLon)
       /*  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geoLat}&lon=${geoLon}&appid=9f0b6032b1bf0e34da324382ec5bf821&units=Metric`)
        .then(res => res.json())
        .then(data => setData(data)) */
    }


    return(
        <section>
            <article>
                <button onClick={mg}>MG</button>
                <button onClick={duesseldorf}>Düsseldorf</button>
                <button onClick={hamburg}>Hamburg</button>
                <button onClick={berlin}>Berlin</button>
            </article>

        <Data lat={geoLat} lon={geoLon}/>
        </section>
    )
}

export default Weather