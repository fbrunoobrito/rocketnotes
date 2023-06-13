import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { Container, Form, Background } from "./styles";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Faça Login</h2>
        <Input placeholder="Email" type="email" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />
        <Button title="Entrar" /> <Link to="/register">Criar Conta</Link>
      </Form>
      <Background />
    </Container>
  );
}
