import { useState } from "react";

//componenets imports
import CustomInput from "./CustomInput";

//icons
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSolidLock } from "react-icons/bi";

function Form() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });
  //   const [inputValidations, setInputValidations] = useState({
  //     userName: true,
  //     email: true,
  //     password: true,
  //     confirmPassword: true,
  //     firstName: true,
  //     lastName: true,
  //   });
  const [agreed, setAgreed] = useState(true);
  const [checked, setChecked] = useState(false);

  //   const handleInputValidation = (e) => {
  //     const input = e.target;
  //     const name = input.name;
  //     const isValid = input.checkValidity();

  //     setInputValidations((prevValidations) => ({
  //       ...prevValidations,
  //       [name]: isValid,
  //     }));
  //   };

  const formInputs = [
    {
      id: "userName",
      type: "text",
      name: "userName",
      placeholder: "Username",
      icon: <FaUser />,
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
    },
    {
      id: "email",
      type: "email",
      name: "email",
      placeholder: "Email address",
      icon: <MdEmail />,
      required: true,
      pattern: `^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$`,
      errorMessage: "It should be a valid email address!",
    },
    {
      id: "password",
      type: "password",
      name: "password",
      placeholder: "Password",
      icon: <BiSolidLock />,
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    },
    {
      id: "confirmPassword",
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirm password",
      icon: <BiSolidLock />,
      required: true,
      pattern: formData.password,
      errorMessage: "Passwords don't match!",
    },
  ];

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // handleInputValidation(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setAgreed(checked);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="formHeader">
        <div className="content">
          <h3>Registration form</h3>
        </div>
      </div>
      <div className="formBody">
        {formInputs.map((input) => (
          <CustomInput
            key={input.id}
            {...input}
            // isValid={inputValidations[input.name]}
            value={formData[input.name]}
            onChange={handleChange}
          />
        ))}
        <hr />
        <div className="termsContainer">
          <div className="firtsAndLastName">
            <CustomInput
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              //   isValid={inputValidations.firstName}
              onChange={handleChange}
              pattern="^[A-Za-z]+$"
              errorMessage="not valid"
              required="true"
            />
            <CustomInput
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              //   isValid={inputValidations.lastName}
              onChange={handleChange}
              pattern="^[A-Za-z]+$"
              errorMessage="not valid"
              required="true"
            />
          </div>
          <div className="terms">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              //   checked={checked}
              onChange={(e) => {
                setAgreed(e.target.checked);
                setChecked(e.target.checked);
              }}
            />
            <label for="terms">I agree to the terms of service</label>
          </div>
          {!agreed && (
            <small style={{ color: "red" }}>
              you must agree to the terms first
            </small>
          )}
        </div>
      </div>
      <div className="formFooter">
        <div className="content">
          <button>Sign up</button>
        </div>
      </div>
    </form>
  );
}

export default Form;
