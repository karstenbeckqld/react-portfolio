import {Data} from "../context/DataContext";
import {FaExternalLinkAlt, FaGithub} from "react-icons/fa";
import {MdOutlineWebAsset} from "react-icons/md";

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
                <div className="portfolio-item-content" key={index}>
                    <div className="portfolio-item-title">
                        {item.type == 'w' ? <MdOutlineWebAsset className="git-icon" /> : <FaGithub className="git-icon" />}
                        <h3>{item.title} <a href={item.link} target="_blank"> <FaExternalLinkAlt className="link-icon" /></a></h3>
                    </div>


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
                                    <div className="tech-item"> #{techItem}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
    )
}