import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AboutSection, Avatar, Title, Text, SubTitle } from "./style"
import { SectionIntro, ContainerLayout, ResumeButton } from "../common"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.webp" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar
                fluid={data.placeholderImage.childImageSharp.fluid}
                alt="user photo"
              />
              <SubTitle> Front End Developer</SubTitle>
            </div>
            <div>
              <Title> Hello, Im {data.site.siteMetadata.author} </Title>
              <Text>
                {" "}
                I'm a Full Stack Developer hailing from{" "}
                <b className="text-primary lined-link">India</b> living in
                TamilNadu.{" "}
              </Text>
              <Text>
                {" "}
                I love working with modern technologies, building and designing
                awesome projects. I prefer minimalistic & clean designs with
                strong user experience.
              </Text>
              <ResumeButton href="resume.pdf" target="_blank">
                {" "}
                Download resume{" "}
              </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}

export default About
