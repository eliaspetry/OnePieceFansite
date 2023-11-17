import { useEffect, useState } from 'react';
import QuizEngine, { Question } from './quizEngine';
import cast from './cast';
import * as styles from '../../styles/quiz/quiz.module.sass';

const Quiz: React.FC = () => {
    const [quizEngine, setQuizEngine] = useState<QuizEngine>(
            new QuizEngine(cast)
        ),
        [questionGenerator, setQuestionGenerator] = useState<
            IterableIterator<Question>
        >(quizEngine.generateQuestion()),
        [score, setScore] = useState<number>(),
        [activeQuestion, setActiveQuestion] = useState<Question>();

    /**
     * @private
     * @description Submits an answer for validation to the engine, then updates the score based on it and sets the next question.
     * @param {string} input The user's input.
     * @param answer The correct answer.
     * @returns {void}
     */
    function _submit(input: string, answer: string) {
        quizEngine.validateAnswer(input, answer);
        const score = quizEngine.getScore(),
            nextQuestion = questionGenerator.next().value; // We handle these explicitly in order to not run into state asynchronicity problems
        setScore(score);
        setActiveQuestion(nextQuestion);
    }

    /**
     * @private
     * @description Resets both the score to 0 and shuffles the queue on the instance. Then, launches a new game setting the first question.
     * @returns {void}
     */
    function _restart() {
        quizEngine.restart();
        const generator = quizEngine.generateQuestion(),
            firstQuestion = generator.next().value;
        setQuestionGenerator(generator); // Reset the generator too
        setScore(0);
        setActiveQuestion(firstQuestion);
    }

    useEffect(() => _restart(), []); // Start a new session on initial component mount

    return (
        <div id={styles.quiz} data-testid="quiz">
            <div id={styles.controls} data-testid="controls">
                <button data-testid="restart-button" onClick={_restart}>
                    Reiniciar
                </button>
            </div>
            <div id={styles.score} data-testid="score">
                <p>
                    Aciertos:&emsp;
                    <span id={styles['score-value']} data-testid="score-value">
                        {score} / {cast.length}
                    </span>
                </p>
            </div>
            <div id={styles.board} data-testid="board">
                <p
                    id={styles.question}
                    data-testid="question"
                    className={activeQuestion ? 'ingame' : ''}
                >
                    {activeQuestion
                        ? activeQuestion.question
                        : '🥳 ¡Bien jugado! 🎉'}
                </p>
                <ul id={styles.choices} data-testid="choices">
                    {activeQuestion?.options.map(option => (
                        <li
                            key={option}
                            onClick={() =>
                                _submit(option, activeQuestion.answer)
                            }
                        >
                            {option}
                        </li>
                    ))}
                </ul>
                {activeQuestion?.image && (
                    <img
                        id={styles.image}
                        data-testid="image"
                        src={activeQuestion.image}
                        alt="imagen personaje"
                    />
                )}
            </div>
        </div>
    );
};

export default Quiz;
