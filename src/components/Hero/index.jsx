import "./style.css"
import backgroundHero from "../../assets/bank-tree.jpeg"
const Hero = () => {
    return (
        <div className="hero" style={{backgroundImage: `url(${backgroundHero})`}}>
            <div className="heroContent">
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
            </div>
        </div>
    )
}
export default Hero