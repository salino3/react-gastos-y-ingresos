import React from "react";
import { MyState } from "./interface";


export const Context = React.createContext<MyState>({} as MyState);

