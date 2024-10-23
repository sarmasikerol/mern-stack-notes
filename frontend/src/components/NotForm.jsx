import React, { useState } from "react";

const NotForm = ({ onAdd }) => {
  const [baslik, setBaslik] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [hata, setHata] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const not = { baslik, aciklama };

    const response = await fetch("/api/notlar", {
      method: "POST",
      body: JSON.stringify(not),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setHata(json.hata);
    }

    if (response.ok) {
      setHata(null);
      setBaslik("");
      setAciklama("");
    }

    onAdd(json);
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add New Note</h3>
      <div className="create-group">
        <div>
          <label>Title:</label>
          <input
            type="text"
            onChange={(e) => setBaslik(e.target.value)}
            value={baslik}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            onChange={(e) => setAciklama(e.target.value)}
            value={aciklama}
          />
        </div>
      </div>
      <button type="submit">Add</button>
      {hata && <div className="error">{hata}</div>}
    </form>
  );
};

export default NotForm;
