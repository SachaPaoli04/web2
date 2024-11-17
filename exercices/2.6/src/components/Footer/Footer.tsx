import "./Footer.css";

interface FooterProps {
    TheLogo: string;
    children: React.ReactNode;
  }
  
  const Footer = (props: FooterProps) => {
    return (
      <div className="Footer">
        <img src={props.TheLogo} alt="logo" className="logo" />        
        <div className="Footer">{props.children}</div>
      </div>
    );
  };
  
  export default Footer;