import { useState, useEffect } from 'react';
import { Gyroscope } from 'expo-sensors';

export function useGyroscope() {
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
    z: 0
  });

  useEffect(() => {
    let oldZ = 0;

    const subscriptions = Gyroscope.addListener((gyroscopeData) => {
      const parsedZ = Number(gyroscopeData.z.toFixed(2));
      if (parsedZ - 0.1 > oldZ) {
        oldZ = parsedZ;

        setCoordinates((prevState) => ({
          x: prevState.x - gyroscopeData.y * 16,
          y: prevState.y - gyroscopeData.x * 4,
          z: prevState.z - parsedZ * 30
        }));
      } else if (parsedZ + 0.1 < oldZ) {
        oldZ = parsedZ;

        setCoordinates((prevState) => ({
          x: prevState.x - gyroscopeData.y * 16,
          y: prevState.y - gyroscopeData.x * 4,
          z: prevState.z - parsedZ * 30
        }));
      }
    });

    return () => {
      subscriptions.remove();
    };
  }, []);

  return { coordinates };
}
