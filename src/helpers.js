import marked from "marked";

export const helpers = {
    json: (input) => JSON.stringify(input, null, 4),
    markdown: (input) => marked(input),
    slug: (...input) =>
        input
            .slice(0, -1)
            .join("-")
            .replace(re.diacritics, (c) => diacritics.get(c))
            .replace(re.illegal, "-")
            .replace(re.outerdashes, "")
            .toLowerCase(),
    normalize: (url, base) =>
        new URL(url, typeof base == "string" ? base : "http://localhost"),
    eq: (...args) => args.slice(0, -1).every((a) => a == args[0]),
    ne: (...args) => !eq(...args),
    or: (...args) => args.slice(0, -1).reduce((a, b) => a || b),
    and: (...args) => args.slice(0, -1).reduce((a, b) => a && b),
    xor: (...args) => args.slice(0, -1).reduce((a, b) => a ^ b),
    not: (...args) => !or(...args),
    lt: (a, b) => a < b,
    gt: (a, b) => a > b,
    lte: (a, b) => a <= b,
    gte: (a, b) => a >= b
};

// prettier-ignore
const diacritics = new Map(Object.entries({
    "À": "a", "Á": "a", "Â": "a", "Ã": "a", "Ä": "a", "Å": "a", "Æ": "a",
    "Ç": "c", "È": "e", "É": "e", "Ê": "e", "Ë": "e", "Ì": "i", "Í": "i",
    "Î": "i", "Ï": "i", "Ð": "e", "Ñ": "n", "Ò": "o", "Ó": "o", "Ô": "o",
    "Õ": "o", "Ö": "o", "Ø": "o", "Ù": "u", "Ú": "u", "Û": "u", "Ü": "u",
    "Ý": "y", "Þ": "p", "ß": "s", "à": "a", "á": "a", "â": "a", "ã": "a",
    "ä": "a", "å": "a", "æ": "a", "ç": "c", "è": "e", "é": "e", "ê": "e",
    "ë": "e", "ì": "i", "í": "i", "î": "i", "ï": "i", "ð": "e", "ñ": "n",
    "ò": "o", "ó": "o", "ô": "o", "õ": "o", "ö": "o", "ø": "o", "ù": "u",
    "ú": "u", "û": "u", "ü": "u", "ý": "y", "þ": "p", "ÿ": "y", "Ā": "a",
    "ā": "a", "Ă": "a", "ă": "a", "Ą": "a", "ą": "a", "Ć": "c", "ć": "c",
    "Ĉ": "c", "ĉ": "c", "Ċ": "c", "ċ": "c", "Č": "c", "č": "c", "Ď": "d",
    "ď": "d", "Đ": "d", "đ": "d", "Ē": "e", "ē": "e", "Ĕ": "e", "ĕ": "e",
    "Ė": "e", "ė": "e", "Ę": "e", "ę": "e", "Ě": "e", "ě": "e", "Ĝ": "g",
    "ĝ": "g", "Ğ": "g", "ğ": "g", "Ġ": "g", "ġ": "g", "Ģ": "g", "ģ": "g",
    "Ĥ": "h", "ĥ": "h", "Ħ": "h", "ħ": "h", "Ĩ": "i", "ĩ": "i", "Ī": "i",
    "ī": "i", "Ĭ": "i", "ĭ": "i", "Į": "i", "į": "i", "İ": "i", "ı": "i",
    "Ĳ": "i", "ĳ": "i", "Ĵ": "j", "ĵ": "j", "Ķ": "k", "ķ": "k", "ĸ": "k",
    "Ĺ": "l", "ĺ": "l", "Ļ": "l", "ļ": "l", "Ľ": "l", "ľ": "l", "Ŀ": "l",
    "ŀ": "l", "Ł": "l", "ł": "l", "Ń": "n", "ń": "n", "Ņ": "n", "ņ": "n",
    "Ň": "n", "ň": "n", "ŉ": "n", "Ŋ": "n", "ŋ": "n", "Ō": "o", "ō": "o",
    "Ŏ": "o", "ŏ": "o", "Ő": "o", "ő": "o", "Œ": "o", "œ": "o", "Ŕ": "r",
    "ŕ": "r", "Ŗ": "r", "ŗ": "r", "Ř": "r", "ř": "r", "Ś": "s", "ś": "s",
    "Ŝ": "s", "ŝ": "s", "Ş": "s", "ş": "s", "Š": "s", "š": "s", "Ţ": "t",
    "ţ": "t", "Ť": "t", "ť": "t", "Ŧ": "t", "ŧ": "t", "Ũ": "u", "ũ": "u",
    "Ū": "u", "ū": "u", "Ŭ": "u", "ŭ": "u", "Ů": "u", "ů": "u", "Ű": "u",
    "ű": "u", "Ų": "u", "ų": "u", "Ŵ": "w", "ŵ": "w", "Ŷ": "y", "ŷ": "y",
    "Ÿ": "y", "Ź": "z", "ź": "z", "Ż": "z", "ż": "z", "Ž": "z", "ž": "z"
}));

const re = {
    dashes: /-+/g,
    outerdashes: /^-+|-+$/g,
    diacritics: new RegExp(Array.from(diacritics.keys()).join(""), "g"),
    illegal: /[^a-zA-Z0-9_]+/g,
    whitespace: /\s+/g
};

export default helpers;
