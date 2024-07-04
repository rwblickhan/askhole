import { useState } from "preact/hooks";
import { Dialog } from "@capacitor/dialog";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.scss";
import { useShake } from "./useShake";

export function App() {
  const [count, setCount] = useState(0);
  useShake(() => {
    Dialog.alert({
      title: "Shake it...",
      message: "Like a Polaroid picture..."
    }).catch((e) => {
      console.error(e);
    });
  });

  return (
    <div>
      <div className="buttons">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank" rel="noreferrer">
          <img src={preactLogo} className="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div className="card">
        <button
          onClick={() => {
            Dialog.alert({
              title: "Single-tapped",
              message: "You did it!"
            }).catch((e) => {
              console.error(e);
            });
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </div>
  );
}
