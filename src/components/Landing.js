export default function Landing() {

    //handle "What is Engel" button

    const handleClickScroll3 = () => {
      const element2 = document.getElementById('aboutid');

      if (element2) {
        element2.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      }
    };

    //construct landing page

    return (
      <section className="landing">
        <h1 className="welcometext">Welcome to Engel</h1>
        <div className="carousel">
            <div className="images-container">
              <img src="images/camp1.png" height="450px" alt="camp"/>
              <img src="images/camp2.png" height="450px" alt="camp"/>
              <img src="images/camp3.png" height="450px" alt="camp"/>
              <img src="images/camp4.png" height="450px" alt="camp"/>
              <img src="images/camp5.png" height="450px" alt="camp"/>
              <img src="images/camp6.png" height="450px" alt="camp"/>
              <img src="images/camp7.png" height="450px" alt="camp"/>
              <img src="images/homeless1.png" height="450px" alt="homeless"/>
              <img src="images/homeless2.png" height="450px" alt="homeless"/>
              <img src="images/homeless3.png" height="450px" alt="homeless"/>
              <img src="images/homeless4.png" height="450px" alt="homeless"/>
            </div>
        </div>
        <div>
            <button className="aboutBtn" onClick={handleClickScroll3}>What is Engel?</button>
        </div>
      </section>
    );
  }
  