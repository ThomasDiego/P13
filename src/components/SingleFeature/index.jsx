import "./style.css"
/**
 * A single feature component to be used in the features section
 *
 * @param icon {string}- The icon to display
 * @param title {string}- The title of the feature
 * @param subtitle {string} - The subtitle of the feature
 * @returns {JSX.Element} - A single feature
 * @constructor
 */
const SingleFeature = ({icon, title, subtitle}) => {
    return (
        <div className={"feature"}>
            <img className={"featureIcon"} src={`icon-${icon}.png`} alt={`Image of ${icon}`}/>
            <h3 className={"featureTitle"}>{title}</h3>
            <p className={"featureSubtitle"}>{subtitle}</p>
        </div>
    )
}

export default SingleFeature