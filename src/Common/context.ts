import { createContext } from "react"

export interface ContextProps {
    setDarkmode: (dark: boolean) => void
};

export class ContextProps {
    constructor() {
        this.setDarkmode = (dark: boolean) => {}
    }
};

export const Context = createContext<ContextProps>(new ContextProps());
