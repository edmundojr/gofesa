/** @format */

import React from "react";
import styled from "styled-components";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { ReactComponent as Logo } from "./gofesa-eletrica.svg";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./styles.css";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 344px;
  height: 60vh;
`;

const Gofesa = styled(Logo)`
  width: 80%;
  max-width: 372px;
  height: auto;
`;

const Section = styled.section`
  min-height: 60vh;
`;

const Quote = styled.blockquote`
  margin-top: 3rem;

  &::before {
    display: block;
    font-size: 6rem;
    line-height: 0;
    content: "“";
    opacity: 0.2;
  }

  footer {
    margin-top: 0.5rem;
    font-weight: bold;
  }
`;

const ServiceCard = styled(motion.article)`
  @media (min-width: 768px) {
    &:nth-of-type(2) {
      margin-top: calc(var(--gutter) * 2);
    }
    &:nth-of-type(3) {
      margin-top: calc(var(--gutter) * -2);
    }
    &:nth-of-type(4) {
      margin-top: 0;
    }
    &:nth-of-type(5) {
      margin-top: calc(var(--gutter) * -2);
    }
  }

  @media (min-width: 1200px) {
    &:nth-of-type(2) {
      margin-top: calc(var(--gutter) * 2);
    }
    &:nth-of-type(3) {
      margin-top: calc(var(--gutter) * 4);
    }
    &:nth-of-type(4) {
      margin-top: calc(var(--gutter) * -4);
    }
    &:nth-of-type(5) {
      margin-top: calc(var(--gutter) * -2);
    }
  }

  div {
    height: 400px;
    padding: 1.2rem;
    margin-bottom: 1.6rem;
    background: white;

    &:hover {
      h2 {
        color: currentColor;
      }
    }

    p {
      opacity: 0;
    }
  }
`;

export default () => {
  const { scrollYProgress } = useViewportScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const container = {
    visible: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  const item = {
    hidden: {
      y: "1.5rem",
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <main className="container">
      <Header>
        <Gofesa />
      </Header>
      <motion.section
        className="row"
        id="servicos"
        variants={container}
        initial="hidden"
        animate="visible"
        style={{ translateY }}
      >
        <header className="col-12">
          <div className="row">
            <h1 className="col-12 col-md-6 col-xl-4">Serviços</h1>
            <p className="col-12 col-md-6 col-xl-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta,
              veritatis? Aliquid cum reprehenderit, sed dolor quae nemo aperiam,
              obcaecati consectetur unde numquam id laboriosam?
            </p>
          </div>
        </header>
        <ServiceCard className="col-12 col-md-6 col-xl-4" variants={item}>
          <motion.div
            whileHover={{ backgroundColor: "#184d64", color: "#fff" }}
          >
            <h2>Manutenção e reforma elétrica</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem recusandae numquam eaque, quos rem soluta ullam.
            </p>
          </motion.div>
        </ServiceCard>
        <ServiceCard className="col-12 col-md-6 col-xl-4" variants={item}>
          <motion.div>
            <h2>Revisão e troca de disjuntores</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem recusandae numquam eaque, quos rem soluta ullam.
            </p>
          </motion.div>
        </ServiceCard>
        <ServiceCard className="col-12 col-md-6 col-xl-4" variants={item}>
          <motion.div>
            <h2>Troca de fiação elétrica</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem recusandae numquam eaque, quos rem soluta ullam.
            </p>
          </motion.div>
        </ServiceCard>
        <ServiceCard className="col-12 col-md-6 col-xl-4" variants={item}>
          <motion.div>
            <h2>Troca e conserto de tomadas e chuveiros</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem recusandae numquam eaque, quos rem soluta ullam.
            </p>
          </motion.div>
        </ServiceCard>
        <ServiceCard className="col-12 col-md-6 col-xl-4" variants={item}>
          <motion.div>
            <h2>Instalação de câmeras de segurança</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem recusandae numquam eaque, quos rem soluta ullam.
            </p>
          </motion.div>
        </ServiceCard>
        <ServiceCard className="col-12 col-md-6 col-xl-4" variants={item}>
          <motion.div>
            <h2>Instalação de redes cabeadas e Wi-Fi</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem recusandae numquam eaque, quos rem soluta ullam.
            </p>
          </motion.div>
        </ServiceCard>
      </motion.section>
      <Section id="depoimentos">
        <div className="row justify-content-center">
          <header className="col-10 col-lg-12">
            <h2>O que nossos clientes estão dizendo</h2>
          </header>
          <Quote className="col-10 col-lg-4">
            Realizamos a instalação de um ventilador de teto! Muito bom
            atendimento! Ficou bem instalado e foi pontual no horário marcado!
            <footer>Filipe Zago</footer>
          </Quote>
          <Quote className="col-10 col-lg-4">
            Duas coisas me chamaram atenção: a rapidez com a qual a empresa veio
            resolver meu problema após meu contato inicial, e a dedicação em
            deixar as instalações bem feitas, independentemente de demorarem
            mais para finalizar o serviço. Chamarei novamente quando precisar de
            algo. Recomendo o serviço.
            <footer>Luciano Marquetto</footer>
          </Quote>
          <Quote className="col-10 col-lg-4">
            Excelente profissional, tenho uma empresa e tenho solicitado seus
            serviços para meus clientes e todos elogiaram a prestação de serviço
            dele juntamente com a qualidade e preço justo, super indico.
            <footer>Lúcia Borba</footer>
          </Quote>
        </div>
      </Section>
    </main>
  );
};
