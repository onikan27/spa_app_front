import { FC, useState, useEffect } from "react";
import axios from "axios";

const App: FC = () => {
  const [value, setValue] = useState("");

  const getHoge = async () => {
    try {
      const value = await axios.get(`${"http://localhost:3010/tests"}`);
      setValue(value.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHoge();
  }, []);

  return (
    <>
      <h1>下記にAPIからの値が返ってくるはず。</h1>
      <p>{value}</p>
    </>
  );
};

export default App;
