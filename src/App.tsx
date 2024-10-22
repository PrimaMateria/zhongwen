import './App.css'
import HanziWriter from "hanzi-writer";

function App() {
  return (
    <main>
      <svg
        className="characterBox"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        ref={(ref) => {
          if (ref) {
            const htmlElementRef = ref as unknown as HTMLElement;
            HanziWriter.create(htmlElementRef, "一", {
              width: 100,
              height: 100,
              padding: 5,
              radicalColor: "#168F16",
            });
          }
        }}
      >
        <line x1="0" y1="0" x2="100" y2="100" stroke="#DDD" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="#DDD" />
        <line x1="50" y1="0" x2="50" y2="100" stroke="#DDD" />
        <line x1="0" y1="50" x2="100" y2="50" stroke="#DDD" />
      </svg>
    </main>
  );
}

export default App
