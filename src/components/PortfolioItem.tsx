import {Data} from "../context/DataContext";

type TPortfolioItemProps = {
    index: number;
    item: Data;
}

export default function PortfolioItem({index, item}: TPortfolioItemProps) {

    // For better appearance, we truncate the description to a maximum of 7 words.
    function truncateComment(comment: string, maxWords: number) {
        const words = comment.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
        return comment;
    }

    return (

            <div className="portfolio-item">
                <div key={index}>
                    <h3>{item.title}</h3>

                    <div className="showcase-image-container"><img
                        className="showcase-image"
                        src={`/images/square/${item.showcasePath}`}
                        alt={item.showcasePath}
                    /></div>
                    <div>{truncateComment(item.description, 12)}</div>
                    <div className="technology">
                        {item.tech.map((techItem, index) => {
                            return (
                                <div key={index}>
                                    <div className="tech-item"> {techItem}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
    )
}