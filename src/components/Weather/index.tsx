import * as React from 'react';

import { selectWeather, isWeatherLoading, weatherLoad, weatherReceiver } from '../../store/weather';
import { useAppDispatch, useAppSelector } from '../../hooks';

const apiKey = 'CWB-D9255338-ABE6-4787-9B4F-C4F4E4D2B0EB';
const Weather = () => {
  const { useEffect, useState } = React;
  const [local, setLocal] = useState('taichung');
  const taichung = 'F-C0032-021';
  const taipei = 'F-C0032-009'
  const Url = `https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/${local === 'taichung' ? taichung : taipei}?Authorization=${apiKey}&format=JSON`
  const weather = useAppSelector(selectWeather);
  const isLoading = useAppSelector(isWeatherLoading);
  const dispatch = useAppDispatch();
  
  const fetchWeather = async () => {
    dispatch(weatherLoad());
    const response = await fetch(Url);
    if (response.ok) {
      const data = await response.json();
      dispatch(weatherReceiver(data.cwbopendata.dataset.parameterSet.parameter));
    }
    
  }

  useEffect(() => {
    fetchWeather()
  }, [local])

  return (
    <div>
      <h3>weather</h3>
      <button onClick={() => setLocal(local === 'taichung' ? 'taipei' : 'taichung')}>{ local === 'taichung' ? '台北' : '台中' }</button>
      {
        isLoading === 'pending' 
          ? <div>Loading</div>
          : <div>
            {
              weather.map((item, i) => {
                return <div key={i}>{item.parameterValue}</div>})
            }
          </div>
      }
    </div>
  )
}
export default Weather;