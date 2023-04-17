export default function About() {

  //handle donate button

  const handleClickScroll4 = () => {
    const element1 = document.getElementById('contactid');
    if (element1) {
      // 👇 Will scroll smoothly to the top of the next section
      element1.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
    
  };

  //construct about page

  return (
    <article className="aboutText" id="aboutid">
      <h1 className="aboutTitle">Engel Organisation</h1>
      <section className="aboutDesc">
        <h2>
          {/*Motto*/}
          To Help The Less Fortunate
        </h2>
        <p>
          {/*About*/}
          <strong>Engel Organization</strong> was founded in <strong>2015</strong> with the purpose to make those
          lives better who got a bit forgotten about by society.
          <br />
          Our activities embrace three different groups of people:
        </p>
        <ul>
          <li>
            <strong>Helping mentally and physically disabled people</strong> to integrate by
            employment opportunities and various programs that help them feel
            more appreciated.
          </li>
          <li>
            <strong>Organizing trips and summer camps for children</strong> from poor families,
            together with our disabled community to allow children raise their
            social sensitivity towards “the different”. We also collect
            clothing, food, Christmas presents for these families.
          </li>
          <li>
            <strong>Giving homeless people the opportunity to live in non-functional
            RV-s</strong> where they can heat meals, sleep in comfort and meet hygiene
            standards in order to be able to get a job, with a small plot to
            keep a dog or grow plants.
          </li>
        </ul>
      </section>
      
      <button className="donBtn" onClick={handleClickScroll4}><strong>Donate</strong></button>
      
    </article>
  );
}
