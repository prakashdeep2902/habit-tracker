
export const AddTheHabite=(inputdata)=>{

    return{
        type:"ADDHABITE",
        payload:{

            id:new Date().getTime().toString(),
            inputdata:inputdata

        }
    }
}

export const RemoveTheHabite=(id)=>{

    return{
        type:"REMOVEHABITE",
        id

    }
}