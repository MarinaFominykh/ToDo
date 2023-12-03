import './App.scss';
import TaskList from './components/TaskList/TaskList';


function App() {
  
  return (
    <main className='page'>
      <h1 className='title'>Список задач</h1>
      <TaskList />
    </main>
  )
}

export default App;
