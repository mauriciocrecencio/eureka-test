import { Address } from "./address";

export interface Adresses {
  address: Address | null,
  setAddress: (adress: Address) => void,
  cep: number | null,
  setCep: (cep:number) => void,
  adresses: Address[]| null,
  setAdresses: (address: Address[]) => void
  getAddress: () => Promise<void>
  postAddress: (cep: number) => Promise<void>
  isLoading: boolean
  setLoading: (isLoading: boolean) => void
}