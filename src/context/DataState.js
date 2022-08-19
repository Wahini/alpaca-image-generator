import React, { useState, useContext } from 'react';
import DataContext from './DataContext';

const DataState = (props) => {

    const [bg, setBg] = useState(getImage("backgrounds", "dusk"));
    const [mayo, setMayo] = useState(getImage("mayo", "zombie"));
    const [cl, setCl] = useState(getImage("clothings", "yellow_raincoat"));
    const [nose, setNose] = useState(getImage("nose", "scar"));

    const bgsArr = [
        "Backgrounds",
        [
            { label: "Dusk", name: 'dusk' },
            { label: "Gray", name: 'gray' },
            { label: "Tsunami", name: 'tsunami' },
        ],
        "backgrounds"
    ]

    const mayoArr = [
        "Mayo",
        [
            { label: "Boy", name: 'boy' },
            { label: "Girl", name: 'girl' },
        ],
        "mayo"
    ]

    const clArr = [
        "Clothings",
        [
            { label: "None", name: 'none' },
            { label: "Red Shirt", name: 'red_shirt' },
            { label: "Yellow Raincoat", name: 'yellow_raincoat' },
        ],
        "clothings"
    ]

    const noseArr = [
        "Nose",
        [
            { label: "Normal", name: 'normal' },
            { label: "Scar", name: 'scar' },
        ],
        "nose"
    ]

    function getImage(location, name) {
        return process.env.PUBLIC_URL + "mayopixel/" + location + "/" + name + ".png";
    }

    const state = {
        bg,
        mayo,
        cl,
        nose,
        bgsArr,
        mayoArr,
        clArr,
        noseArr,
        getImage,
        setBg,
        setMayo,
        setCl,
        setNose,
    }

    return (
        <DataContext.Provider value={state}>
            {props.children}
        </DataContext.Provider>
    )


}


export default DataState;