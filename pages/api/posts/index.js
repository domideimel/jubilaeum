import fetchAPI from '../../../lib/api';

const handler = async (req, res) => {
  const { posts } = await fetchAPI(`
    query AllPosts {
      posts(first: 20, where: {orderby: {field: DATE, order: DESC}}) {
        edges {
          node {
            id
            date
            title
            slug
            featuredImage {
              node {
                sourceUrl
                srcSet
                altText
              }
            }
          }
        }
      }
    }`);

  res.json(posts);
};

export default handler;
