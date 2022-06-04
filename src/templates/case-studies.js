import React from "react";
import Layout from "../layout/layout";
import styled from "styled-components";
import External from "../components/icons/external";
import GitHub from "../components/icons/github";
import { graphql } from "gatsby";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import FbRounded from "../components/icons/facebookRound";
import Twitter from "../components/icons/twitter";
import SEO from "../components/seo";
deckDeckGoHighlightElement();
const CaseStudysection = styled.section`
  margin-top: 20px;
`;
const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 75px;
`;
const StyledTitle = styled.h1`
  font-size: 3.5rem;
  line-height: 150%;
  @media ${(props) => props.theme.breakpoints.md}{
    font-size: 2.5rem;
  }
`;
const ProjectLinks = styled.div`
  display: flex;
  svg {
    color: black;
    background-color: lightgray;
    height: 30px;
    width: 30px;
    margin-left: 10px;
    padding: 5px;
    border-radius: 5px;
    transition: all 0.15s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
const IframeWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%;
  border-radius: 10px;
  height: max-content;
  box-shadow:rgb(0 0 0 / 5%) 0px 5px 10px;
  iframe {
    overflow: hidden;
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;
const ProjectInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  margin-bottom: 70px;
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    row-gap: 70px;
  }
  ul {
    font-size: 1.7rem;
    margin: 10px 0;
    li {
      list-style-type: none;
      line-height: 165%;
      a {
        text-decoration: none;
      }
    }
  }
`;
const InfoTitle = styled.h4`
  height: max-content;
  align-items: center;
  width: 100%;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  color: gray;
  &::after {
    content: "";
    height: 1px;
    width: 100%;
    background-color: lightgray;
    margin-left: 8px;
    flex: 1 0 20px;
  }
`;
const InfoText = styled.p`
  font-size: 1.7rem;
  line-height: 165%;
  margin: 20px 0;
`;
const SplitLayout = styled.section`
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  justify-content: space-between;
  margin-top: 30px;
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    row-gap: 70px;
  }
`;
const SplitMain = styled.section`
  display: flex;
  flex-direction: column;
`;
const SplitSide = styled.div`
  position: relative;
  text-align: right;
  font-size: 16px;
  @media ${(props) => props.theme.breakpoints.md} {
    text-align: left;
    row-gap: 70px;
  }
`;
const Sticky = styled.div`
  position: sticky;
  top: 75px;
`;

const MarkDownWrapper = styled.article`
  p {
    font-size: 1.8rem;
    line-height: 165%;
    margin: 5px 0;
  }

  h2 {
    font-size: 24px;
    line-height: 150%;
  }
  a {
    text-decoration: none;
  }
  li {
    font-size: 16px;
    line-height: 170%;
    margin-left: 15px;
  }
  blockquote {
    background-color: lightgray;
    padding: 2rem;
    border-left: 4px solid;
    margin: 50px 0;
    border-color: darkgray;
    font-style: italic;
    color: gray;
  }
`;
const SharerWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: flex-start;
  }
  svg {
    height: 24px;
    width: 24px;
    color: black;
    margin-left: 12px;
    margin-top: 20px;
    :hover {
      color: gray;
    }
    @media ${(props) => props.theme.breakpoints.md} {
      justify-content: center;
      margin-right: 12px;
      margin-left: 0;
    }
  }
`;
export default function CaseStudy({ data }) {
  const post = data.markdownRemark;
  console.log(post.frontmatter.demo)
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <CaseStudysection>
        <TitleSection>
          <StyledTitle>{post.frontmatter.title}</StyledTitle>
          <ProjectLinks>
            <a href={post.frontmatter.demo}>
              <External />
            </a>
            <a href={post.frontmatter.src}>
              <GitHub />
            </a>
          </ProjectLinks>
        </TitleSection>
        <ProjectInfo>
          <div>
            <InfoTitle>Idea</InfoTitle>
            <InfoText>{post.frontmatter.info.idea}</InfoText>
            <InfoTitle>Core Technologies</InfoTitle>
            <ul>
              {post.frontmatter.info.tech.map((t) => (
                <li>{t}</li>
              ))}
            </ul>
            {post.frontmatter.info.links && (
              <>
                <InfoTitle>Links & Resources</InfoTitle>
                <ul>
                  {post.frontmatter.info.links.map((link) => (
                    <li>
                      <a href={link[1]}>{link[0]}</a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <IframeWrapper>
            <iframe
              width="560"
              height="315"
              src={post.frontmatter.iframe}
            ></iframe>
          </IframeWrapper>
        </ProjectInfo>
        <SplitLayout>
          <SplitMain>
            <MarkDownWrapper
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
          </SplitMain>
          <SplitSide>
            <Sticky>
              <h3>Share on</h3>
              <SharerWrapper>
                <a href="">
                  <FbRounded />
                </a>
                <a href="">
                  <Twitter />
                </a>
              </SharerWrapper>
            </Sticky>
          </SplitSide>
        </SplitLayout>
      </CaseStudysection>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        src
        demo
        iframe
        info {
          idea
          links
          tech
        }
      }
    }
  }
`;
