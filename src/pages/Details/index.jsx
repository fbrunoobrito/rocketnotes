import { Container, Links, Content } from "./styles.js";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag/index.jsx";
import { ButtonText } from "../../components/ButtonText/index.jsx";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir Nota" />
          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            minima consequatur commodi ad neque eligendi accusamus nisi
            exercitationem incidunt expedita porro quidem, optio doloremque.
            Facilis, distinctio? Voluptatem illo cum quidem? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Voluptate aliquid magnam quae
            culpa, quisquam quis vero et doloremque officia deleniti
            similique.Iure deserunt eos officiis totam nam ad architecto dicta!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            alias officia autem asperiores illum facilis. Ab officia et aperiam
            soluta. Veritatis hic illum tempore quisquam omnis atque beatae,
            recusandae ipsam. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Nulla consequatur, ratione dignissimos repellendus
            rerum aliquid. Autem impedit, doloremque eius placeat accusantium
            aut obcaecati odio iusto aperiam dolor tempora, facere assumenda.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">http://www.rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">http://www.rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
