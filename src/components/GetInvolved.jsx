import React, { useState } from 'react';
import '../CSS/GetInvolved.css';

const roles = ['Event Organizer', 'Volunteer Coordinator', 'Workshop Facilitator', 'Community Outreach', 'Content Creator'];

const GetInvolved = () => {
    const [name,setName]=useState("")
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        alert('Thank you for volunteering!');
    };

    return (
        <div className="get-involved">
            <h2>Get Involved</h2>
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
                    <option value="" disabled>Select a volunteer role</option>
                    {roles.map((role, index) => (
                        <option key={index} value={role}>{role}</option>
                    ))}
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default GetInvolved;
