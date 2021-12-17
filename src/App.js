import './App.css';
import Frontend from './component/UI';

function App() {
  return (
    <div>
        <Frontend/>
        <div className='row'>
        <div className='container'>
        <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Brand</th>
      <th scope="col">Model</th>
      <th scope="col">Image</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Redmi</td>
      <td>Y2</td>
      <td>@mdo</td>
    </tr>
    </tbody>
    </table>
    </div>
        </div>
    </div>
  );
}

export default App;
