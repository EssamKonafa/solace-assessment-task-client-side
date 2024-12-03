import { gql } from '@apollo/client';

export const UPDATE_USER = gql`
  mutation UpdateUser($id: Int!, $edit: EditUser!) {
    updateUser(id: $id, edit: $edit) {
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
          name
        }
      }
      maritalStatus {
        name
      }
      dependants
    }
  }
`;