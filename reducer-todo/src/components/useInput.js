import { useState } from 'react';

export const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (updatedValue) => {
        setValue(updatedValue);
    }

    return [value, setValue, handleChange];
}

