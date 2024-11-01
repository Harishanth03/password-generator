import React, { useState } from 'react'

const PasswordGenerator = () => {

    const [length , setLength] = useState(8);
    
    const [upperCase , setUpperCase] = useState(false);

    const [lowerCase , setLowerCase] = useState(false);

    const [numbers , setNumbers] = useState(false);

    const [Symbol , setSymbol] = useState(false);

    const [password , setPassword] = useState("");

    const generatePassword = () => {

        let charSet = "";

        let generatePassword = "";

        if(upperCase) charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        if(lowerCase) charSet += 'abcdefghijklmnopqrstuvwxyz';

        if(numbers) charSet += '0123456789';

        if(Symbol) charSet += '!@#$%^&*()_+[]{}|;:,.<>?';

        if(charSet === "")
        {
            setPassword("Please Enter atleast one option");
        } 
        else
        {
            for(let i = 0 ; i < length ;i++)
            {
                const randomIndex = Math.floor(Math.random() * charSet.length);

                setPassword(generatePassword += charSet[randomIndex]);
            }
        }
    }

  return (

    <>
        <div className="password-generator">

            <h2>Strong password Generator</h2>

            <div className="input-groups">

                <label htmlFor="PasswordLength">Password Length: </label>

                <input type="number"  id='PasswordLength' value={length} onChange={(e) => setLength(parseInt(e.target.value))}/>

            </div>

            <div className="checkbox-group">

                <input type="checkbox" id="upperCase" checked={upperCase} onChange={(e) => {setUpperCase(e.target.checked)}}/>

                <label htmlFor="upperCase">Include Uppercase</label>

            </div>

            <div className="checkbox-group">

                <input type="checkbox" id="lowerCase" checked={lowerCase}  onChange={(e) => {setLowerCase(e.target.checked)}}/>
                
                <label htmlFor="lowerCase">Include Lowercase</label>

            </div>

            <div className="checkbox-group">

                <input type="checkbox" id="number" checked={numbers} onChange={(e) => {setNumbers(e.target.checked)}}/>
                
                <label htmlFor="number">Include number</label>

            </div>

            <div className="checkbox-group">

                <input type="checkbox" id="Symbol" checked={Symbol} onChange={(e) => {setSymbol(e.target.checked)}}/>
                
                <label htmlFor="Symbol">Include Symbol</label>

            </div>

            <button className='generate-button' onClick={generatePassword}>Generate Password</button>

            <div className="generate-password">

                <input type="text" readOnly value={password} />

                <button className='copy-button'>Copy</button>

            </div>

        </div>
    </>

  )

}

export default PasswordGenerator