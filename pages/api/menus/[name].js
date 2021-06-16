import fetchAPI from '../../../lib/api';

const handler = async (req, res) => {
  const { name } = req.query;
  const { menu } = await fetchAPI(`
    query MenuByName($id: ID!, $idType: MenuNodeIdTypeEnum!) {
      menu(id: $id, idType: $idType) {
        count
        id
        databaseId
        name
        slug
        menuItems {
          nodes {
            title
            cssClasses
            description
            label
            linkRelationship
            target
            parentId
            path
            id
          }
        }
      }
    }
  `, {
    variables: {
      id: name,
      idType: 'NAME'
    }
  });

  res.json(menu);
};

export default handler;
