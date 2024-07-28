import React, { useEffect, useState } from 'react';
import '../CSS/GetInvolved.css';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useForm } from '@formspree/react';
import Swal from "sweetalert2";

const roles = ['Partner', 'Volunteer Coordinator', 'Protocol / Crowd control', 'Outreach', 'Content Creator','Follow Up', 'Others'];

const GetInvolved = () => {
  const [state, handleSubmit] = useForm("mgvwogoo");
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [specify, setSpecify] = useState('');
  const [required, setRequired] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (role === "Others") {
      setRequired(true);
    } else {
      setRequired(false);
    }
  }, [role]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setSubmitting(true);
    handleSubmit(e)
      .then(() => {
        Swal.fire({
          icon: "success",
          text: "Your request is submitted and one of our representatives shall get back to you. Thanks",
          showConfirmButton: true
        }).then(() => {
          setName('');
          setEmail('');
          setRole('');
          setSpecify('');
          setSubmitting(false);
        });
      })
      .catch((err) => {
        setSubmitting(false);
        setError("An error occurred. Please try again later.");
      });
  };

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <div className="get-involved">
      <h2>Get Involved</h2>
      <p>Do you want to volunteer in carrying out some of our activities? Kindly fill and submit the form below:</p>
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          placeholder="Enter your full name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <select
          value={role}
          name="role"
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="">Select a volunteer role</option>
          {roles.map((role, index) => (
            <option key={index} value={role}>{role}</option>
          ))}
        </select>
        {required && <input
          type="text"
          name="specify"
          placeholder="Please specify your volunteer role"
          value={specify}
          onChange={(e) => setSpecify(e.target.value)}
          required
        />}
        <button type="submit">
          {submitting ? (
            <ClipLoader color={"#ffffff"} loading={submitting} css={override} size={15} />
          ) : (
            "Submit"
          )}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default GetInvolved;
