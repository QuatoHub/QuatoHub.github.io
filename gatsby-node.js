/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: <https://www.gatsbyjs.com/docs/node-apis/>
 */

// You can delete this file if you're not using it

const path = require('path');

const { createFilePath } = require(`gatsby-source-filesystem`);

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        assets: path.resolve(__dirname, 'src/assets'),
        components: path.resolve(__dirname, 'src/components'),
        domains: path.resolve(__dirname, 'src/domains'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        styles: path.resolve(__dirname, 'src/styles'),
        templates: path.resolve(__dirname, 'src/templates'),
        typings: path.resolve(__dirname, 'src/typings'),
      },
    },
  });
};

// Generate a Slug Each Post Data
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });

    createNodeField({ node, name: 'slug', value: slug });
  }
};

// Generate Page Through Markdown Data
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  // Import Template Component
  const postTemplate = path.resolve('src/templates/PostTemplate.tsx');
  const categoryTemplate = path.resolve('src/templates/CategoryTemplate.tsx');
  const pageTemplate = path.resolve('src/templates/PageTemplate.tsx');

  // Get All Markdown File For Paging
  return graphql(`
    {
      posts: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        skip: 1
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      category: allMarkdownRemark {
        group(field: frontmatter___category) {
          fieldValue
          totalCount
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.posts.edges;

    posts.forEach(
      ({
        node: {
          fields: { slug },
        },
      }) => {
        createPage({
          path: slug,
          component: postTemplate,
          context: { slug },
        });
      },
    );

    const categories = result.data.category.group;

    categories.forEach(category => {
      createPage({
        path: `${category.fieldValue.toLowerCase()}/`,
        component: categoryTemplate,
        context: {
          category: category.fieldValue,
          count: category.totalCount,
        },
      });
    });

    const postList = result.data.posts.edges;
    const postsPerPage = 10;
    const numPages = Math.ceil(postList.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/page/1` : `/page/${i + 1}`,
        component: pageTemplate,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage + 1,
          numPages: numPages,
          currentPage: i + 1,
        },
      });
    });
  });
};
