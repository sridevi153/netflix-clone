import React from 'react';
import './Nav.css';
import { useNavigate } from 'react-router-dom';

function Nav() {
    const navigate = useNavigate();

    return (
        <div className='navbar'>
          
                
                    <div className='homediv'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAS1BMVEVHcEzVBhLkCBPbBxKwBQ6xBg/FBhCtBQ7oCBPiBxLkCBOlBA7iBxTkCBPxCBSXAw3kCBOUAw3lCBJtAAuDAQynBQ6xBg+xBRDjBxJ6RmETAAAAGXRSTlMA//+Xgf////9NuP9m0xr/gn7zcf/MtjhOS7LcjwAAAMtJREFUeAF10MESgzAIRVFUCVZqMTW2/f8v7RjYtMNjlcUZbgaKGcZrpus5cx/6nTL2wUCWDm4YeGOFgNlXYKD+iTsG/s0NAolvPhBg88ZOFQAtfcWTquRALBpVEYhzH5YDNvYGBNo6WM4mOZDmjdI0B2zqK5ohEA1FQJufe2iSA2lnNDQHbMezAzYIpmgAoPXRwWKSA6nkjaIQ7GMfywFXioZKDmaiLRoQ3L2BAXmDMVj9FALBzVdg4I2x/IPzNc3z+3p+9n1at4F8vruuDABTzZR7AAAAAElFTkSuQmCC" alt="Logo" style={{ height: '40px' }} />
                        <a href="/home" style={{color:'white'}}>Home <span class="sr-only">(current)</span></a>
                        <a href="/mylist" style={{color:'white'}}>MyList</a>
                        </div>
                        <div className='iconDiv'>
                <img className='imageIcon' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='logo' onClick={() => {navigate('/')}}></img>
                </div>
               
            
        </div>
    );
}

export default Nav;