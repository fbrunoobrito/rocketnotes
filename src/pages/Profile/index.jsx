import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Avatar } from "./styles";

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
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
