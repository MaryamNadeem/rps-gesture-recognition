import './App.css';
import Handsfree from 'handsfree';
import { useEffect, useState } from 'react';

let handsfree;
function App() {
  const [finalMove, setFinalMove] = useState('');
  const [timer, setTimer] = useState(5);
  useEffect(() => {
    handsfree = new Handsfree({ hands: true });
    handsfree.start();
    handsfree.useGesture({
      name: 'scissors',
      algorithm: 'fingerpose',
      models: 'hands',
      confidence: 7.5,
      description: [
        ['addCurl', 'Thumb', 'NoCurl', 1],
        ['addCurl', 'Thumb', 'HalfCurl', 0.6666666666666666],
        ['addDirection', 'Thumb', 'DiagonalUpRight', 1],
        ['addDirection', 'Thumb', 'VerticalUp', 0.2777777777777778],
        ['addDirection', 'Thumb', 'DiagonalUpLeft', 0.3888888888888889],
        ['addCurl', 'Index', 'NoCurl', 1],
        ['addDirection', 'Index', 'HorizontalRight', 1],
        ['addDirection', 'Index', 'DiagonalUpRight', 0.5789473684210527],
        ['addCurl', 'Middle', 'NoCurl', 1],
        ['addDirection', 'Middle', 'HorizontalRight', 1],
        ['addDirection', 'Middle', 'DiagonalUpRight', 0.1875],
        ['addDirection', 'Middle', 'VerticalUp', 0.625],
        ['addDirection', 'Middle', 'DiagonalUpLeft', 0.0625],
        ['addCurl', 'Ring', 'FullCurl', 1],
        ['addDirection', 'Ring', 'DiagonalUpRight', 1],
        ['addDirection', 'Ring', 'VerticalUp', 0.30434782608695654],
        ['addCurl', 'Pinky', 'FullCurl', 1],
        ['addDirection', 'Pinky', 'DiagonalUpRight', 1],
        ['addDirection', 'Pinky', 'VerticalUp', 0.15],
        ['addDirection', 'Pinky', 'DiagonalUpLeft', 0.35],
        ['addDirection', 'Thumb', 'DiagonalUpLeft', 1],
        ['addDirection', 'Thumb', 'DiagonalUpRight', 0.3888888888888889],
        ['addDirection', 'Index', 'HorizontalLeft', 1],
        ['addDirection', 'Index', 'DiagonalUpLeft', 0.5789473684210527],
        ['addDirection', 'Middle', 'HorizontalLeft', 1],
        ['addDirection', 'Middle', 'DiagonalUpLeft', 0.1875],
        ['addDirection', 'Middle', 'DiagonalUpRight', 0.0625],
        ['addDirection', 'Ring', 'DiagonalUpLeft', 1],
        ['addDirection', 'Pinky', 'DiagonalUpLeft', 1],
        ['addDirection', 'Pinky', 'DiagonalUpRight', 0.35],
        ['addDirection', 'Thumb', 'DiagonalDownRight', 1],
        ['addDirection', 'Thumb', 'VerticalDown', 0.2777777777777778],
        ['addDirection', 'Thumb', 'DiagonalDownLeft', 0.3888888888888889],
        ['addDirection', 'Index', 'DiagonalDownRight', 0.5789473684210527],
        ['addDirection', 'Middle', 'DiagonalDownRight', 0.1875],
        ['addDirection', 'Middle', 'VerticalDown', 0.625],
        ['addDirection', 'Middle', 'DiagonalDownLeft', 0.0625],
        ['addDirection', 'Ring', 'DiagonalDownRight', 1],
        ['addDirection', 'Ring', 'VerticalDown', 0.30434782608695654],
        ['addDirection', 'Pinky', 'DiagonalDownRight', 1],
        ['addDirection', 'Pinky', 'VerticalDown', 0.15],
        ['addDirection', 'Pinky', 'DiagonalDownLeft', 0.35],
        ['addDirection', 'Thumb', 'DiagonalDownLeft', 1],
        ['addDirection', 'Thumb', 'DiagonalDownRight', 0.3888888888888889],
        ['addDirection', 'Index', 'DiagonalDownLeft', 0.5789473684210527],
        ['addDirection', 'Middle', 'DiagonalDownLeft', 0.1875],
        ['addDirection', 'Middle', 'DiagonalDownRight', 0.0625],
        ['addDirection', 'Ring', 'DiagonalDownLeft', 1],
        ['addDirection', 'Pinky', 'DiagonalDownLeft', 1],
        ['addDirection', 'Pinky', 'DiagonalDownRight', 0.35],
        ['setWeight', 'Index', 2],
        ['setWeight', 'Middle', 2]
      ],
      enabled: true
    });
    handsfree.useGesture({
      name: 'rock',
      algorithm: 'fingerpose',
      models: 'hands',
      confidence: 7.5,
      description: [
        ['addCurl', 'Thumb', 'NoCurl', 0.2],
        ['addCurl', 'Thumb', 'HalfCurl', 1],
        ['addDirection', 'Thumb', 'DiagonalUpRight', 0.875],
        ['addDirection', 'Thumb', 'VerticalUp', 1],
        ['addCurl', 'Index', 'FullCurl', 1],
        ['addDirection', 'Index', 'DiagonalUpRight', 1],
        ['addDirection', 'Index', 'VerticalUp', 0.1111111111111111],
        ['addCurl', 'Middle', 'FullCurl', 1],
        ['addDirection', 'Middle', 'VerticalUp', 0.2],
        ['addDirection', 'Middle', 'DiagonalUpRight', 1],
        ['addCurl', 'Ring', 'FullCurl', 1],
        ['addDirection', 'Ring', 'VerticalUp', 1],
        ['addDirection', 'Ring', 'DiagonalUpRight', 0.25],
        ['addCurl', 'Pinky', 'FullCurl', 1],
        ['addDirection', 'Pinky', 'VerticalUp', 1],
        ['addDirection', 'Thumb', 'DiagonalDownRight', 0.875],
        ['addDirection', 'Thumb', 'VerticalDown', 1],
        ['addDirection', 'Index', 'DiagonalDownRight', 1],
        ['addDirection', 'Index', 'VerticalDown', 0.1111111111111111],
        ['addDirection', 'Middle', 'VerticalDown', 0.2],
        ['addDirection', 'Middle', 'DiagonalDownRight', 1],
        ['addDirection', 'Ring', 'VerticalDown', 1],
        ['addDirection', 'Ring', 'DiagonalDownRight', 0.25],
        ['addDirection', 'Pinky', 'VerticalDown', 1]
      ],
      enabled: true
    });
    handsfree.useGesture({
      name: 'paper',
      algorithm: 'fingerpose',
      models: 'hands',
      confidence: 7.5,
      description: [
        ['addCurl', 'Thumb', 'NoCurl', 1],
        ['addDirection', 'Thumb', 'DiagonalUpLeft', 1],
        ['addDirection', 'Thumb', 'HorizontalLeft', 0.25],
        ['addCurl', 'Index', 'NoCurl', 1],
        ['addDirection', 'Index', 'DiagonalUpLeft', 0.6470588235294118],
        ['addDirection', 'Index', 'VerticalUp', 1],
        ['addDirection', 'Index', 'HorizontalLeft', 0.11764705882352941],
        ['addCurl', 'Middle', 'NoCurl', 1],
        ['addDirection', 'Middle', 'VerticalUp', 1],
        ['addDirection', 'Middle', 'DiagonalUpLeft', 0.42857142857142855],
        ['addCurl', 'Ring', 'NoCurl', 1],
        ['addDirection', 'Ring', 'VerticalUp', 1],
        ['addDirection', 'Ring', 'DiagonalUpLeft', 0.30434782608695654],
        ['addCurl', 'Pinky', 'NoCurl', 1],
        ['addDirection', 'Pinky', 'VerticalUp', 1],
        ['addDirection', 'Pinky', 'DiagonalUpLeft', 0.21739130434782608],
        ['addDirection', 'Pinky', 'DiagonalUpRight', 0.08695652173913043],
        ['addDirection', 'Thumb', 'DiagonalDownLeft', 1],
        ['addDirection', 'Index', 'DiagonalDownLeft', 0.6470588235294118],
        ['addDirection', 'Index', 'VerticalDown', 1],
        ['addDirection', 'Middle', 'VerticalDown', 1],
        ['addDirection', 'Middle', 'DiagonalDownLeft', 0.42857142857142855],
        ['addDirection', 'Ring', 'VerticalDown', 1],
        ['addDirection', 'Ring', 'DiagonalDownLeft', 0.30434782608695654],
        ['addDirection', 'Pinky', 'VerticalDown', 1],
        ['addDirection', 'Pinky', 'DiagonalDownLeft', 0.21739130434782608],
        ['addDirection', 'Pinky', 'DiagonalDownRight', 0.08695652173913043]
      ]
    });
    handsfree.use('logger', ({ hands }) => {
      if (!hands) return;

      if (hands?.gesture) {
        if (hands.gesture[0]?.name) {
          setFinalMove(hands.gesture[0]?.name);
        }
        if (hands.gesture[1]?.name) {
          setFinalMove(hands.gesture[1]?.name);
        }
      }
    });
  }, []);

  useEffect(() => {
    if (timer === 5) {
      handsfree.start();
    }
    if (timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000);
    } else {
      handsfree.pause();
      setTimeout(() => setTimer(5), 5000);
    }
  }, [timer]);
  return (
    <div className="App">
      <h1>{timer > 0 ? 'Please select a move' : 'Your move is'}</h1>
      <h1>Your move - {finalMove}</h1>
      <h1>timer = {timer}</h1>
    </div>
  );
}

export default App;
