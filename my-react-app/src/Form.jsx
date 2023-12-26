import  { useState } from 'react';

const SignUpForm = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <input type="text" value={value} onChange={handleChange} />
            <p>The current value is: {value}</p>
        </div>
    );
};

export default SignUpForm;