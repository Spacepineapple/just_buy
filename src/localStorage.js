//Load data from local storage
export const loadState = () => {
    try {
        const currentState = localStorage.getItem("state");
        if (currentState === null) {
            return "";
        }
        return JSON.parse(currentState);
    } catch(err) {
        return undefined;
    }
}

//Save data to local storage
export const saveState = (state) => {
    try {
        const currentState = JSON.stringify(state);
        localStorage.setItem("state", currentState);
    } catch (err) {
        console.log(err);
    }
}