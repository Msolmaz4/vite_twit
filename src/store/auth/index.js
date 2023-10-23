import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentAccount:{
        id:1,
        username:'kykMustafa',
        fullname:'Mustafa',
        avatar:'https://pixabay.com/tr/vectors/avatar-simge-yer-tutucu-facebook-1577909/'
    },
    accounts:[

        {
            id:1,
            username:'kykMustafa',
            fullname:'Mustafa',
            avatar:'https://pixabay.com/tr/vectors/avatar-simge-yer-tutucu-facebook-1577909/'
        },
        {
            id:2,
            username:'adana',
            fullname:'asana',
            avatar:'https://pixabay.com/tr/vectors/avatar-simge-yer-tutucu-facebook-1577909/'
        },



    ]

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