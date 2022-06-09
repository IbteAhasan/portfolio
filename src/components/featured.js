import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { StyledHeading, Subtext } from "../styles/globalStyles";
import { Link } from "gatsby";
import ReactIcon from "./icons/react";
import Nodejs from "./icons/nodejs";
import Javascript from "./icons/javascript";
import Arrow from "./icons/arrow";
const FeaturedSection = styled.section`
  margin-bottom: 80px;
`;
const FeaturedItems = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  .featured {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
  }
`;
const FeaturedItem = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
  .titleWrapper {
    display: flex;
    align-items: center;
    .number {
      color:  ${(props) => props.theme.colors.faded};
      font-size: 1.6rem;
      margin-right: 20px;
    }
  }
  .iconWrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    svg {
      height: 22px;
      width: 22px;
      color: ${(props) => props.theme.colors.primary};
      margin-left: 10px;
    }
  }
`;
const SeeMore = styled(Link)`
  font-size: 18px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  margin: 30px 0;
  svg {
    height: 18px;
    width: 18px;
    margin-top: 1px;
    margin-left: 1px;
    transition: all 0.1s ease-out;
  }
  &:hover {
    color: ${(props) => props.theme.colors.primary};
    svg {
      transform: translateX(5px);
    }
  }
`;
export default function Featured() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `);
  return (
    <FeaturedSection>
      <StyledHeading>Some of my works</StyledHeading>
      <Subtext>Some of my very recent projects are featured here</Subtext>
      <FeaturedItems>
        {data.allMarkdownRemark.nodes.map((node, i) => (
          <Link className="featured" to={`${node.fields.slug}`}>
            <FeaturedItem>
              <div className="titleWrapper">
                <div className="number">{"0" + (1 + i)}</div>
                <div className="title">{node.frontmatter.title}</div>
              </div>
              <div className="iconWrapper">
                <ReactIcon />
                <Nodejs />
                <Javascript />
              </div>
            </FeaturedItem>
          </Link>
        ))}
      </FeaturedItems>
      <SeeMore to="/projects">
        See more
        <Arrow />
      </SeeMore>
    </FeaturedSection>
  );
}
