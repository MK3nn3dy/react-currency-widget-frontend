import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBase } from "../slices/ratesSlice";

const Base = ({currentBase, flag}) => {

    const rates = useSelector((state) => state.rates.rates.rates);
    const base = useSelector((state) => state.rates.rates.base);
    
    let dispatch = useDispatch();

    useEffect(() => {



    },[currentBase])

    const handleChange = (e) => {
        console.log("The value of the select menu is: ", e.target.value);
        dispatch(setBase(e.target.value))
    }

    return (
        <div className="base-item">
            
            <img src={flag}/>
            
            <div className="base-options-container">
                <p className="base">BASE</p>
                <select className="base-options" onChange={handleChange}>

                {rates && Object.entries(rates).map(([key, rate]) => (

                    <option key={key} value={key}>{key}</option>

                ))}

                </select>

            </div>

            <p className="base-equals">1 {currentBase} =</p>
            
            
        </div>
    )

}

export default Base;