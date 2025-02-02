import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      nome: 'GABRIEL SOARES',
      cargo: 'Desenvolvedor de software e instrutor',
      imagem: 'https://media.licdn.com/dms/image/C4D03AQG8P3EJZzx3rw/profile-displayphoto-shrink_400_400/0/1617847350237?e=1710979200&v=beta&t=deKDqRjkZq0gjsbukD7gZAI3lkdXKrzZSsJ7eojp6x0',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'TAÍS ANSELMO',
      cargo: 'Engenheira de Software na Stone Age',
      imagem: 'https://media-gig4-2.cdn.whatsapp.net/v/t61.24694-24/390184697_873271427600568_4914410145190173059_n.jpg?ccb=11-4&oh=01_AdQjXg152yxFj1F1FiJLIKUuHub2y4LebCP_Du0gYWegPw&oe=65C224E1&_nc_sid=e6ed6c&_nc_cat=110',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'GABRIEL SOARES',
      cargo: 'Desenvolvedor de software e instrutor',
      imagem: 'https://media.licdn.com/dms/image/C4D03AQG8P3EJZzx3rw/profile-displayphoto-shrink_400_400/0/1617847350237?e=1710979200&v=beta&t=deKDqRjkZq0gjsbukD7gZAI3lkdXKrzZSsJ7eojp6x0',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'TAÍS ANSELMO',
      cargo: 'Engenheira de Software na Stone Age',
      imagem: 'https://media-gig4-2.cdn.whatsapp.net/v/t61.24694-24/390184697_873271427600568_4914410145190173059_n.jpg?ccb=11-4&oh=01_AdQjXg152yxFj1F1FiJLIKUuHub2y4LebCP_Du0gYWegPw&oe=65C224E1&_nc_sid=e6ed6c&_nc_cat=110',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'GABRIEL SOARES',
      cargo: 'Desenvolvedor de software e instrutor',
      imagem: 'https://media.licdn.com/dms/image/C4D03AQG8P3EJZzx3rw/profile-displayphoto-shrink_400_400/0/1617847350237?e=1710979200&v=beta&t=deKDqRjkZq0gjsbukD7gZAI3lkdXKrzZSsJ7eojp6x0',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'TAÍS ANSELMO',
      cargo: 'Engenheira de Software na Stone Age',
      imagem: 'https://media-gig4-2.cdn.whatsapp.net/v/t61.24694-24/390184697_873271427600568_4914410145190173059_n.jpg?ccb=11-4&oh=01_AdRxRGrLdcsVV_7hz4gpzvR_x7KHc4tfnzvflK4LACzaFA&oe=65C61961&_nc_sid=e6ed6c&_nc_cat=110',
      time: times[2].nome
    },
    
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'GABRIEL SOARES',
      cargo: 'Desenvolvedor de software e instrutor',
      imagem: 'https://media.licdn.com/dms/image/C4D03AQG8P3EJZzx3rw/profile-displayphoto-shrink_400_400/0/1617847350237?e=1710979200&v=beta&t=deKDqRjkZq0gjsbukD7gZAI3lkdXKrzZSsJ7eojp6x0',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'TAÍS ANSELMO',
      cargo: 'Engenheira de Software na Stone Age',
      imagem: 'https://media-gig4-2.cdn.whatsapp.net/v/t61.24694-24/390184697_873271427600568_4914410145190173059_n.jpg?ccb=11-4&oh=01_AdRxRGrLdcsVV_7hz4gpzvR_x7KHc4tfnzvflK4LACzaFA&oe=65C61961&_nc_sid=e6ed6c&_nc_cat=110',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'GABRIEL SOARES',
      cargo: 'Desenvolvedor de software e instrutor',
      imagem: 'https://media.licdn.com/dms/image/C4D03AQG8P3EJZzx3rw/profile-displayphoto-shrink_400_400/0/1617847350237?e=1710979200&v=beta&t=deKDqRjkZq0gjsbukD7gZAI3lkdXKrzZSsJ7eojp6x0',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'TAÍS ANSELMO',
      cargo: 'Engenheira de Software na Stone Age',
      imagem: 'https://media-gig4-2.cdn.whatsapp.net/v/t61.24694-24/390184697_873271427600568_4914410145190173059_n.jpg?ccb=11-4&oh=01_AdRxRGrLdcsVV_7hz4gpzvR_x7KHc4tfnzvflK4LACzaFA&oe=65C61961&_nc_sid=e6ed6c&_nc_cat=110',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[4].nome
    },
    {
      nome: 'GABRIEL SOARES',
      cargo: 'Desenvolvedor de software e instrutora',
      imagem: 'https://media.licdn.com/dms/image/C4D03AQG8P3EJZzx3rw/profile-displayphoto-shrink_400_400/0/1617847350237?e=1710979200&v=beta&t=deKDqRjkZq0gjsbukD7gZAI3lkdXKrzZSsJ7eojp6x0',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      nome: 'TAÍS ANSELMO',
      cargo: 'Engenheira de Software na Stone Age',
      imagem: 'https://media-gig4-2.cdn.whatsapp.net/v/t61.24694-24/390184697_873271427600568_4914410145190173059_n.jpg?ccb=11-4&oh=01_AdRxRGrLdcsVV_7hz4gpzvR_x7KHc4tfnzvflK4LACzaFA&oe=65C61961&_nc_sid=e6ed6c&_nc_cat=110',
      time: times[5].nome
    },
      {
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[5].nome
    },
    {
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[5].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCor(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime({ nome, cor }) {
    setTimes([...times, { nome, cor, id: uuidv4() }])
  }


  return (
    <div>
      <Banner />
      <Formulario aoCriarTime={cadastrarTime} times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => <Time mudarCor={mudarCor} key={indice} time={time} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} aoDeletar={deletarColaborador} />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
