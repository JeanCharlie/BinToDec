
import React, { useRef, useState } from 'react';



const Converter = () => {
    const binario = useRef(null);

    const converter = (e) => {
        e.preventDefault();

        const Arr = [1, 2, 4, 8, 16, 32, 64, 128];
        let arrResult = 0;
        let entry = binario.current.value;
        let control = false;

        // Controlling the entry of correct binary numbers
        for (const element of entry) {
            if (element !== '1' && element !== '0') { control = true; }
        }

        // Setting state
        if (!control) {
            if (entry.length <= 8) {
                for (let i = 0; i < entry.length; i++) {
                    if (entry[i] === '1') {
                        arrResult += Arr[i];

                    }
                }
                setData(arrResult);
            } else {
                alert('The binary number has more than 8 digits');
                setData('');
            }
        } else {
            alert('Please insert a correct binary number');
            setData('');
        }

    }

    const [data, setData] = useState(null);

    return (

        <>
            <div className='card card-body'>
                <form >
                    <h3 className='text-center'>Enter binay number below (no more than 8 digits)</h3>
                    <br></br>
                    <div className='form-group'>
                        <input
                            ref={binario}
                            id='entry'
                            type='text'
                            name='binary'
                            placeholder='Binary Numbe'
                            className='form-control'
                            autoFocus />
                    </div>
                    <br></br>
                    <div className='buttom'>
                        <button className='btn btn-primary' type='submit' onClick={converter}>Convert</button>
                    </div>
                </form>
            </div>


            <br></br>
            {data}
        </>

    );

}
export default Converter;