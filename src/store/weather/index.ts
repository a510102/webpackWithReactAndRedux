import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../store';

type weater = {
  parameterValue?: string;
}

interface WeatherState {
  parameter: weater[]; 
  isLoading: string;
}

const initialState: WeatherState = {
  parameter: [],
  isLoading: 'weather'
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    weatherLoad (state) {
      if (state.isLoading === 'weather') {
        state.isLoading = 'pending'; 
      }
    },
    weatherReceiver (state, action) {
      if(state.isLoading === 'pending') {
        state.isLoading = 'weather';
        state.parameter = action.payload;
      }
    }
  }
})

export const { weatherLoad, weatherReceiver } = weatherSlice.actions;

export const selectWeather = (state: RootState) => state.weather.parameter;

export const isWeatherLoading = (state: RootState) => state.weather.isLoading;


export default weatherSlice.reducer;
