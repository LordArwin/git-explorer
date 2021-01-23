import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { HashLoader } from 'react-spinners';
import { Header, RepositoryInfo, Issues, Loading } from './style';
import Logo from '../../assets/img/logo.svg';
import api from '../../services/api';

interface RepoParams {
  repo: string;
}
interface Repo {
  full_name: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  description: string;
  owner: { login: string; avatar_url: string };
}
interface Issue {
  id: number;
  html_url: string;
  title: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repo | null>(null);
  const [issuesRepository, setIssuesRepository] = useState<Issue[]>([]);
  const { params } = useRouteMatch<RepoParams>();
  useEffect(() => {
    async function getDetails() {
      const [repositoryDetail, issues] = await Promise.all([
        api.get<Repo>(`/repos/${params.repo}`),
        api.get<Issue[]>(`/repos/${params.repo}/issues`),
      ]);
      setTimeout(() => {
        setRepository(repositoryDetail.data);
        setIssuesRepository(issues.data);
      }, 1500);
    }
    getDetails();
  }, [params.repo]);
  return (
    <>
      <Header>
        <img src={Logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          voltar
        </Link>
      </Header>
      {repository ? (
        <>
          <RepositoryInfo>
            <header>
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
            </header>
            <ul>
              <li>
                <strong>{repository.stargazers_count}</strong>
                <span>Stars</span>
              </li>
              <li>
                <strong>{repository.forks_count}</strong>
                <span>Forks</span>
              </li>
              <li>
                <strong>{repository.open_issues_count}</strong>
                <span>Issues abertas</span>
              </li>
            </ul>
          </RepositoryInfo>

          <Issues>
            {issuesRepository.map(issue => (
              <a key={issue.id} href={issue.html_url}>
                <div>
                  <strong>{issue.title}</strong>
                  <p>{issue.user.login}</p>
                </div>
                <FiChevronRight />
              </a>
            ))}
          </Issues>
        </>
      ) : (
        <Loading>
          <HashLoader color="#6a5acd" loading size={50} />
        </Loading>
      )}
    </>
  );
};

export default Repository;
