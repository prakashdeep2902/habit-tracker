
export const AddTheHabite = (inputdata) => {

    return {
        type: "ADDHABITE",
        payload: {

            id: new Date().getTime().toString(),
            inputdata: inputdata

        }
    }
}

export const RemoveTheHabite = (id) => {

    return {
        type: "REMOVEHABITE",
        id

    }
}

export const weekDetials = (id, inputdata) => {

    return {
        type: "WEEKDETIALS",
        payload: {
            id: id,
            inputdata: inputdata
        }

    }
}