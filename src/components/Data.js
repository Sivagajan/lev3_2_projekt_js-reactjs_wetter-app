import { useEffect,useState } from "react"

const Data = (props) => {

    let location = props.lat
    const [data, setData] = useState({})

    console.log('data.js',props.lat,props.lon)

    useEffect(() => {

        console.log('data.js in fetch',props.lat,props.lon)
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=9f0b6032b1bf0e34da324382ec5bf821&units=Metric`)
            .then(res => res.json())
            .then(data => setData(data))

    },[location])


    return(
        <section>
            <article>{data.weather &&
                        <p>{data.weather[0].description} in {data.name} </p>
                    }
            </article>
            <article><p>Current Temp {data?.main?.temp} </p></article>
            <article><p>Wind speed is {data?.wind?.speed} m/sec</p></article>
        </section>
    )
}

export default Data