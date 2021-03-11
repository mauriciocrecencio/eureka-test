import { createContext, useState } from "react";
import { Address } from "../interfaces/address";
import { Adresses } from "../interfaces/adresses";
import { api } from "../services/api";

const AdressesContext = createContext<Adresses>({} as Adresses);

export const AdressesProvider: React.FC = ({ children }) => {
  const [adresses, setAdresses] = useState<Address[]>([]);
  const [address, setAddress] = useState<Address | null>(null);
  const [cep, setCep] = useState<number | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const getAddress = async () => {
    setLoading(true);
    await api
      .get("/adresses")
      .then((res) => setAdresses(res.data))
      .then((_) => setLoading(false))
      .catch((_) => window.alert("Erro na requisição"));
  };
  const postAddress = async (cep: number) => {
    setLoading(true);
    if (String(cep).length < 8) {
      setLoading(false);
      return window.alert("Insira um CEP válido");
    }
    await api
      .post("/adresses", { cep })
      .then((res) => {
        setLoading(false);
        if (res.data.hasOwnProperty("message")) {
          window.alert("CEP já registrado!");
          return;
        }
        setAdresses([...adresses, res.data]);
      })
      .catch((err) => {
        setLoading(false);
        window.alert("CEP inválido");
      });
  };

  return (
    <AdressesContext.Provider
      value={{
        cep,
        setCep,
        getAddress,
        address,
        adresses,
        setAddress,
        setAdresses,
        postAddress,
        isLoading,
        setLoading,
      }}
    >
      {children}
    </AdressesContext.Provider>
  );
};

export default AdressesContext;
