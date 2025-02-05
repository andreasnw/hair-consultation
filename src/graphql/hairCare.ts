import { gql } from "@apollo/client";

export const UPLOAD_IMAGE = gql`
  mutation UploadHairScan($image: String!) {
    uploadHairScan(image: $image) {
      recommendations
    }
  }
`;
