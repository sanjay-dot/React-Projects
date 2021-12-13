import "./App.css";
import Header from "./component/Header";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [sqldata, setsqldata] = useState([]);
  const [temp, settemp] = useState([]);
  const [test, setTest] = useState(0);
  const [visible, setvisible] = useState(false);

  const gridview = () => {
    setvisible(true);
  };
  const listview = () => {
    setvisible(false);
  };

useEffect(() => {
    settemp([]);
    axios.get("http://127.0.0.1:8000/api/show_city").then((result) => {
      setsqldata(result.data);
      // console.log(result.data);
      result.data.map(async (e) => {
        const weatherData = axios
          .get(
            "https://api.openweathermap.org/data/2.5/weather?q="+e.City+"&appid=054d16e4792cf28373a50294a1f4e840"
          )
          .then((res) => {
            // console.log(res.data);
            settemp((old) => [
              ...old,
              {
                City: e.City,
                Country: res.data.sys.country,
                Temp: res.data.main.temp,
              },
            ]);
          });
      });
    });
  }, []);

  console.log(temp);
  return (
    <div>
      <Header test={test} setTest={setTest} />
      <div className="container-fluid bg-dark text-white text-center p-4">
        <h1> Weather Application </h1>
      </div>
      <div className="row">
        <div className="col container p-5">
          <button onClick={listview} className="btn btn-primary col-1 ">
            {" "}
            List{" "}
          </button>
          <button onClick={gridview} className="btn btn-info ml-2 col-1">
            {" "}
            Grid{" "}
          </button>
        </div>
        <div className="col-2 p-5">
          <button
            className="btn btn-danger col--7"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            Add City
          </button>
        </div>
      </div>
      {visible == false && (
        <div>
          <div className="container col-md-6">
            <table className="table table-dark" id="table">
              <thead>
                <tr>
                  <th scope="col"> # </th>
                  <th scope="col"> City </th>
                  <th scope="col"> Country</th>
                  <th scope="col"> Temperature </th>
                </tr>
              </thead>
              {temp.map((e, i) => (
                <tbody key={i}>
                  <tr>
                    <th scope="row">{i + 1}</th>
                    <td> {e.City} </td>
                    <td> {e.Country} </td>
                    <td>
                      {" "}
                      {(Number(e.Temp) - 273).toFixed(2)}
                      <sup> 0</sup> C
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      )}
      {visible == true && (
        <div id="grid">
          {temp.map((e) => (
            <div className="col-md-3 p-5">
              <div class="card text-white bg-dark">
                <div class="card-header">
                  <h2>{e.City}</h2>
                  <h3>{e.Country}</h3>
                </div>

                <div className="row">
                  <div className="col-md-1"></div>
                  <div className="card-body">
                    <h5 className="card-title">Temperature:<h1></h1> 
                    { (Number(e.Temp) - 273).toFixed(2)}<sup> 0</sup> C
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
