import { KanaItem } from "@/types/kana";

export const katakanaRows = [
  [
    { char: "ア", romaji: "a" },
    { char: "イ", romaji: "i" },
    { char: "ウ", romaji: "u" },
    { char: "エ", romaji: "e" },
    { char: "オ", romaji: "o" },
  ],
  [
    { char: "カ", romaji: "ka" },
    { char: "キ", romaji: "ki" },
    { char: "ク", romaji: "ku" },
    { char: "ケ", romaji: "ke" },
    { char: "コ", romaji: "ko" },
  ],
  [
    { char: "サ", romaji: "sa" },
    { char: "シ", romaji: "shi" },
    { char: "ス", romaji: "su" },
    { char: "セ", romaji: "se" },
    { char: "ソ", romaji: "so" },
  ],
  [
    { char: "タ", romaji: "ta" },
    { char: "チ", romaji: "chi" },
    { char: "ツ", romaji: "tsu" },
    { char: "テ", romaji: "te" },
    { char: "ト", romaji: "to" },
  ],
  [
    { char: "ナ", romaji: "na" },
    { char: "ニ", romaji: "ni" },
    { char: "ヌ", romaji: "nu" },
    { char: "ネ", romaji: "ne" },
    { char: "ノ", romaji: "no" },
  ],
  [
    { char: "ハ", romaji: "ha" },
    { char: "ヒ", romaji: "hi" },
    { char: "フ", romaji: "fu" },
    { char: "ヘ", romaji: "he" },
    { char: "ホ", romaji: "ho" },
  ],
  [
    { char: "マ", romaji: "ma" },
    { char: "ミ", romaji: "mi" },
    { char: "ム", romaji: "mu" },
    { char: "メ", romaji: "me" },
    { char: "モ", romaji: "mo" },
  ],
  [
    { char: "ヤ", romaji: "ya" },
    null,
    { char: "ユ", romaji: "yu" },
    null,
    { char: "ヨ", romaji: "yo" },
  ],
  [
    { char: "ラ", romaji: "ra" },
    { char: "リ", romaji: "ri" },
    { char: "ル", romaji: "ru" },
    { char: "レ", romaji: "re" },
    { char: "ロ", romaji: "ro" },
  ],
  [
    { char: "ワ", romaji: "wa" },
    null,
    null,
    null,
    { char: "ヲ", romaji: "wo" },
  ],
  [{ char: "ン", romaji: "n" }, null, null, null, null],
];

export const katakanaDakutenRows = [
  [
    { char: "ガ", romaji: "ga" },
    { char: "ギ", romaji: "gi" },
    { char: "グ", romaji: "gu" },
    { char: "ゲ", romaji: "ge" },
    { char: "ゴ", romaji: "go" },
  ],
  [
    { char: "ザ", romaji: "za" },
    { char: "ジ", romaji: "ji" },
    { char: "ズ", romaji: "zu" },
    { char: "ゼ", romaji: "ze" },
    { char: "ゾ", romaji: "zo" },
  ],
  [
    { char: "ダ", romaji: "da" },
    { char: "ヂ", romaji: "dji" },
    { char: "ヅ", romaji: "dzu" },
    { char: "デ", romaji: "de" },
    { char: "ド", romaji: "do" },
  ],
  [
    { char: "バ", romaji: "ba" },
    { char: "ビ", romaji: "bi" },
    { char: "ブ", romaji: "bu" },
    { char: "ベ", romaji: "be" },
    { char: "ボ", romaji: "bo" },
  ],
];

export const katakanaHandakutenRows = [
  [
    { char: "パ", romaji: "pa" },
    { char: "ピ", romaji: "pi" },
    { char: "プ", romaji: "pu" },
    { char: "ペ", romaji: "pe" },
    { char: "ポ", romaji: "po" },
  ],
];

export const katakanaList: KanaItem[] = [
  ...katakanaRows.flat(),
  ...katakanaDakutenRows.flat(),
  ...katakanaHandakutenRows.flat(),
].filter((item): item is KanaItem => item !== null);
