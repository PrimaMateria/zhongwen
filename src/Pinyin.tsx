import pinyin from "pinyin";
import { useMemo } from "react";

type PinyinProps = {
  character: string;
};

export function Pinyin(props: PinyinProps) {
  const { character } = props;

  const pinyinResult = useMemo(() => pinyin(character), [character]);

  return <span>{pinyinResult}</span>;
}
