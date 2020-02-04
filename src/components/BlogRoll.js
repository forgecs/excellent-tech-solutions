import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="flex justify-center flex-wrap max-w-4xl pb-16">
        {posts &&
          posts.map(({ node: post }) => (
            <div
              className="flex-grow max-w-sm border border-cool-grey-900 rounded shadow-lg mt-10 mx-5"
              key={post.id}
            >
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? "is-featured" : ""
                }`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="flex items-start flex-col px-4 py-6">
                    <Link
                      className="font-bold text-light-blue-vivid-400 hover:text-light-blue-vivid-600"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    {/* <span> &bull; </span> */}
                    <span className="text-cool-grey-200">
                      {post.frontmatter.date}
                    </span>
                  </p>
                </header>
                <p className="text-cool-grey-200 px-4 pb-8">
                  {post.excerpt}
                  <br />
                  <br />
                  <Link
                    className="font-semibold text-light-blue-vivid-700 px-4 py-2 rounded border-2 border-light-blue-vivid-400 hover:bg-light-blue-vivid-400 hover:text-cool-grey-100"
                    to={post.fields.slug}
                  >
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 240, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
