import { Container, Form, Avatar } from "./styles";

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

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
        <Avatar>
          <img
            src="https://github.com/fbrunoobrito.png"
            alt="Foto de Usuário"
          />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input icon={FiUser} type="text" placeholder="Login" />

        <Input icon={FiMail} type="email" placeholder="E-Mail" />

        <Input icon={FiLock} type="password" placeholder="Senha Atual" />

        <Input icon={FiLock} type="password" placeholder="Nova Senha" />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
