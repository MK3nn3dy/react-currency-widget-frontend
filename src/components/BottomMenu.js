import { useDispatch, useSelector } from "react-redux";
import { toggleSettings } from "../slices/interfaceSlice";
const BottomMenu = () => {

    const dispatch = useDispatch();
    const settingsVisibility = useSelector((state) => state.interface.settingsVisible);
    console.log("The bottom menu knows that settings visible is: ", settingsVisibility);

    const handleSettings = (e) => {
        dispatch(toggleSettings());
    }

    return (
        <div id="bottom-menu" className={settingsVisibility ? "settings-open" : "settings-closed"}>
            <div className="time-container">
                <div className="clock"></div><span id="time"></span>
            </div>
            <div className="refresh">
                
            </div>
            <div id="settings-wheel" className={settingsVisibility ? "settings-wheel-open" : "settings-wheel-closed"} onClick={handleSettings}>

            </div>
        </div>
    )

}

export default BottomMenu;