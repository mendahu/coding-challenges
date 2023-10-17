import { useState } from "react";

function App() {
  const [maxPrice, setMaxPrice] = useState("");
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Searching...");
    console.log(
      "maxPrice: ",
      maxPrice || null,
      " isVegetarian: ",
      isVegetarian,
      " searchTerm: ",
      searchTerm || null
    );

    // API Calls and search result handling would go here
    // For the purposes of this assignment, this part is irrelevant
  };

  const handleClear = () => {
    console.log("Clearing Search Terms...");
    setMaxPrice("");
    setIsVegetarian(false);
    setSearchTerm("");
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Taco Search 🌮</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <div style={{ width: "100%", display: "flex" }}>
          <input
            type="text"
            style={{ padding: "0.5rem", borderRadius: "0.5rem", flexGrow: 1 }}
            placeholder="Ingredient..."
            name="searchTerm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <input
            type="number"
            style={{
              padding: "0.5rem",
              borderRadius: "0.5rem",
              flex: "0 0 50%",
            }}
            placeholder="Max Price..."
            name="maxPrice"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <div>
            <input
              type="checkbox"
              name="vegetarian"
              checked={isVegetarian}
              onChange={(e) => setIsVegetarian(!isVegetarian)}
            />
            <label htmlFor="vegetarian" style={{ marginLeft: "1rem" }}>
              Vegetarian?
            </label>
          </div>
        </div>
        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}
        >
          <button onClick={handleClear}>Clear</button>
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </main>
  );
}

export default App;
