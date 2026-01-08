// JuiceLabel.jsx
const JuiceLabel = ({ text }) => {
  return (
    <div style={{
      position: "absolute",
      top: "10px",
      left: "10px",
      backgroundColor: "#ff6f00",
      color: "white",
      padding: "6px 12px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "bold",
    }}>
      {text}
    </div>
  );
};

export default JuiceLabel;
