

const tarefas = ["Acordar", "Tomar café", "Escovar os dentes", "Ir trabalhar"];

const App = () => ( <ul>{ tarefas.map(tarefa => <li>{ tarefa }</li>) }</ul> );

