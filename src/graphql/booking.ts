import { gql } from "@apollo/client";

export const GET_DOCTORS = gql`
  query {
    doctors {
      name
    }
  }
`;