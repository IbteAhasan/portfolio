import React from "react";
import Layout from "../layout/layout";
import { Link } from "gatsby";
import styled from "styled-components";
import External from "../components/icons/external";
import GitHub from "../components/icons/github";
import { graphql } from "gatsby";
import Folder from "../components/icons/folder";
import { StyledHeading } from "../styles/globalStyles";
import SEO from "../components/seo";
const ProjectSection = styled.section`
  margin-top: 30px;
`;
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 70px 0;
`;
const ProjectWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgb(240, 240, 240);
  padding: 3rem;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 7%) 0px 5px 10px;
  transition: all 0.15s ease;
  &:hover,
    &:focus-within{
      transform:translateY(-7px);
    }
`;
const ProjectTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .linksWrapper {
    display: flex;
    align-items: center;
    z-index: 50;
    svg {
      height: 22px;
      width: 22px;
      color: #6b7280;
      margin-left: 10px;
      transition: all 0.15s;
      &:hover {
        transform: scale(1.1);
        color: black;
      }
    }
  }
  .folder {
    height: 40px;
    width: 40px;
    color: black;
  }
`;
const ProjectTitle = styled.h2`
  font-size: 2rem;
  line-height: 160%;
  margin: 10px 0;
`;
const ProjectDesc = styled.div`
  p {
    font-size: 1.5rem;
    line-height: 160%;
  }
`;
const ProjectLink = styled(Link)`
position: static;
text-decoration:none;
color: black;
&:hover{color:gray}
  &::before {
    top: 0;
    left: 0;
    position: absolute;
    content: "";
    z-index: 0;
    width: 100%;
    height: 100%;
    &:hover{
    }
  }
`;
export default function Project({ data }) {
  const projects = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <SEO title="Project Archive" />
      <ProjectSection>
        <StyledHeading>Project Archive</StyledHeading>
        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectWrapper>
              <ProjectTop>
                <div className="folder">
                  <Folder />
                </div>
                <div className="linksWrapper">
                  <a href="">
                    <External />
                  </a>
                  <a href="">
                    <GitHub />
                  </a>
                </div>
              </ProjectTop>
              <ProjectTitle>
                <ProjectLink to={project.fields.slug}>{project.frontmatter.title}</ProjectLink>
              </ProjectTitle>
              <ProjectDesc>
                <p>{project.frontmatter.excerpt}</p>
              </ProjectDesc>
            </ProjectWrapper>
          ))}
        </ProjectsGrid>
      </ProjectSection>
    </Layout>
  );
}
export const query = graphql`
  query ProjectsQuery {
    allMarkdownRemark {
      nodes {
        fields{
          slug
        }
        frontmatter {
          excerpt
          demo
          iframe
          info {
            tech
          }
          title
          src
        }
      }
    }
  }
`;
