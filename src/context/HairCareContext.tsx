import { createContext, useContext, useState, ReactNode } from "react";

interface HairCareContextType {
  recommendations: string[];
  setRecommendations: (recommendations: string[]) => void;
}

const defaultValue: HairCareContextType = {
  recommendations: [],
  setRecommendations: () => {},
};

const HairCareContext = createContext<HairCareContextType>(defaultValue);

export function HairCareProvider({ children }: { children: ReactNode }) {
  const [recommendations, setRecommendations] = useState<string[]>([]);

  return (
    <HairCareContext.Provider
      value={{
        recommendations,
        setRecommendations,
      }}
    >
      {children}
    </HairCareContext.Provider>
  );
}

export const useHairCare = () => useContext(HairCareContext);
