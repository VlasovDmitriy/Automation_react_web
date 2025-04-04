import React from 'react';
import './Prof.css';


export default function({Icon, text, descriptionText}){

    return(
        <div className='professional'>
        <div className='aboutUs'>
            <div className='titleWrapper'> 
                <div className='titleOfBlock'>
                    <Icon className='Icon' size={50} strokeWidth={3} color='black' />
                    <p className='text'>{text}</p>
                </div>
            </div>
            <div className='descriptionBlock'>
                <p className='descriptionText'>
                    {descriptionText}
                </p>
            </div>
        </div>
    </div>
    );
}