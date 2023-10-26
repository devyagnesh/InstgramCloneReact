import React, { useState } from 'react'

/**
 * 
 * @param {function} callback 
 * @returns [value,valueFocus,SetValue,ValueIsInFocus,hasError]
 */
const useInput = (callback) => {

    const [value,setValue] = useState('');
    const [valueFocus,setValueFocus] = useState(false);
   

    const SetValue = function(e){
        setValue(e.target.value); 
    };

    const ValueIsInFocus = function(e){
        setValueFocus(true);
    }

    const hasError = !!value && callback(value);

    return [value,valueFocus,SetValue,ValueIsInFocus,hasError];
}

export default useInput





