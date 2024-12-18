import "./Hanzi.css";
import HanziWriter from "hanzi-writer";
import { useState } from "react";
import { getToneColor } from "./toneColor.util";

type HanziProps = {
  character: string;
};

export function Hanzi(props: HanziProps) {
  const { character } = props;
  const [writer, setWriter] = useState<HanziWriter>();

  return (
    <div
      className="hanziContainer"
      onClick={() => {
        writer?.animateCharacter();
      }}
    >
      <svg
        className="hanziCharacterBox"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        ref={(ref) => {
          if (ref && !writer) {
            const htmlElementRef = ref as unknown as HTMLElement;
            const writer = HanziWriter.create(htmlElementRef, character, {
              width: 100,
              height: 100,
              padding: 5,
              strokeColor: getToneColor(character),
            });
            setWriter(writer);
          }
        }}
      >
        <line x1="0" y1="0" x2="100" y2="100" stroke="#DDD" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="#DDD" />
        <line x1="50" y1="0" x2="50" y2="100" stroke="#DDD" />
        <line x1="0" y1="50" x2="100" y2="50" stroke="#DDD" />
      </svg>
    </div>
  );
}
