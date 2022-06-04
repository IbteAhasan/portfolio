

const slugify = require('./src/components/slugify.js');
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
  
    if (node.internal.type !== 'MarkdownRemark') return;
  
    const fileNode = getNode(node.parent);
    const slugFromTitle = slugify(node.frontmatter.title);
  
    // sourceInstanceName defined if its a blog or case-studie
    const sourceInstanceName = fileNode.sourceInstanceName;
  
    // extract the name of the file because we need to sort by it's name
    // `001-blahblah`
    const fileIndex = fileNode.name.substr(2, 1);
  
    // create slug nodes
    createNodeField({
      node,
      name: 'slug',
      // value will be {blog||case-studies}/my-title
      value: '/' + sourceInstanceName + '/' + slugFromTitle,
    });
  
    
  
    // if sourceInstanceName is case-studies then add the fileIndex field because we need
    // this to sort the Projects with their respective file name `001-blahblah`
    if (sourceInstanceName == 'case-studies') {
      createNodeField({
        node,
        name: 'fileIndex',
        value: fileIndex,
      });
    }
  };
exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    data.allMarkdownRemark.edges.forEach(edge => {
      const slug = edge.node.fields.slug
      actions.createPage({
        path: slug,
        component: require.resolve(`./src/templates/case-studies.js`),
        context: { slug: slug },
      })
    })
  }

  