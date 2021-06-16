import fetchAPI from '../../../lib/api';

const handler = async (req, res) => {
  const { pages } = await fetchAPI(`
    query getAllPages {
      pages {
        nodes {
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
    }`);

  res.json(pages);
};

export default handler;
