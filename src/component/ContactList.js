
const ContactList=(props)=>{
    console.log(props);
    let count = 1;
    
    const renderContactList = props.contacts.map((contacts)=>{
          
        return(
           
            <tbody key={contacts.Email}>
              <tr>
                <th  scope="row">{count++}</th>
                <td>{contacts.Name}</td>
                <td>{contacts.Email}</td>
                <td><i className="fa fa-trash" aria-hidden="true"></i></td>
              </tr>
              </tbody>
        )
    }); 
    return(
        <div className="container-fluid col-6 mt-4">
             <div>
            <table className="table">
            <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
            {renderContactList}  
            </table>
            </div>
        </div>
    );
}

export default ContactList;