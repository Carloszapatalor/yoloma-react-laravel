import React, {forwardRef, useEffect,useRef} from 'react';

export default forwardRef ( ({type='text', icon='user', placeholder='',name, id, value, 
className,required,isFocused, handleChange}, ref) => {
    const newInput = useRef();
    const input = ref ? ref:newInput;


    useEffect(()=>{
        if(isFocused){
            newInput.current.focus();
        }
    },[]);

  return (
    <div className='input-group mb-3'>
        <span className='input-group-text'>
            <i className={'fa-solid'+icon} ></i>
        </span>
        <input type={type} placeholder={placeholder} name= {name} 
        id={id} value={value} className={className} ref={input} required={required} onChange={(e) => handleChange(e) } />
        
    </div>
  )

});
