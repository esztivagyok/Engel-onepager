import logo from './ngologo.png';

export default function Header(props) {
  const ngoName = props.ngoName;

  //handle "about" and "contact" buttons

  const handleClickScroll1 = () => {
    const element1 = document.getElementById('contactid');
    if (element1) {
      // 👇 Will scroll smoothly to the top of the next section
      element1.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
    
  };

  const handleClickScroll2 = () => {
    const element2 = document.getElementById('aboutid');

    if (element2) {
      element2.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  };

  //construct header

  return (
    <div className="header">
      <div className="ngo">
        <img src={logo} className="ngoLogo" width="75" alt="ngologo"/>
        <span>{ngoName}</span>
      </div>
      <div className="navbar">
        <button className="optBtn" onClick={handleClickScroll2}>About</button>
        <button className="optBtn" onClick={handleClickScroll1}>Contact</button>
      </div>
    </div>
  );
}
