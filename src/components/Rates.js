import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBase, setRates } from "../slices/ratesSlice";

// local util imports
import flagMap from "../utils/flagMap";

// component imports
import Base from "./Base";
import Rate from "./Rate";
import BottomMenu from "./BottomMenu";

// Rates panel component to hold all rate items
const Rates = () => {

    // return dispatch method
    const dispatch = useDispatch();
    // get base and rates from state
    // ( state has default base of GBP when useEffect calls getRatesFromBase for the first time )
    const currentBase = useSelector((state) => state.rates.base);
    const currentRates = useSelector((state) => state.rates.rates.rates);
    const state = useSelector((state) => state);
    console.log("Rates refreshed and the state is: ", state);
    

    // async function get rates for base
    const getRatesFromBase = async(base) => {

        try {
            let rates = await fetch(`http://localhost:4000/api/rates/${base}`);
            let ratesObject = await rates.json();
            dispatch(setRates(ratesObject));
        } catch (error) {
            console.log("Our local backend returned an error: ", error);
        }

    }

    // get rates on render
    useEffect(() => {

        // get rates for first time based on default currency
        getRatesFromBase(currentBase);
        
    },[currentBase]);

    return (
        <div className="main-container">

            <Base currentBase={currentBase} flag={flagMap[currentBase]}/>

            <BottomMenu/>
            
            <div className="rates-panel">

                {currentRates && Object.entries(currentRates).map(([key, rate]) => (

                    <Rate key={key} country={key} rate={rate} flag={flagMap[key]} />

                ))}

            </div>
        </div>
    );
}

export default Rates;