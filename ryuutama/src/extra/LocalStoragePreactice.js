import React, { useState, useEffect } from "react";

function LocalStoragePractice() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [item, setItem] = useState({});

  function handlerSubmit(e) {
    e.preventDefault();
    setItem({ name: name, mobile: mobile });
    setName("");
    setMobile("");
  }

  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data) {
      setItem(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(item));
  });

  //https://dev.to/gautham495/how-to-persist-data-to-localstorage-in-react-with-hooks-6ma

  /*   let [dashboards, setDashboards] = useState(
    JSON.parse(localStorage.getItem("dashboards")) ?? 
    [{
        id: 0,
        name: "Untilted Dashboard",
        cards: []
    }]
);
useEffect(() => localStorage.setItem("dashboards", JSON.stringify(dashboards))); */
  return (
    <div className="character-main-cols">
      <div>
        <form>
          <input type="text" placeholder="Enter name..." value={name} required onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Enter mobile..." value={mobile} required onChange={(e) => setMobile(e.target.value)} />

          <button type="submit" onClick={handlerSubmit}>
            My best friend
          </button>
        </form>
      </div>{" "}
      <div>
        <p>{item.name}</p>
        <p>{item.mobile}</p>
      </div>
    </div>
  );
}

export default LocalStoragePractice;
