import gql from 'graphql-tag'

export const companyInfoGQL = gql`
query companyInfo {
    companyInfo{
        name
        postcode
        phone
        telephone
        mail
        weburl
        story
        videoUrl
    }
}
`;