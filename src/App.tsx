import "./App.css";
import { Hanzi } from "./Hanzi";
import radicals from "./radicals.json";

function App() {
  return (
    <main>
      <h1>Chinese radicals</h1>
      <table>
        <tbody>
          {radicals.map((radical) => (
            <tr>
              <td>
                <div className="characters">
                  {radical.characters.map((character) => (
                    <Hanzi character={character} />
                  ))}
                </div>
              </td>
              <td>{radical.pinyin}</td>
              <td>{radical.translation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default App;
