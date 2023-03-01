import ExpressBrute from 'express-brute';

export const store = new ExpressBrute.MemoryStore();

export const bruteforce = new ExpressBrute(store);

export const globalBruteForce = new ExpressBrute(store, {
    freeRetries: 1000,
    attachResetToRequest: false,
    refreshTimeoutOnRequest: false,
});
