import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";

import { Container, Form } from "./styles";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
          </header>
          <Input placeholder="Titulo" />
          <TextArea placeholder="Observações" />
          <Section title="Links Úteis">
            <NoteItem
              value="https://rocketseat.com.br"
              placeholder="Novo Link"
            />
            <NoteItem isNew placeholder="Novo Link" />
          </Section>
        </Form>
      </main>
    </Container>
  );
}
