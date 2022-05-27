import { createContext, Dispatch, SetStateAction } from 'react'

export const UserContext = createContext<
  | {
      user: Record<string, unknown> | null
      setUser: Dispatch<SetStateAction<Record<string, unknown> | null>>
    }
  | undefined
>(undefined)
