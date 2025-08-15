import logo from './logo.svg';
import './App.css';
import img1 from "/images/carrier_ac01_img1.webp"

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Test Image from GCS</h1>
      <img
        src={img1}
        alt="Carrier AC01"
        width="400"
      />
    </div>
  );
}
export default App;
