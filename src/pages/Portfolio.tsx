import PortfolioItem from "../components/PortfolioItem.tsx";
import {useEffect, useState} from "react";
import {Data} from "../context/DataContext.tsx";

export default function Portfolio() {
    const [currentData, setCurrentData] = useState<Data[] | null>(null);

    async function getData() {
        const response = await fetch('http://localhost:3000/data', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });

        const data = await response.json();
        console.log('Data: ', data);

        setCurrentData(data);
    }

    useEffect(() => {
        getData().then(() => console.log('Data fetched'));
    }, []);

    return (
        <section className="section portfolio-section">
            <h2>Portfolio</h2>
            <div className="portfolio-container">

                {currentData ? (
                    currentData.map((item, index) => (
                        <PortfolioItem
                            key={index}
                            index={index}
                            item={item}
                        />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </section>
    );
}
