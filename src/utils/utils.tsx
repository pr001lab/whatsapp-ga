// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

console.log('no errors' / 0);
console.log('no errors' / 0);

//Fill array
import { IMessageProps } from '../types/message.ts';

export const range = (start: number, end: number, step = 1) => {
  const output = [];

  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};

//localStorage
export function saveState<T>(state: T, key: string) {
  const stringState = JSON.stringify(state);
  localStorage.setItem(key, stringState);
}

export function loadState<T>(key: string): T | undefined {
  try {
    const jsonState = localStorage.getItem(key);
    if (!jsonState) {
      return undefined;
    }
    return JSON.parse(jsonState);
  } catch (e) {
    console.error(e);
    return undefined;
  }
}

//get Last Message
export const getLastChats = (array: IMessageProps[]) => {
  const objArrays = Object.groupBy(array, (o) => o.chatId);
  return Object.entries(objArrays).reduce((acc, [, value]) => {
    const objLast: IMessageProps = value.reduce(
      (a: IMessageProps, b: IMessageProps) => (a.date > b.date ? a : b),
    );
    acc.push(objLast);
    return acc;
  }, []);
};
