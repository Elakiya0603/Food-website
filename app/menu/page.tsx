export default function Menu() {
  const items = [
    { name: "Pizza", price: "₹299" },
    { name: "Burger", price: "₹149" },
    { name: "Pasta", price: "₹199" }
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1>Our Menu</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        marginTop: "20px"
      }}>
        {items.map((item) => (
          <div key={item.name} style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            textAlign: "center"
          }}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
