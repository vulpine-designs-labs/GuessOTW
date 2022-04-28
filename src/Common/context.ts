import { createContext } from "react"

export interface ContextProps {
    setDarkmode: (dark: boolean) => void,
    darkMode: boolean
};

export class ContextProps {
    constructor() {
        this.setDarkmode = (dark: boolean) => {};
        this.darkMode = false;
    }
};

export const Context = createContext<ContextProps>(new ContextProps());
