import { Container } from "@chakra-ui/react";
import Layout from "../components/layout/Layout";
import Title, { SubTitle } from "../components/comm/Title";
import { Section } from "../components/layout/Container";

const Home = () => {
  return (
    <Layout title="LOGO 이름">
      <Section background={"lightyellow"}>
        <Title>회사소개</Title>

        <SubTitle>대표님인사</SubTitle>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione
          officiis enim ex rerum mollitia eius minus eos aliquam quam dicta non,
          similique dolore, porro error a laboriosam! Vel, ab.
        </p>
        <SubTitle>회사연혁</SubTitle>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex illum quo
          minima qui atque! Sit, saepe! Dolore repudiandae ratione quia
          quibusdam aspernatur accusamus hic quo voluptate iure. Porro, minus
          aliquid.
        </p>
        <SubTitle>우리회사제품</SubTitle>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iusto
          corrupti fuga aut facere incidunt sed, quasi nesciunt neque ab tempora
          expedita perspiciatis. Exercitationem aut dignissimos hic laboriosam
          fugiat minus?
        </p>
      </Section>
      <Section background={"lightblue"}>
        <Title>주요내용</Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione
          officiis enim ex rerum mollitia eius minus eos aliquam quam dicta non,
          similique dolore, porro error a laboriosam! Vel, ab.
        </p>
      </Section>
      <Section background={"lightpink"}>
        <Title>오시는길</Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione
          officiis enim ex rerum mollitia eius minus eos aliquam quam dicta non,
          similique dolore, porro error a laboriosam! Vel, ab.
        </p>
      </Section>
    </Layout>
  );
};

export default Home;
