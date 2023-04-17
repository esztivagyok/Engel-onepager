import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Footer from "./components/Footer";

function App() {
  const ngo = "Engel";

  return (
    <section>
      <div className="App">{<Header ngoName={ngo} />}</div>
      <div>
        <Landing />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Contact />
      </div>
      <Footer />
    </section>
  );
}

export default App;


/*waitFor(() => {
  const elements = screen.getAllByText(/Steven Seagal/i)
  expect(elements.length).toBe(0)
})
waitFor(() => {
  const elements = screen.getAllByText(/Steven Seagal/i)
  expect(elements.length).toBe(0)
}, {timeout: 3000})*/
