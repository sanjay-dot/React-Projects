import { createSlice } from "@reduxjs/toolkit";

const Adddata = createSlice({

    name:"data",
    initialState:[
        {id:1,Brand:"Redmi",Model:"Y2"},
        {id:2,Brand:"Redmi",Model:"Note 10 Pro"},
    ],
    reducers : {
        addData: (state,action)=>{
            const newData ={
                id:Math.floor(Math.random *1000),
                Model:action.payload.Model,
                Brand:action.payload.Brand,
            }
            state.push(newData)
        }
    }
});

export const {addData} = Adddata.actions;
export const reducer= Adddata.reducer;
