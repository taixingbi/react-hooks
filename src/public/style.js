
export const button_ = (theme) => {
    let background = "green";

    if(theme=== "onMouseEnter")  background= "blue";
    if(theme=== "onMouseLeave")  background= "green";

    return({
        width: "100px",
        fontSize: "20px",
        borderRadius: "40px",
        border: "1px solid black",
        color: "white",
        margin: "0.5em 1em",
        padding: "0.25em 1em",
        background:background,
    })
};

export default {
    button_,
    button: {   
        width: "100px",
        fontSize: "20px",
        borderRadius: "40px",
        border: "1px solid black",
        color: "white",
        margin: "0.5em 1em",
        padding: "0.25em 1em",
        background: "#c83f49",
        onMouseEnter(e){
            e.target.style.background = '#004d7f';
        },
        onMouseLeave(e){
            e.target.style.background = '#479ff9';
        }
    },
}