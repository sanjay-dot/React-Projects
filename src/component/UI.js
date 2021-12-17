import Logo from "./LOGO.jpg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "./redux/reducer";
import { useSelector } from "react-redux";

const UI = () => {
  const [data, setdata] = useState([]);
  const dispatch = useDispatch();
  const dataval = useSelector(state => state.dataval)
  const InputHandler =(e)=>{
    setdata({ ...data, [e.target.name]: e.target.value });
  }
// console.log(data);
  const SubmitHandler = (e)=>{
    e.preventDefault();
    dispatch(
      addData({
        Model:data.model,
      })
    )
    console.log(dataval);

  }
 
  return (
    <div>
      <div className="container-fluid p-3 bg-dark">
        <div className="row">
          <img src={Logo} className="col-1 p-1 ml-2" alt="Logo" />
          <div className="m-auto text-white">
            <h1>Product Manager</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid p-4 mt-5" id="form-container1">
        <div className="col-4  float-right" id="form-container2">
          <div id="form" className="col- container-fluid">
            <h1
              className="text-white text-center"
              style={{ background: "brown" }}
            >
              Mobile Database
            </h1>
            <div className="form-group mt-4">
              <label>Brand</label>
              <select className="form-control" onChange={InputHandler} name="brand">
                <option>Redmi</option>
                <option>One Plus</option>
                <option>i-phone</option>
                <option>Samsung</option>
                <option>Vivo</option>
                <option>Oppo</option>
              </select>
              
              <div className="form-group mt-5">
                <label>Model</label>
                <input type="text" className="form-control" onChange={InputHandler} name="model"/>
              </div>
              <div className="form-group mt-5">
                <label>Image</label>
                <input type="file" className="form-control" onChange={InputHandler} name="image"/>
              </div>
              <div className="row mt-5">
              <input className="btn btn-primary col-4 m-auto " type="submit" onClick={SubmitHandler}  value="Submit"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UI;
