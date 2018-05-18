import gql from 'graphql-tag'

export const caseGQL = gql`query case($id: ID!) {
    caseByID(id: $id){
            id
            title
            imageArr
            gmt_create
    }
}
`;

export const casesGQL = gql`
query cases($page: Int, $limit: Int) {
    cases(page: $page , limit: $limit) {
        total
        limit
        page
        pages
        docs {
            id
            title
            imageArr
            gmt_create
        }
    }
}
`;