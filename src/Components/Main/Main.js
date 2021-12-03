import './Main.css';
// import React from 'react';
import { useState } from 'react';

import Editor from '../Editor/Editor';
import Display from '../Display/Display';

export default function Main() {
  const [headCount, setHeadCount] = useState(0);
  const [topCount, setTopCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);
  const [catchphrase, setCatchphrase] = useState();
  const [head, setHead] = useState();
  const [top, setTop] = useState();
  const [bottom, setBottom] = useState();

  return (
    <main>
      <Display
        {...{
          headCount,
          setHeadCount,
          topCount,
          setTopCount,
          bottomCount,
          setBottomCount,
          catchphrase,
          setCatchphrase,
          head,
          setHead,
          top,
          setTop,
          bottom,
          setBottom,
        }}
      />
      <Editor
        {...{
          headCount,
          setHeadCount,
          topCount,
          setTopCount,
          bottomCount,
          setBottomCount,
          catchphrase,
          setCatchphrase,
          head,
          setHead,
          top,
          setTop,
          bottom,
          setBottom,
        }}
      />
    </main>
  );
}
