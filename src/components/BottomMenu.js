import { useDispatch, useSelector } from "react-redux";
import { toggleSettings } from "../slices/interfaceSlice";

// component imports
import Clock from "./Clock";

const BottomMenu = () => {

    const dispatch = useDispatch();
    const settingsVisibility = useSelector((state) => state.interface.settingsVisible);
    console.log("The bottom menu knows that settings visible is: ", settingsVisibility);

    const handleSettings = (e) => {
        dispatch(toggleSettings());
    }

    const handleThemeChange = (e) => {
        
    }

    return (
        <div id="bottom-menu" className={settingsVisibility ? "settings-open" : "settings-closed"}>
            <div className="time-container">
                <Clock />
            </div>
            <div className="refresh">
                
            </div>
            <div id="settings-wheel" className={settingsVisibility ? "settings-wheel-open" : "settings-wheel-closed"} onClick={handleSettings}>

            </div>
            <div id="theme-toggle">
                <div id="theme-ball"></div>
            </div>
        </div>
    )

}

export default BottomMenu;