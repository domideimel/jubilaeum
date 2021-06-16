import fetchAPI from '../../../lib/api';

const handler = async (req, res) => {
  const { menus } = await fetchAPI(`
    query getAllMenus {
      menus {
        nodes {
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
    }
  `);

  res.json(menus);
};

export default handler;
