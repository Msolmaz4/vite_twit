import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentAccount:false,
    accounts:[]

}

const auth = createSlice({
    name:'auth',
    initialState,
    reducers:{
        //statte manupule
    _addAccount:(state ,action) =>{
        state.accounts.push(action.payload)
    },
    _removeAccount :(state,action)=>{
        state.accounts = state.accounts.filter(account =>account.id != action.payload)
        if(state.currentAccount && action.payload === state.currentAccount.id){
            this._setCurrentAccount(false)
        }
    },
    _setCurrentAccount:(state,action)=>{
        state.currentAccount = action.payload
    }

    }
})

export const {_addAccount,_removeAccount,_setCurrentAccount} = auth.actions

export default auth.reducer