export class UI {
    constructor() {}
  
    /**
     *
     * @param {string} text
     */
    showQuestion(text) {
      const questionTitle = document.getElementById("question");
      questionTitle.innerHTML = text;
    }
  
    /**
     *
     * @param {string[]} choices
     */
    showChoices(choices, callback) {
      const choicesContainer = document.getElementById("choices");
      choicesContainer.innerHTML = "";
  
      for (let i = 0; i < choices.length; i++) {
        const button = document.createElement("button");
        button.addEventListener("click", () => callback(choices[i]));
        button.className = "button";
        button.innerText = choices[i];
  
        choicesContainer.append(button);
      }
    }

    /**
     * 
     * @param {Number} score the total score
     */
    showScores(score) {
        const quizEndHTML = `
        <h1>Resultado</h1>
        <h2>Tú Puntaje: <h3>${score}/10</h3> </h2>
        `
        const element = document.getElementById('quiz');
        element.innerHTML = quizEndHTML;
    }

    /**
     * 
     * @param {number} currentIndex the current index of the quiz
     * @param {number} total total questions number 
     */
    showProgress(currentIndex, total) {
        const element = document.getElementById('progress');
        element.innerHTML = `Pregunta ${currentIndex} de ${total}`;
    }
}  