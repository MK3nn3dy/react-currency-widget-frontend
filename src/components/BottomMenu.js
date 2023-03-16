import { useDispatch, useSelector } from "react-redux";
import { toggleSettings, toggleTheme } from "../slices/interfaceSlice";
import { useRef } from "react";

// component imports
import Clock from "./Clock";

const BottomMenu = () => {

    const dispatch = useDispatch();
    const settingsVisibility = useSelector((state) => state.interface.settingsVisible);
    const nightTheme = useSelector((state) => state.interface.nightTheme);

    // useRef for toggle body
    const toggleBody = useRef(null);
    const toggleBall = useRef(null);

    // color variables for theme change
    // night
    const nightColor1 = "#263a3b";
    const nightColor2 = "#0f1111";
    const nightHover1 = "#192022";
    const nightHover2 = "#3a515c";
    const nightTextColor = "#a5ffff";
    // day
    const dayColor1 = "#dddddd";
    const dayColor2 = "#bbbbbb";
    const dayHover1 = "#cccccc";
    const dayHover2 = "#aaaaaa"
    const dayTextColor = "#000000";

    const handleSettings = (e) => {
        dispatch(toggleSettings());
    }

    const handleThemeChange = (e) => {
        // dispatch theme change to state
        dispatch(toggleTheme());
        // change css root variables
        if(nightTheme){
            document.documentElement.style.setProperty('--primary-background-color', nightColor1);
            document.documentElement.style.setProperty('--secondary-background-color', nightColor2);
            document.documentElement.style.setProperty('--primary-hover-color', nightHover1);
            document.documentElement.style.setProperty('--secondary-hover-color', nightHover2);
            document.documentElement.style.setProperty('--primary-text-color', nightTextColor);
        } else {
            document.documentElement.style.setProperty('--primary-background-color', dayColor1);
            document.documentElement.style.setProperty('--secondary-background-color', dayColor2);
            document.documentElement.style.setProperty('--primary-hover-color', dayHover1);
            document.documentElement.style.setProperty('--secondary-hover-color', dayHover2);
            document.documentElement.style.setProperty('--primary-text-color', dayTextColor);
        }
        // change classes on toggle itself
        toggleBody.current.classList.add( nightTheme ? "toggle-night" : "toggle-day");
        toggleBall.current.classList.add( nightTheme ? "toggle-ball-night" : "toggle-ball-day");
        toggleBody.current.classList.remove( !nightTheme ? "toggle-night" : "toggle-day");
        toggleBall.current.classList.remove( !nightTheme ? "toggle-ball-night" : "toggle-ball-day");
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
            <div id="theme-toggle" className="toggle-night" ref={toggleBody} onClick={handleThemeChange}>
                <div id="theme-ball" className="toggle-ball-night" ref={toggleBall}></div>
            </div>
        </div>
    )

}

export default BottomMenu;