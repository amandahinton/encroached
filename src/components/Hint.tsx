type Props = {
word: string;
leftEnabled: boolean;
rightEnabled: boolean;
handleHintLeft: () => void;
handleHintRight: () => void;
};

export function Hint({ word, leftEnabled, rightEnabled, handleHintLeft, handleHintRight }: Props) {
  return (
      <h2>
        <>
            <button hidden={!leftEnabled} onClick={(_) => handleHintLeft()}> ← </button>
        </>
      <span>{word.toUpperCase()}</span>
        <>
            <button hidden={!rightEnabled} onClick={(_) => handleHintRight()}> → </button>
        </>
      </h2>
      );
}
