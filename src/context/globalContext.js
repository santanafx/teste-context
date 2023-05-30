import React from 'react'

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {

    var data = [{
        id: 'teste1',
        edicao: '1',
        descricao: '2',
    },
    {
        id: 'teste2',
        edicao: '1',
        descricao: '2',
    },
    {
        id: 'teste3',
        edicao: '1',
        descricao: '2',
    }]

    return (
        <Context.Provider value={{ data }}>
            {children}
        </Context.Provider>
    )
}