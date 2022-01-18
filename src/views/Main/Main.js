import './Main.css';
// import React from 'react';
import React, { useState } from 'react';

import Editor from '../../Components/Editor/Editor';
import Display from '../../Components/Display/Display';

export default function Main() {
  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);
  const [catchphrase, setCatchphrase] = useState();
  const [head, setHead] = useState();
  const [middle, setMiddle] = useState();
  const [bottom, setBottom] = useState();

  return (
    <main>
      <Display
        {...{
          headCount,
          setHeadCount,
          middleCount,
          setMiddleCount,
          bottomCount,
          setBottomCount,
          catchphrase,
          setCatchphrase,
          head,
          setHead,
          middle,
          setMiddle,
          bottom,
          setBottom,
        }}
      />
      <Editor
        {...{
          headCount,
          setHeadCount,
          middleCount,
          setMiddleCount,
          bottomCount,
          setBottomCount,
          catchphrase,
          setCatchphrase,
          head,
          setHead,
          middle,
          setMiddle,
          bottom,
          setBottom,
        }}
      />
    </main>
  );
}
