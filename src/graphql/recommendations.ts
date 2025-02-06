import { gql } from "@apollo/client";

export const GET_DOCTORS = gql`
  query ($hairType: String, $hairLossLevel: String, $scalpHealth: String) {
    recommendations {
      name
      hairType
      hairLossLevel
      scalpHealth
    }
  }
`;
