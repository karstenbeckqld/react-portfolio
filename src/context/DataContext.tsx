import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

export type Data = {
    id: string;
    showcasePath: string;
    imagePaths: string[];
    title: string;
    link: string;
    description: string;
    tech: string[];
    type: string;
}

export type DataContextType = {
    data: Data | null;
    setData: Dispatch<SetStateAction<Data | null>>;
}

export const DataContext = createContext<DataContextType | undefined>(undefined);

type DataContextProviderType = {
    children: ReactNode;
}

export const DataContextProvider = ({ children }: DataContextProviderType) => {

    const [data, setData] = useState<Data | null>(null);

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
