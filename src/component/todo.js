import { useState } from "react";
import { connect } from "react-redux";
import { add,remove} from "../redux/reducer";
// import { bindActionCreators } from "redux";
import Swal from "sweetalert2";


const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
  add: (obj) => dispatch(add(obj)),
  remove: (id) => dispatch(remove(id)),
  };
};

const Todo = (props) => {
  const [todo, settodo] = useState();

  const ChangeHandler = (e) => {
    settodo(e.target.value);
  };
  const Submit = () => {
    if (todo === "") {
      Swal.fire("Fields can't be empty")
    } else {
      props.add({
        id: Math.floor(Math.random() * 1000),
        item: todo,
      });
      document.getElementById("val").value = "";
    }
    // settodo("")
  };
//   console.log(props);
    // console.log("props from store", props);

  return (
    <div className="container">
      <div className="container bg-dark mt-3 p-3 text-center text-white">
        <h3>TODO</h3>
      </div>

      <div className="container col-md-8 bg-info mt-4 p-5 ">
        <div className="d-flex">
          <input
            type="text"
            className="form-control col-md-8 m-auto"
            onKeyUp={ChangeHandler} id="val"
          />

          <button type="button" className="btn-btn-danger p-2" onClick={Submit}>
            Add
          </button>
        </div>
      </div>
      
      <div className="container" id="card-container">
        
        {props.todos.map((e,i) => {
          
          return (
            
            <div className="card">
              <div className="card-body">
                <button
                  type="button" onClick={() =>  props.remove(e.id)}
                  className="close btn btn-danger col-2"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h5> Task :{i+1}</h5>
                <h4 className="card-title text-center mt-2">{e.item}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
