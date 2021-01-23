import React, { FormEvent, useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Title, Img, Form, Repositories, Error } from './style';
import Logo from '../../assets/img/logo.svg';
import api from '../../services/api';

interface Repo {
  full_name: string;
  description: string;
  owner: { login: string; avatar_url: string };
}
const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repo[]>(() => {
    const repos = localStorage.getItem('@Github_explorer/repositories');
    if (repos) {
      return JSON.parse(repos);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@Github_explorer/repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);
  async function HandleRepo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!newRepo) {
      setInputError('Digite o autor/nome do repositorio');
      return;
    }
    try {
      const response = await api.get<Repo>(`/repos/${newRepo}`);
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch {
      setInputError('Erro na busca por esse repositorio');
    }
  }

  return (
    <>
      <Img src={Logo} alt="GitHub Explorer Logo" />
      <Title>Explore Repositorios do GitHub</Title>
      <Form hasError={!!inputError} onSubmit={HandleRepo}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do Repositorio"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map(repo => (
          <Link key={repo.full_name} to={`repository/${repo.full_name}`}>
            <img
              src={repo.owner.avatar_url}
              alt={`Avatar GitHub Profile of ${repo.owner.login}`}
            />
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>
            <FiChevronRight />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
