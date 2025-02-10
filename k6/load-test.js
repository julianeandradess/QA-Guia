import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 20 },  // Sobe para 20 usuários em 10 segundos
    { duration: '30s', target: 100 }, // Mantém 100 usuários por 30 segundos
    { duration: '10s', target: 0 },   // Diminui para 0 usuários em 10 segundos
  ],
};

export default function () {
  // Requisição GET
  let resGet = http.get('https://jsonplaceholder.typicode.com/users');
  check(resGet, {
    'GET - Status code é 200': (r) => r.status === 200,
    'GET - Tempo de resposta < 500ms': (r) => r.timings.duration < 500,
  });

  // Requisição POST 200
  let resPost200 = http.post('https://jsonplaceholder.typicode.com/users', JSON.stringify({
    name: "Juliana QA",
    email: "juliana@example.com"
  }), { headers: { 'Content-Type': 'application/json' } });

  check(resPost200, {
    'POST 200 - Status code é 201': (r) => r.status === 201,
    'POST 200 - Tempo de resposta < 500ms': (r) => r.timings.duration < 500,
  });

  // Requisição POST 400
  let resPost400 = http.post('https://reqres.in/api/register', JSON.stringify({
    email: "juliana@example.com"
    // Não passando a senha propositalmente para gerar erro 400
  }), { headers: { 'Content-Type': 'application/json' } });

  check(resPost400, {
    'POST 400 - Status code é 400': (r) => r.status === 400,
  });

  sleep(1);
}
