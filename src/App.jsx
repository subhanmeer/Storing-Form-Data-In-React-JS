import { useState } from "react";


function App() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    visible: '',
    radioBtn: '',
    optionSelector: 'select',
    numberSelector: '',
  })

  function dataHandler (e) {
    console.log(e);
    const {value, name, checked, type} = e.target;
    setFormData((prev) => {
    // console.log(prev);

      return {
        ...prev,
        [name] : type === 'checkbox' ? checked : value,
      }

    })
  }

  let formArray = []
  function submitHandler(event) {
    console.log(event);
    event.preventDefault()
    formArray.push(formData)
    console.log(formArray);
  }

  return (
    <div >
    <form onSubmit={submitHandler}>
      <input
      type="text"
      name="firstName"
      placeholder="first name"
      onChange={dataHandler}
      /> <br />

      <input
      type="text"
      name="lastName"
      placeholder="last name"
      onChange={dataHandler}
      /> <br />

<input
      type="email"
      name="email"
      placeholder="enter your email"
      onChange={dataHandler}
      /> <br />

<input
      type="checkbox"
      name="visible"
      onChange={dataHandler}
      /> <br />

      <input
      id="radioButtons"
      type="radio"
      name="radioBtn"
      onChange={dataHandler}
      value={'first one is selected'}
      />
      <input
      id="radioButtons"
      type="radio"
      name="radioBtn"
      onChange={dataHandler}
      value={'second one is selected'}
      /> <br />
      <select 
      name="optionSelector" 
      onChange={dataHandler}
      value={formData.optionSelector}
      >
        <option >select</option>
        <option >one</option>
        <option >two</option>
        <option >three</option>
      </select><br />

      <input 
      type="number" 
      name="numberSelector"
      placeholder="pick some number"
      onChange={dataHandler}
      value={formData.numberSelector}
      /> <br />
     
      <button>Submit</button>
      
      </form>  
      </div>
      
  );
}

export default App;
