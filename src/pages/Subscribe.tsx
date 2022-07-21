import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import Logo from "../components/Logo";

const CREATE_SUBCRIBER_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;

const Subscribe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubscribe(event: FormEvent) {
    event?.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });
  }

  const [createSubscriber] = useMutation(CREATE_SUBCRIBER_MUTATION);

  return (
    <div className="flex flex-col items-center min-h-screen bg-no-repeat bg-cover bg-blur">
      <title>Register</title>

      <div className="w-full max-w-[1100px] flex justify-between mt-20 mx-auto items-center">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React JS</strong>
          </h1>
          <p className="mt-4 leading-relaxed text-gray-200">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="block mb-6 text-2xl">
            Inscreva-se gratuitamente
          </strong>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col w-full gap-2"
          >
            <input
              className="px-5 bg-gray-900 rounded outline-none h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="px-5 bg-gray-900 rounded outline-none h-14"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(event) => setEmail(event.target.value)}
            />
            <button
              className="px-8 mt-4 font-bold uppercase transition-colors bg-green-500 rounded hover:bg-green-700 text-small h-14"
              type="submit"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img
        src="/src/assets/code-mockup.png"
        className="mt-10"
        alt="code mockup"
      />
    </div>
  );
};

export default Subscribe;
