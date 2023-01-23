
const intialdata = {

    data: []
}

const habitreducers = (state = intialdata, action) => {

    switch (action.type) {
        case "ADDHABITE":
            const { id, inputdata } = action.payload

            return {
                ...state,
                data: [
                    ...state.data,
                    {
                        id: id,
                        inputdata: inputdata

                    }
                ]

            }
        case "REMOVEHABITE":
            const newData = state.data.filter((elem) => elem.id !== action.id)
            return {
                ...state,
                data: newData

            }
        case "WEEKDETIALS":


            return {

                ...state

            }

        default: return state;
    }
}
export default habitreducers

