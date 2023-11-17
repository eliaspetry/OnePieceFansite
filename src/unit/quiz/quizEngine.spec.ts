import QuizEngine from '../../components/quiz/quizEngine';
import cast from '../../components/quiz/cast'; // It is a better practice to have an isolated mock data set, but we'll just roll with the actual one for simplicity

describe('Tests for QuizEngine class', () => {
    let quizEngine;

    beforeEach(() => (quizEngine = new QuizEngine(cast)));

    afterEach(() => jest.restoreAllMocks());

    it('should start with a score of 0', () =>
        expect(quizEngine.getScore()).toBe(0));

    it('should return the same number of questions as cast count from the generator', () => {
        const questionGenerator = quizEngine.generateQuestion();
        let counter = 0;

        while (!questionGenerator.next().done) {
            counter++;
        }
        expect(counter).toBe(cast.length);
    });

    it('should use each cast entry for a question only once in the generator', () => {
        const questionGenerator = quizEngine.generateQuestion(),
            mappings = [...cast];

        for (const question of questionGenerator) {
            // The response should match each cast entry once either for character or actor
            for (const mapping of mappings) {
                if (
                    question.answer === mapping.realName ||
                    question.answer === mapping.characterName
                ) {
                    mappings.splice(mappings.indexOf(mapping), 1);
                    break;
                }
            }
        }

        expect(mappings.length).toBe(0);
    });

    it('should contain the required keys in the yielded question objects', () => {
        const questionGenerator = quizEngine.generateQuestion(),
            question = questionGenerator.next().value;

        // Question
        expect(question).toHaveProperty('question');
        expect(typeof question.question).toBe('string');

        // Answer
        expect(question).toHaveProperty('answer');
        expect(typeof question.answer).toBe('string');

        // Options
        expect(question).toHaveProperty('options');
        expect(Array.isArray(question.options)).toBe(true);
        expect(
            question.options.every(option => typeof option === 'string')
        ).toBe(true);
        const optionsSet = new Set(question.options);
        expect(optionsSet.size).toBe(4); // 4 unique options
        expect(optionsSet.has(question.answer)).toBe(true); // One of them must be the actual answer
    });

    it('should shuffle the queue on initialization', () => {
        // Since there is a small chance that Fisher-Yates shuffle will produce the same result, we'll just spy on a shuffleQueue() call
        const shuffleQueueSpy = jest.spyOn(
            QuizEngine.prototype,
            'shuffleQueue'
        );
        new QuizEngine(cast);
        expect(shuffleQueueSpy).toHaveBeenCalledTimes(1);
    });

    it('should increment score by 1 on correct answer', () => {
        expect(quizEngine.getScore()).toBe(0);
        quizEngine.validateAnswer('correct', 'correct');
        expect(quizEngine.getScore()).toBe(1);
    });

    it('should not increment score on incorrect answer', () => {
        expect(quizEngine.getScore()).toBe(0);
        quizEngine.validateAnswer('incorrect', 'correct');
        expect(quizEngine.getScore()).toBe(0);
    });

    it('should reset the score to 0 on restart', () => {
        quizEngine.restart();
        expect(quizEngine.getScore()).toBe(0);
    });

    it('should reshuffle on restart', () => {
        const shuffleQueueSpy = jest.spyOn(quizEngine, 'shuffleQueue');
        quizEngine.restart();
        expect(shuffleQueueSpy).toHaveBeenCalledTimes(1);
    });
});
