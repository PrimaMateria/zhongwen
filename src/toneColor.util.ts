import pinyin, { STYLE_TONE2 } from "pinyin";

const TONE_COLOR_MAP = {
  0: "#000000",
  1: "#FF0000",
  2: "#008000",
  3: "#0000FF",
  4: "#800080",
};

export function getToneColor(character: string) {
  const pinyinResult = pinyin(character, { style: STYLE_TONE2 });
  const characterPinyin = pinyinResult[0][0];

  const toneNumberMatch = characterPinyin.match(/\d/);
  const toneNumber = toneNumberMatch
    ? (Number.parseInt(toneNumberMatch[0]) as 0 | 1 | 2 | 3 | 4)
    : 0;

  return TONE_COLOR_MAP[toneNumber];
}
