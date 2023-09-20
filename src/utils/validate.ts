export const required = (value: string): string | undefined => value ? undefined : 'Required';

export const minLength = (min: number) => (value: string): string | undefined => value.length >= min ? undefined : `min length is ${min}`;