import React, { useEffect, useState } from "react";
import NotDetay from "../components/NotDetay";
import NotForm from "../components/NotForm";

const Home = () => {
  const [notlar, setNotlar] = useState(null);


  const handleDelete = (id) => {
    setNotlar((prevNotlar) => prevNotlar.filter((not) => not._id !== id));
  };

  const handleAdd = (newNot) => {
    setNotlar((prevNotlar) => [...prevNotlar, newNot]); // Yeni notu ekle
  };

  useEffect(() => {
    const fetchNotlar = async () => {
      try {
        const response = await fetch("/api/notlar");

        console.log(response);

        const json = await response.json();
        console.log(json);

        if (response.ok) {
          setNotlar(json);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchNotlar();
  }, []);
  return (
    <div className="home">
      <div className="not-form">
        <NotForm onAdd={handleAdd}/>
      </div>
      <div className="notlar">
        {notlar && notlar.map((not) => <NotDetay key={not._id} not={not} onDelete={handleDelete} />)}
      </div>
    </div>
  );
};

export default Home;
