import  { useState, useCallback, useEffect, useRef } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeCharacters, setIncludeCharacters] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMmnbvcxzlkjhgfdsaqwertyuiop";
    if (includeNumber) str = str + "0123456789";
    if (includeCharacters) str = str + "!@#$%^&*(){}``:<>,./*-+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
    }
    setPassword(pass);
  }, [length, includeNumber, includeCharacters, setPassword]);

    useEffect(() => {
    passwordGenerator();
  }, [length, includeNumber, includeCharacters, passwordGenerator]);

  // const copyPassword = () =>
  //   useCallback(() => {
  //     passwordRef.current?.select();
  //     passwordRef.current?.setSelectionRange(length,password.length())
  //     window.navigator.clipboard.writeText(password);
  //   }, []);
  const copyPassword = useCallback(() =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,password.length);
    window.navigator.clipboard.writeText(password);
  },[password]);



  const refresh = () => {
    window.location.reload();
  }

  return (
    <main className="bg-gray-500 h-screen w-screen px-5 py-50 flex flex-col gap-5 justify-around items-center">
      <h1 className=" text-white text-center font-bold mb-10">
        <span className="md:text-5xl text-3xl block mb-3">GENERATE </span>
        YOUR PASSWORD IN EASY WAY
      </h1>

      <div className="shadow-2xl shadow-[rgba(0,0,0,0.8)] rounded-lg text-white bg-gray-700 md:w-120 m-auto px-5 space-y-10 py-10">
        <div className="flex  shadow-2xl shadow-[rgba(0,0,0,0.8)] rounded-lg mb-10 bg-transparent border-gray-700">
          <input
            className="outline-none w-full py-2 px-3 text-white  font-light"
            placeholder="password"
            readOnly
            value={password}
            type="text"
            ref={passwordRef}
          />
          <button
            onClick={copyPassword}
            className="outline-none bg-black px-3 py-0.5 shrink-0 cursor-pointer rounded-r-lg"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-4 md:gap-x-4 items-center justify-around font-bold flex-wrap md:flex-nowrap">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={32}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={includeNumber}
              id="numberInput"
              onChange={() => {
                setIncludeNumber((prev) => !prev);
              }}
              className="cursor-pointer outline-none"
            />
            <label htmlFor="numberInput"> : Number {includeNumber}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={includeCharacters}
              id="characterInput"
              onChange={() => {
                setIncludeCharacters((prev) => !prev);
              }}
              className="cursor-pointer outline-none"
            />
            <label htmlFor="characterInput">
              : characters {includeCharacters}
            </label>
          </div>
        </div>
      </div>
      <button
      className=" mt-10 text-2xl text-white font-bold  border-3 rounded-2xl px-5 py-3 bg-blue-700 outline-none hover:border-gray-900 active:border-gray-900"
      onClick={refresh}
      >Refresh</button>
    </main>
  );
};


export default App;
