import React from 'react';

const Footer = () => {
    return (
        <div className='mt-10 bg-black text-white p-10'>
             <p><small className='text-2xl font-bold'>Thanks for visit Footer</small></p>
            <div className='flex justify-center gap-3'>
                 <a href="/">privacy</a><a href="/">terms</a><a href="/">facebook</a>
            </div>
        </div>
    );
};

export default Footer;