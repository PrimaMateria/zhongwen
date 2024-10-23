import { Fragment } from "react";
import "./App.css";
import { Hanzi } from "./Hanzi";
import { Pinyin } from "./Pinyin";
import radicalGroups from "./radicals.json";

function App() {
  return (
    <main>
      <h1>Chinese radicals</h1>
      <table>
        <tbody>
          {radicalGroups.map((radicalGroup) => (
            <Fragment key={`stroke${radicalGroup.stroke}`}>
              <tr>
                <td colSpan={4} className="radicalGroup">
                  <h2>Strokes: {radicalGroup.stroke}</h2>
                </td>
              </tr>

              {radicalGroup.radicals.map((radical) => (
                <tr key={`row${radical.characters[0]}`}>
                  <td>
                    <Pinyin character={radical.characters[0]} />
                  </td>
                  <td>
                    <div className="characters">{radical.characters}</div>
                  </td>
                  <td>
                    <div className="characters">
                      {radical.characters.map((character) => (
                        <Hanzi
                          key={`character${character}`}
                          character={character}
                        />
                      ))}
                    </div>
                  </td>
                  <td>{radical.translation}</td>
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default App;
