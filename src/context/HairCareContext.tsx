import { createContext, useContext, useState, ReactNode } from "react";

interface ScanResult {
  hairType: string;
  hairLossLevel: string;
  scalpHealth: string;
}
interface HairCareContextType {
  scanResult: ScanResult | null;
  setScanResult: (result: ScanResult) => void;
}

const defaultValue: HairCareContextType = {
  scanResult: null,
  setScanResult: () => {},
};

const HairCareContext = createContext<HairCareContextType>(defaultValue);

export function HairCareProvider({ children }: { children: ReactNode }) {
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);

  return (
    <HairCareContext.Provider
      value={{
        scanResult,
        setScanResult,
      }}
    >
      {children}
    </HairCareContext.Provider>
  );
}

export const useHairCare = () => useContext(HairCareContext);
