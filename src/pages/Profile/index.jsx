import { Container, Form } from "./styles";

import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>
      <Form>
        <Input icon={FiUser} type="text" placeholder="Login" />
        <Input icon={FiMail} type="email" placeholder="E-Mail" />
        <br />
        <Input icon={FiLock} type="password" placeholder="Senha Atual" />
        <Input icon={FiLock} type="password" placeholder="Nova Senha" />
        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
