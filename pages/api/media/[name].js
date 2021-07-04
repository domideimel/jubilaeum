import fetchAPI from '../../../lib/api';

const handler = async (req, res) => {
  const { name } = req.query;
  const { mediaItem } = await fetchAPI(`
    query MediaItemByName($id: ID!, $idType: MediaItemIdType!) {
      mediaItem(id: $id, idType: $idType) {
        sourceUrl
        srcSet
        altText
      }
    }
  `, {
    variables: {
      id: name,
      idType: 'SLUG'
    }
  });

  res.json(mediaItem);
};

export default handler;
