// components
import Header from "./Header";
import Dummy from "./Dummy";
import SolutionLetters from "./SolutionLetters";
import ErrorLetters from "./ErrorLetters";
import Form from "./Form";
// states
import { useEffect, useState } from "react";
// api
import getWordFromApi from "../services/api";
// styles
import "../styles/App.scss";
import "../styles/Form.scss";

function App() {
  const [word, setWord] = useState("");
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState("");

  useEffect(() => {
    getWordFromApi().then((word) => {
      setWord(word);
    });
  }, []);

  // events

  const handleKeyDown = (letters) => {
    // Sabrías decir para qué es esta línea
    letters.setSelectionRange(0, 1);
  };

  const handleChange = (letters) => {
    let re = /^[a-zA-ZñÑá-úÁ-Ú´]$/; //add regular pattern
    if (re.test(letters) || letters === "") {
      handleLastLetter(letters);
    }
  };

  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter(
      (letter) => word.includes(letter) === false
    );
    return errorLetters.length;
  };

  const handleLastLetter = (value) => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);

    if (!userLetters.includes(value)) {
      userLetters.push(value);
      setUserLetters([...userLetters]);
    }
  };

  return (
    <div className="page">
      <Header />
      <main className="main">
        <section>
          <SolutionLetters word={word} userLetters={userLetters} />
          <ErrorLetters word={word} userLetters={userLetters} />
          <Form
            lastLetter={lastLetter}
            handleKeyDown={handleKeyDown}
            handleChange={handleChange}
          />
        </section>
        <Dummy numberOfErrors={getNumberOfErrors()} />
      </main>
    </div>
  );
}

export default App;
