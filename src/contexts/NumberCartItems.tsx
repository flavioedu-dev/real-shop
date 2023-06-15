import { ReactNode, createContext, useState } from 'react'

interface INumberCartItemsContext {
  quantity: number;
  updateQuantity: (newNumber: number) => void;
}

interface NumberCartItemsContextProviderProps {
  children: ReactNode;
}

export const NumberCartItemsContext = createContext<INumberCartItemsContext | null>(null)


export const NumberCartItemsContextProvider = ({ children }: NumberCartItemsContextProviderProps) => {
  const [quantity, setQuantity] = useState<number>(0)

  const currentNumberItems: INumberCartItemsContext = {
    quantity,
    updateQuantity: (newNumber: number) => setQuantity(newNumber)
  }

  return (
    <NumberCartItemsContext.Provider value={currentNumberItems}>
      {children}
    </NumberCartItemsContext.Provider>
  )
}



