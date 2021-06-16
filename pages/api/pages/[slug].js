import fetchAPI from '../../../lib/api';

const handler = async (req, res) => {
  const { slug } = req.query;
  const { page } = await fetchAPI(`
    query PageBySlug($id: ID!, $idType: PageIdType!) {
      page(id: $id, idType: $idType) {
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
      idType: 'URI'
    }
  });

  res.json(page);
};

export default handler;
