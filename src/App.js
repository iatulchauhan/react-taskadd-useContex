import './App.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList'
import  ContextProvider  from './Context/TaskListContext'
function App() {
  return (
    <ContextProvider>
      <div className="container">
       <div className="app-wrapper">
        <div className="main">
          <Header/>
        <TaskForm/>
        <TaskList />
        </div>
       </div>
      </div>
     </ContextProvider>
  );
}

export default App;
