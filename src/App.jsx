import './App.css';

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Test Image</h1>
      <img
        src={`${process.env.PUBLIC_URL}/images/carrier_ac01_img1.webp`}
        alt="Carrier AC01"
        width="400"
      />
    </div>
  );
}
export default App;
