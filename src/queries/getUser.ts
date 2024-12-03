import { gql } from '@apollo/client';

export const GET_USER = gql`
query GetUser($id: Int!) {
  user(id: $id) {
    firstName
    fatherName
    grandfatherName
    familyName
    localizedName {
      firstName
      fatherName
      grandfatherName
      familyName
    }
    nationalId {
      idNumber
      expiryDate
    }
    nationalities {
      country {
        id
        name
      }
      countryId
    }
    maritalStatus {
      id
      name
    }
    dependants
  }
}
`;