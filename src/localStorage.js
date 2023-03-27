//Load data from local storage
export const loadState = () => {
    try {
        const currentState = localStorage.getItem("state");
        if (currentState === null) {
            return {products: [], currentId: 0};
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
        console.log(currentState);
    } catch (err) {
        console.log(err);
    }
}