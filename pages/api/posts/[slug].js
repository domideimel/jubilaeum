import fetchAPI from '../../../lib/api';

const handler = async (req, res) => {
  const { slug } = req.query;
  const { post } = await fetchAPI(`
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        title
        slug
        date
        content
        featuredImage {
          node {
            srcSet
            sourceUrl
            altText
          }
        }
      }
    }
  `, {
    variables: {
      id: slug,
      idType: 'SLUG'
    }
  });

  res.json(post);
};

export default handler;
