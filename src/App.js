import Cursor from "./Components/Cursor/Cursor";
import "./App.css";
import FirstLayout from "./layouts/firstLayout/FirstLayout";
import SecondLayout from "./layouts/secondLayout/SecondLayout";
import { useScrollHandler } from "./hooks/useScrollHandler";

export default function App() {
  const [scrollIndex] = useScrollHandler();

  return (
    <div style={{ height: "100vh" }}>
      <Cursor />
      {scrollIndex !== 4 ? (
        <div
          id="canvas-container"
          style={{
            height: "100vh",
            width: "100%",
            position: "fixed",
            top: 0,
          }}
        >
          <FirstLayout />
        </div>
      ) : (
        <SecondLayout />
      )}
    </div>
  );
}
