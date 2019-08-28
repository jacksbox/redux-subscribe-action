import { Action, Middleware } from 'redux';
export declare type Listener = (action: Action) => void;
export declare const subscribeBefore: (listener: Listener) => () => void;
export declare const subscribeAfter: (listener: Listener) => () => void;
export declare const subscribeActionBefore: (action: string, listener: Listener) => () => void;
export declare const subscribeActionAfter: (action: string, listener: Listener) => () => void;
export declare const unsubscribeBefore: () => void;
export declare const unsubscribeActionsBefore: () => void;
export declare const unsubscribeAfter: () => void;
export declare const unsubscribeActionsAfter: () => void;
export declare const unsubscribeAll: () => void;
export declare const subscribeActionMiddleware: Middleware;
export default subscribeActionMiddleware;
