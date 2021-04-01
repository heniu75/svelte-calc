import { writable } from 'svelte/store';

export interface CalculatorModel {
    left: number;
    right: number;
    answer: number;
}

const initialState = (): CalculatorModel => ({
    left: 0,
    right: 0,
    answer: 0
});

export interface CalculatorStore {
    subscribe: any,
    update: any,
    reset: () => void;
}

function createCalculatorStore(): CalculatorStore {
    const { subscribe, set, update } = writable(initialState());

    return {
        subscribe,
        update,
        reset: () => set( initialState() )
    };
}

export const calculator = createCalculatorStore();

export const incrementLeft = (calculator: CalculatorStore): void => {
    calculator.update(cm => ({
        ...cm,
        left: cm.left + 1
    }))
}

export const incrementRight = (calculator: CalculatorStore): void => {
    calculator.update(cm => ({
        ...cm,
        left: cm.right + 1
    }))
}

export const add = (calculator: CalculatorStore): void => {
    calculator.update(cm => ({
        ...cm,
        answer: cm.left + cm.right
    }))
}

export const setLeft = (calculator: CalculatorStore, left): void => {
    calculator.update(cm => ({
        ...cm,
        left
    }))
}

export const setRight = (calculator: CalculatorStore, right): void => {
    calculator.update(cm => ({
        ...cm,
        right
    }))
}

export const equals = (calculator: CalculatorStore): number => {
    let answer;
    calculator.update(cm => {
        answer = cm.left + cm.right;
        return {
            ...cm,
                answer: cm.left + cm.right
            };
        }
    );
    return answer;
}
