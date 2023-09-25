import Header from '../components/Header';
import Footer from '../components/Footer';
import './style.css';

/**
 * Layout component for the application
 *
 * @param children {JSX.Element} - The children of the layout
 * @returns {JSX.Element}
 * @constructor
 */
const Layout = ({ children }) => {
    return (
        <div className={"layout"}>
            <Header/>
            <div className={"pageContent"}>{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;