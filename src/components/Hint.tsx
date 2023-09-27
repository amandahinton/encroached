type Props = { word: Record<string, string>; guesses: string[] };

export function Hint({ word, guesses }: Props) {
  function createSpans(substring: string): React.ReactNode {
    return (
      <>
        {substring.split("").map((i) => (
          <span key={i}> __ </span>
        ))}
      </>
    );
  }

  let prefixDisplay: React.ReactNode;
  let suffixDisplay: React.ReactNode;
  switch (guesses.length) {
    case 1:
      prefixDisplay = createSpans(word.prefix);
      suffixDisplay = createSpans(word.suffix);
      break;
    case 2:
      prefixDisplay = createSpans(word.prefix);
      suffixDisplay = createSpans(word.suffix);
      break;
    case 3:
      prefixDisplay = createSpans(word.prefix);
      suffixDisplay = createSpans(word.suffix);
      break;
    case 4:
      prefixDisplay = createSpans(word.prefix);
      suffixDisplay = createSpans(word.suffix);
      break;
    case 5:
      prefixDisplay = createSpans(word.prefix);
      suffixDisplay = createSpans(word.suffix);
      break;
    case 6:
      prefixDisplay = createSpans(word.prefix);
      suffixDisplay = createSpans(word.suffix);
      break;
    default:
      prefixDisplay = <span>___ </span>;
      suffixDisplay = <span> ___</span>;
  }

  return (
    <h2>
      {prefixDisplay}
      <span>{word.hint.toUpperCase()}</span>
      {suffixDisplay}
    </h2>
  );
}
