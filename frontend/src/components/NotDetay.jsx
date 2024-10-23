import React from "react";
import { FaTrash } from "react-icons/fa"; // Silme ikonu

const NotDetay = ({ not, onDelete }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/notlar/${not._id}`, {
        method: "DELETE",
      });

      onDelete(not._id);

      if (response.ok) {
        // Silme işlemi başarılıysa, başarı mesajı veya bildirim göster
        console.log(`Not ${not._id} silindi`);
        // Burada başka bir işlem yapabilirsin (örneğin, bir bildirim göstermek)
      } else {
        console.error(`Silme hatası: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Silme işlemi sırasında hata:", error);
    }
  };
  return (
    <div className="not-detay" style={{ position: "relative" }}>
      <h4>{not.baslik}</h4>
      <p>{not.aciklama}</p>
      <p>{new Date(not.createdAt).toLocaleDateString()}</p>

      {/* Silme ikonu */}
      <div style={{ position: "absolute", right: 10, top: 10 }}>
        <FaTrash
          onClick={() => handleDelete(not.id)} // Tıklanma olayını ekleyin
          style={{ cursor: "pointer", color: "red", fontSize: "1.5rem" }} // Stil
        />
      </div>
    </div>
  );
};

export default NotDetay;
