import { useState } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2';

const Header = ({test,setTest})=>{

    const [cityname,setCityName] = useState()
    const [countryCode,setcountryCode] = useState()

    const InputHandler = (e)=>{
        setCityName(e.target.value)
    }

    const SubmitHandler = async (e)=>{  
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/add_city', {
          City: cityname,
          Country :'IN'
        })
        .then(function (response) {
          console.log(response);
          Swal.fire(
            'City Inserted',
            'City Name Successfully inserted into Database',
            'success',
          ).then(()=>{{
            setTest(test+1)
            window.location.reload()
 
          }})
      })
        .catch(function (error) {
          console.log(error);
          Swal.fire(
            'City Name Already Exist',
            'error'
          )
        })
        .then(function () {
        });
}
      
        
return(
<div> 
      <div id="body">
        <div className="row">
         
        </div>

          <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"  aria-labelledby="exampleModalCenterTitle"  aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">Add City</h5>
                  <button type="button"  className="close" data-dismiss="modal"  aria-label="Close">
                  <span aria-hidden="true"> &times; </span>
                  </button>
                  </div> 

                <div className="modal-body">
                  <label> Enter City Name </label>
                  <input className="form-control" name="Addcity" onChange={InputHandler}/> 
                </div>
                    
                <div className="modal-footer">
                  <button  type="button" className="btn btn-secondary"  data-dismiss="modal"> Close </button>
                  <button type="submit" className="btn btn-primary" onClick={SubmitHandler}> Add </button>
                </div>   
                  
            </div>
        </div>   
    </div>
    </div>
    </div>
    
      )
    }
  


export default Header;