import React, { useEffect, useState } from 'react';
import '../CSS/GetInvolved.css';

const roles = ['Event Organizer', 'Volunteer Coordinator', 'Workshop Facilitator', 'Community Outreach', 'Content Creator','Others'];

const GetInvolved = () => {
    const [name,setName]=useState("")
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [specify,setSpecify]=useState('')
    const [required,setRequired]=useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        alert('Thank you for volunteering!');
    };

    useEffect(()=>{
        if(role==="Others"){
            setRequired(true)
        }else{
            setRequired(false)
        }
    },[role])

    // console.log(role)

    return (
        <div className="get-involved">
            <h2>Get Involved</h2>
            <p>Do you want to volunteer in carrying out some of our activities? Kindly fill and submit the form below:</p>
            <form onSubmit={handleSubmit}>
            <input 
                    type="text" 
                    placeholder="Enter your fullname" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <select 
                    value={role} 
                    onChange={(e) => setRole(e.target.value)} 
                    required
                >
                    <option value="" onChange={(e)=>setRole(e.target.value)}>Select a volunteer role</option>
                    {roles.map((role, index) => (
                        <option key={index} value={role}>{role}</option>
                    ))}
                </select>
                {required&&<input 
                    type="specify" 
                    placeholder="Please specify your volunteer role" 
                    value={specify} 
                    onChange={(e) => setSpecify(e.target.value)} 
                    required = {required}
                />}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default GetInvolved;
