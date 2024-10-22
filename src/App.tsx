import "./App.css";
import { Hanzi } from "./Hanzi";
import radicalGroups from "./radicals.json";

function App() {
  return (
    <main>
      <h1>Chinese radicals</h1>
      <table>
        <tbody>
          {radicalGroups.map((radicalGroup) => (
            <>
              <tr>
                <td colSpan={3} className="radicalGroup">
                  <h2>Strokes: {radicalGroup.stroke}</h2>
                </td>
              </tr>

              {radicalGroup.radicals.map((radical) => (
                <tr>
                  <td>{radical.pinyin}</td>
                  <td>
                    <div className="characters">
                      {radical.characters.map((character) => (
                        <Hanzi character={character} />
                      ))}
                    </div>
                  </td>
                  <td>{radical.translation}</td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default App;
