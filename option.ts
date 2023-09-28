export type None = {__kind: 'none'};
export type Some<T> = {__kind: 'some', value: T}
export type Option<T> = None | Some<T>;

export const isNone = <T>(value: Option<T>): value is None => value.__kind === 'none';
export const isSome = <T>(value: Option<T>): value is Some<T> => value.__kind === 'some';


export const of = <T>(value: T | undefined): Option<T>  => 
    value ? {__kind: 'some', value: value} : {__kind: 'none'};

export const map = <T, B>(func: (n: T) => B, option: Option<T>): Option<B> => 
    isSome(option) ? of(func(option.value)) : option;

