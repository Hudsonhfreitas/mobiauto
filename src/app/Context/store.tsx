'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode } from 'react'
import { IForm, IResult } from '../components/Form/types';

interface ContextProps {
    form: IForm,
    setForm: Dispatch<SetStateAction<IForm>>
    result: IResult,
    setResult: Dispatch<SetStateAction<IResult>>
}

const GlobalContext = createContext<ContextProps>({
    form: {} as IForm,
    setForm: () => {},
    result: {} as IResult,
    setResult: () => {}
})

export const GlobalContextProvider = ({ children }: {children: ReactNode}) => {
    const [form, setForm] = useState({} as IForm)
    const [result, setResult] = useState({} as IResult)
    return (
        <GlobalContext.Provider value={{form, setForm, result, setResult}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const UseGlobalContext = () => useContext(GlobalContext)