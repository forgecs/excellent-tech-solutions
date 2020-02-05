import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";


export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  <div>
    <section
      className="bg-center bg-cover"
      style={{
        backgroundImage: `linear-gradient(to right bottom, rgba(0,0,0, 0.7), rgba(0,0,0, 0.7)), url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        height: `26rem`
      }}
    >
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="text-cool-grey-050 text-4xl sm:text-5xl tracking-tight leading-none uppercase px-4 py-2">
          <div className="excellent">
            <span className="text-light-blue-vivid-500">E</span>xcellent
            <br />
          </div>
          <div className="tech">
            <span className="text-light-blue-vivid-500">T</span>ech
            <br />
          </div>
          <div className="solutions">
            <span className="text-light-blue-vivid-500">S</span>olutions
          </div>
        </h1>

        {/* <h1 className="text-cool-grey-050 text-3xl sm:text-5xl font-bold px-4 py-2">
          {title}
        </h1>
        <h3 className="text-cool-grey-050 text-lg sm:text-xl font-semibold px-2 py-1 mt-5">
          {subheading}
        </h3> */}
      </div>
    </section>

    <section className="bg-black py-16">
      <div className="flex flex-col justify-center items-center px-4">
        <h1 className="font-bold text-cool-grey-200 text-xl">
          {mainpitch.title}
        </h1>
        <h3 className="text-cool-grey-200 text-lg mt-2">
          {mainpitch.description}
        </h3>
      </div>

      <div className="flex flex-col items-center border-b border-cool-grey-900 px-4 pb-16 mt-10">
        <h3 className="font-semibold text-cool-grey-200 text-lg">{heading}</h3>
        <p className="leading-relaxed text-cool-grey-200 text-center max-w-lg mt-4">
          {description}
        </p>
      </div>

      <Features gridItems={intro.blurbs} />

      <div className="flex flex-col items-center mt-20">
        <h3 className="font-bold text-cool-grey-200 text-lg sm:text-xl tracking-wider uppercase">
          Latest stories
        </h3>

        <BlogRoll />

        <Link
          className="font-semibold text-cool-grey-100 sm:text-lg bg-light-blue-vivid-500 px-4 py-2 sm:px-5 sm:py-3 rounded mt-10 hover:bg-light-blue-vivid-600 focus:bg-light-blue-vivid-600"
          to="/blog"
        >
          Read More
        </Link>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
