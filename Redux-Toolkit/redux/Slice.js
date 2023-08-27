import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "counter",
  initialState:{
    count: 4,
    user:{
    name: "Uygar",
    surname: "Eren"
    }
  },
  reducers:{
    increase(state){
      state.count +=1;
    },
    decrease(state){
      state.count -= 1;
    },
    refresh(state){
      state.count = 0;
    },
    setUser(state, action){
      const newName = action.payload.name;
      const newSurname = action.payload.surname;

      state.user.name = newName;
      state.user.surname = newSurname;
    }
  }
})

export const {increase, decrease, refresh, setUser} = Slice.actions;
export default Slice;