import React, { useEffect, useRef, useState} from "react";
const defaultStyle = {
    display: "block",
    overflow: "hidden",
    resize: "none",
    width: "100%",
    backgroundColor: "black"
};


const AutoHeightTextarea = ({ style = defaultStyle, ...etc }) => {
    const textareaRef = useRef(null);
    const [currentValue, setCurrentValue ] = useState("");// you can manage data with it

    useEffect(() => {
        textareaRef.current.style.height = "0px";
        const scrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.height = scrollHeight + "px";
    }, [currentValue]);

    return (
        <textarea id="textarea"
            ref={textareaRef}
            style={style}
            {...etc}
            value={currentValue}

            onChange={e=>{
            setCurrentValue(e.target.value);
            //to do something with value, maybe callback?
            }}
        />
    );
};

export default AutoHeightTextarea;