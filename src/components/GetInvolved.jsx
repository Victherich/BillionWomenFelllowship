// import React, { useEffect, useState } from 'react';
// import '../CSS/GetInvolved.css';
// import { css } from '@emotion/react';
// import ClipLoader from 'react-spinners/ClipLoader';
// import { useForm } from '@formspree/react';
// import Swal from "sweetalert2";

// const roles = ['Partner', 'Volunteer Coordinator', 'Protocol / Crowd control', 'Outreach', 'Content Creator','Follow Up', 'Others'];

// const GetInvolved = () => {
//   const [state, handleSubmit] = useForm("mgvwogoo");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState('');
//   const [phone,setPhone]=useState("");
//   const [role, setRole] = useState('');
//   const [specify, setSpecify] = useState('');
//   const [required, setRequired] = useState(false);
//   const [submitting, setSubmitting] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (role === "Others") {
//       setRequired(true);
//     } else {
//       setRequired(false);
//     }
//   }, [role]);

//   const handleSubmitForm = (e) => {
//     e.preventDefault();
//     setSubmitting(true);
//     handleSubmit(e)
//       .then(() => {
//         Swal.fire({
//           icon: "success",
//           text: "Your request is submitted and one of our representatives shall get back to you. Thanks",
//           showConfirmButton: true
//         }).then(() => {
//           setName('');
//           setEmail('');
//           setPhone('');
//           setRole('');
//           setSpecify('');
//           setSubmitting(false);
//         });
//       })
//       .catch((err) => {
//         setSubmitting(false);
//         setError("An error occurred. Please try again later.");
//       });
//   };

//   const override = css`
//     display: block;
//     margin: 0 auto;
//     border-color: red;
//   `;

//   return (
//     <div className="get-involved">
//       <h2>Get Involved</h2>
//       <p>Do you want to volunteer in carrying out some of our activities? Kindly fill and submit the form below:</p>
//       <form onSubmit={handleSubmitForm}>
//         <input
//           type="text"
//           placeholder="Enter your full name"
//           name="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           name="phone"
//           placeholder="Enter your phone number"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           required
//         />
//         <select
//           value={role}
//           name="role"
//           onChange={(e) => setRole(e.target.value)}
//           required
//         >
//           <option value="">Select a volunteer role</option>
//           {roles.map((role, index) => (
//             <option key={index} value={role}>{role}</option>
//           ))}
//         </select>
//         {required && <input
//           type="text"
//           name="specify"
//           placeholder="Please specify your volunteer role"
//           value={specify}
//           onChange={(e) => setSpecify(e.target.value)}
//           required
//         />}
//         <button type="submit">
//           {submitting ? (
//             <ClipLoader color={"#ffffff"} loading={submitting} css={override} size={15} />
//           ) : (
//             "Submit"
//           )}
//         </button>
//       </form>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// };

// export default GetInvolved;





import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useForm } from '@formspree/react';
import Swal from 'sweetalert2';

const roles = [
  'Partner',
  'Volunteer Coordinator',
  'Protocol / Crowd control',
  'Outreach',
  'Content Creator',
  'Follow Up',
  'Others',
];

/* ================= STYLED COMPONENTS ================= */

const Section = styled.section`
  width: 100%;
  padding: 100px 20px 80px;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(255, 0, 43, 0.05),
    rgba(74, 20, 140, 0.08)
  );
`;

const Card = styled.div`
  width: 100%;
  max-width: 520px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(14px);
  border-radius: 26px;
  padding: 45px 35px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.12);
  text-align: center;

  @media (max-width: 480px) {
    padding: 35px 25px;
  }
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 12px;
  background: linear-gradient(
    90deg,
    rgba(255, 0, 43, 0.9),
    #4a148c
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: 0.95rem;
  color: #4a148c;
  margin-bottom: 35px;
  line-height: 1.6;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Input = styled.input`
  padding: 14px 18px;
  border-radius: 14px;
  border: 1px solid rgba(74, 20, 140, 0.2);
  font-size: 0.9rem;
  outline: none;
  transition: all 0.25s ease;

  &:focus {
    border-color: rgba(255, 0, 43, 0.8);
    box-shadow: 0 0 0 3px rgba(255, 0, 43, 0.15);
  }
`;

const Select = styled.select`
  padding: 14px 18px;
  border-radius: 14px;
  border: 1px solid rgba(74, 20, 140, 0.2);
  font-size: 0.9rem;
  outline: none;
  transition: all 0.25s ease;
  background: white;

  &:focus {
    border-color: rgba(255, 0, 43, 0.8);
    box-shadow: 0 0 0 3px rgba(255, 0, 43, 0.15);
  }
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 14px;
  border-radius: 30px;
  border: none;
  font-size: 0.95rem;
  font-weight: 600;
  color: white;
  cursor: pointer;
  background: linear-gradient(
    135deg,
    rgba(255, 0, 43, 0.9),
    #4a148c
  );
  box-shadow: 0 14px 35px rgba(255, 0, 43, 0.35);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 45px rgba(255, 0, 43, 0.45);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.85rem;
  margin-top: 15px;
`;

/* ================= COMPONENT ================= */

const GetInvolved = () => {
  const [ handleSubmit] = useForm('mgvwogoo');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [specify, setSpecify] = useState('');
  const [required, setRequired] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setRequired(role === 'Others');
  }, [role]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setSubmitting(true);

    handleSubmit(e)
      .then(() => {
        Swal.fire({
          icon: 'success',
          text: 'Your request is submitted and one of our representatives shall get back to you. Thanks',
          showConfirmButton: true,
        }).then(() => {
          setName('');
          setEmail('');
          setPhone('');
          setRole('');
          setSpecify('');
          setSubmitting(false);
        });
      })
      .catch(() => {
        setSubmitting(false);
        setError('An error occurred. Please try again later.');
      });
  };

  const loaderStyle = css`
    display: block;
    margin: 0 auto;
    border-color: white;
  `;

  return (
    <Section>
      <Card>
        <Title>Get Involved</Title>
        <Subtitle>
          Do you want to volunteer in carrying out some of our activities?
          Kindly fill and submit the form below.
        </Subtitle>

        <Form onSubmit={handleSubmitForm}>
          <Input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <Select
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select a volunteer role</option>
            {roles.map((r, index) => (
              <option key={index} value={r}>
                {r}
              </option>
            ))}
          </Select>

          {required && (
            <Input
              type="text"
              name="specify"
              placeholder="Please specify your volunteer role"
              value={specify}
              onChange={(e) => setSpecify(e.target.value)}
              required
            />
          )}

          <Button type="submit" disabled={submitting}>
            {submitting ? (
              <ClipLoader
                color="#ffffff"
                loading={submitting}
                css={loaderStyle}
                size={16}
              />
            ) : (
              'Submit'
            )}
          </Button>
        </Form>

        {error && <ErrorText>{error}</ErrorText>}
      </Card>
    </Section>
  );
};

export default GetInvolved;
