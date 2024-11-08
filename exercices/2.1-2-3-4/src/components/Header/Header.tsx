import "./Header.css";


interface HeaderProps {
    TheLogo: string;
    children: React.ReactNode;
  }
  
  const Header = (props: HeaderProps) => {
    return (
      <div className="Header">
        <img src={props.TheLogo} alt="logo" className="logo" />        
        <div className="Header">{props.children}</div>
      </div>
    );
  };
  
  export default Header;
  