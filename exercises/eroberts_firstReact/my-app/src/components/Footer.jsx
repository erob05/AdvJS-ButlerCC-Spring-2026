import './Footer.css';
const copyYear = new Date().getFullYear()
const Footer = ({myTitle}) => {
return (
    <footer>
            <p><small>&copy; {copyYear} My {myTitle}</small></p>
    </footer>
);
};

export default Footer;