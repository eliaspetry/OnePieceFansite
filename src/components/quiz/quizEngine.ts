import { Actor } from './cast';

export interface Question {
    question: string;
    image?: string; // This is gonna be optional because we don't want to leak the image to the user for "which character...?" questions
    options: string[];
    answer: string;
}

/**
 * @class QuizEngine
 * @classdesc Engine that generates questions for the quiz, validates answers and tracks the score.
 */
class QuizEngine {
    protected queue: Actor[];
    protected score: number;

    /**
     * @public
     * @constructor
     * @description Initializes a new QuizEngine instance.
     * @param {Actor[]} cast - An array of actor objects containing the names, their characters and images casting the role.
     */
    constructor(cast: Actor[]) {
        this.queue = cast;
        this.shuffleQueue();
        this.score = 0;
    }

    /**
     * @protected
     * @description Shuffles the elements of an array in place on a copy of it using the Fisher-Yates algorithm.
     * @param {T<any>[]} array - The array to be shuffled.
     * @return {T<any>[]} - A shuffled copy of the array.
     */

    protected shuffleArray<T>(array: T[]): T[] {
        const arrCopy = [...array];

        /* 
            To shuffle the array, we'll be using the Fisher-Yates shuffle algorithm:
            GeeksforGeeks. (2023). Shuffle a given array using Fisher–Yates shuffle Algorithm.
            Available at: https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/.
        */
        for (let i = arrCopy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]];
        }

        return arrCopy;
    }

    /**
     * @public
     * @description Shuffles the elements of the queue on the instance.
     * @return {void}
     */
    public shuffleQueue(): void {
        this.queue = this.shuffleArray(this.queue);
    }

    /**
     * @public
     * @description Returns the current score.
     * @returns {number} The current score.
     */
    public getScore(): number {
        return this.score;
    }

    /**
     * @public
     * @description Resets both the score to 0 and shuffles the queue on the instance.
     * @return {void}
     */
    public restart(): void {
        this.score = 0;
        this.shuffleQueue();
    }

    /**
     * @public
     * @generator
     * @description Yields question objects for the quiz.
     * @returns {IterableIterator<Question>} An iterable that yields question objects.
     */
    public *generateQuestion(): IterableIterator<Question> {
        for (let i = 0; i < this.queue.length; i++) {
            const questionType = ['actor', 'character'][
                    Math.floor(Math.random() * 2)
                ], // Will be 0 or 1,
                currentActor = this.queue[i];

            // Let's randomly choose three unique decoy actors that are not the current one for the wrong options
            // (We want 4 options: 1 right and 3 wrong ones, so we can do a typical ABCD quiz format)
            const decoys: Actor[] = [],
                addedIndeces = new Set<number>(); // Memoize the added ones in a set as lookup is O(1)

            while (decoys.length < 3) {
                const decoyIndex = Math.floor(
                    Math.random() * this.queue.length
                );

                if (decoyIndex !== i && !addedIndeces.has(decoyIndex)) {
                    decoys.push(this.queue[decoyIndex]);
                    addedIndeces.add(decoyIndex);
                }
            }

            if (questionType === 'actor') {
                yield {
                    question: `¿Qué actor hace el papel de ${currentActor.characterName}?`,
                    image: currentActor.image,
                    options: this.shuffleArray([
                        currentActor.realName,
                        ...decoys.map(decoy => decoy.realName)
                    ]),
                    answer: currentActor.realName
                };
            } else {
                yield {
                    question: `¿Qué personaje representa el actor ${currentActor.realName}?`,
                    options: this.shuffleArray([
                        currentActor.characterName,
                        ...decoys.map(decoy => decoy.characterName)
                    ]),
                    answer: currentActor.characterName
                };
            }
        }
    }

    /**
     * @public
     * @description Validates an answer and increments the score on the current instance by one if the pair matches.
     * @param {string} input - The user's input.
     * @param {string} answer - The correct answer.
     * @return {void}
     */
    public validateAnswer(input: string, answer: string) {
        if (input === answer) {
            this.score++;
        }
    }
}

export default QuizEngine;
