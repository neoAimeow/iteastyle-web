import gql from 'graphql-tag'

export const postGQL = gql`query post($id: ID!) {
    postById(id: $id){
            id
            gmt_create
            title
            content
            gmt_update
    }
}
`;

export const postsGQL = gql`
query posts($page: Int, $limit: Int) {
    posts(page: $page , limit: $limit) {
        total
        limit
        page
        pages
        docs {
            id
            gmt_create
            title
            content
            gmt_update
        }
    }
}
`;