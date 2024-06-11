import "./main.scss";
import { useEffect, useState } from "react";

function Main() {
    const [axb, setAxb] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error");
                }
                return response.json();
            })
            .then(data => {
                setAxb(data);
            })
            .catch(error => {
                console.error("Fetch error:", error);
            });

    }, []);

    return (
        <main>
            <ul>
                {axb.map((country) => (
                    <li >
                        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
                        <h2 className="countName">{country.name.common}</h2>
                        <p>Population: {country.population.toLocaleString()}</p>
                        <p>Region: {country.region}</p>
                        <p>Capital: {country.capital ? country.capital[0] : "N/A"}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default Main;
