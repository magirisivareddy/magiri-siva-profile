import { gql } from "@apollo/client";

export const GET_HOME_DATA = gql`
  query Home {
    home {
      seo {
        description
        metaTitle
      }
      Blocks {
        ... on ComponentSectionsSkills {
          id
          Title
          Description
          skills {
            id
            name
            Text
          }
        }
        ... on ComponentSectionsSections {
          id
          title
          description
          paragraph {
            id
            text
          }
          focusAreas {
            id
            label
          }
          stats {
            id
            label
            value
          }
          highlights {
            id
            text
          }
          resumeUrl {
            alternativeText
            url
          }
          email
        }
        ... on ComponentSectionsHero {
          id
          name
          role
          tagline
          summary
          resume {
            alternativeText
            url
          }
          profileImage {
            url
            alternativeText
          }
          linkedInUrl {
            id
            link
          }
        }
        ... on Error {
          code
          message
        }
      }
    }
  }
`;
