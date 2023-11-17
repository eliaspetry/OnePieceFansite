import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quiz from '../../components/quiz/Quiz';
import cast from '../../components/quiz/cast';

describe('Tests for Quiz component', () => {
    afterEach(cleanup);

    it('should render correctly', () => {
        const { getByTestId } = render(<Quiz />),
            idsToAssert = [
                'quiz',
                'controls',
                'restart-button',
                'score',
                'score-value',
                'board',
                'question',
                'choices'
            ];

        for (const id of idsToAssert) {
            expect(getByTestId(id)).toBeInTheDocument();
        }
    });

    it('should start up a new game on mount correctly', () => {
        const { getByTestId } = render(<Quiz />),
            scoreValue = getByTestId('score-value'),
            question = getByTestId('question'),
            choices = getByTestId('choices');

        expect(scoreValue).toHaveTextContent(/0\s\/\s\d+/);
        expect(question).toHaveTextContent(/¿.+\?/);
        expect(choices.children.length).toBe(4);
        expect(
            Array.from(choices.children).every(child => child.tagName === 'LI')
        ).toBe(true);
    });

    it('should add one to the score upon submitting a right answer', () => {
        const { getByTestId } = render(<Quiz />);

        _clickAnswer(getByTestId('question'), getByTestId('choices').children);

        expect(_extractScore(getByTestId('score-value'))).toBe(1);
    });

    it('should leave the score intact upon submitting a wrong answer', () => {
        const { getByTestId } = render(<Quiz />);

        _clickAnswer(
            getByTestId('question'),
            getByTestId('choices').children,
            false
        );

        expect(_extractScore(getByTestId('score-value'))).toBe(0);
    });

    it('should move to the next question after submitting an answer', () => {
        const { getByTestId } = render(<Quiz />),
            question = getByTestId('question').textContent,
            choices = getByTestId('choices');

        fireEvent.click(choices.children[0]);

        const nextQuestion = getByTestId('question').textContent;

        expect(question).not.toBe(nextQuestion);
    });

    it('should show a notification once the game is over', () => {
        const { getByTestId } = render(<Quiz />);

        for (let i = 0; i < cast.length; i++)
            _clickAnswer(
                getByTestId('question'),
                getByTestId('choices').children,
                false // Makes it less time-expensive, since we don't care if it's right or wrong here
            );

        expect(getByTestId('question').textContent).toMatch('¡Bien jugado!');
    });

    it('should reset the score on restart', () => {
        const { getByTestId } = render(<Quiz />),
            question = getByTestId('question'),
            choices = getByTestId('choices');

        _clickAnswer(question, choices.children);

        expect(_extractScore(getByTestId('score-value'))).toBe(1);

        fireEvent.click(getByTestId('restart-button'));

        expect(_extractScore(getByTestId('score-value'))).toBe(0);
    });

    /**
     * @private
     * @description Extracts the score from the score element
     * @param {HTMLElement} el - The HTML element containing the score text
     * @returns {number} The extracted score
     */
    function _extractScore(el: HTMLElement) {
        return parseInt(el.textContent.match(/^(\d+)\s/)[1]);
    }

    /**
     * @private
     * @description Clicks an answer on the quiz
     * @param {HTMLElement} question - The HTML element containing the question
     * @param {HTMLCollection} elements - The HTML elements containing the choices
     * @param {?boolean} chooseRightOption - Flag that determines whether to choose the right answer or not (defaults to true)
     * @returns {void}
     */
    function _clickAnswer(
        question: HTMLElement,
        elements: HTMLCollection,
        chooseRightOption: boolean = true
    ) {
        const questionText = question.textContent;

        for (const { characterName, realName } of cast) {
            for (const el of Array.from(elements)) {
                const rightAnswerCondition =
                    (el.textContent.includes(characterName) &&
                        questionText.includes(realName)) ||
                    (el.textContent.includes(realName) &&
                        questionText.includes(characterName));

                if (
                    (chooseRightOption && rightAnswerCondition) ||
                    (!chooseRightOption && !rightAnswerCondition)
                ) {
                    fireEvent.click(el);
                    return;
                }
            }
        }
    }
});
