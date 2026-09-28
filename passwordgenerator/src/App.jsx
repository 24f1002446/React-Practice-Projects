import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  // Password ki length ko store karta hai
  const [length, setLength] = useState(8)

  // Numbers password mein allowed hain ya nahi
  const [numberAllowed, setNumberAllowed] = useState(false)

  // Special characters password mein allowed hain ya nahi
  const [charAllowed, setCharAllowed] = useState(false)

  // Generated password ko store karta hai
  const [password, setPassword] = useState("")

  // Input element ko directly access karne ke liye useRef
  const passwordRef = useRef(null)


  // Password generate karne wala function
  // useCallback unnecessary re-render se function ko baar-baar recreate hone se bachata hai
  const passwordGenerator = useCallback(() => {

    let pass = ""

    // Default characters
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    // Agar numbers allowed hain to numbers add karo
    if (numberAllowed) {
      str += "0123456789"
    }

    // Agar special characters allowed hain to characters add karo
    if (charAllowed) {
      str += "!@#$%^&*-_+=[]{}~`"
    }

    // Required length ka password generate karo
    for (let i = 1; i <= length; i++) {

      // Random index generate karta hai
      let char = Math.floor(Math.random() * str.length)

      // Random character password mein add karo
      pass += str.charAt(char)
    }

    // Generated password ko state mein store karo
    setPassword(pass)

  }, [length, numberAllowed, charAllowed])


  // Password ko clipboard mein copy karne wala function
  const copyPasswordToClipboard = useCallback(() => {

    // Input ko select karta hai
    passwordRef.current?.select()

    // Password ki complete range select karta hai
    passwordRef.current?.setSelectionRange(0, 999)

    // Password clipboard mein copy karta hai
    window.navigator.clipboard.writeText(password)

  }, [password])


  // Jab length, numbers ya characters change honge,
  // password automatically regenerate hoga
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])


  return (

    // Main password generator container
    <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-4 my-8 bg-white text-gray-800 border border-gray-200">

      {/* Heading */}
      <h1 className="text-gray-800 text-center text-2xl font-bold my-3">
        Password Generator
      </h1>


      {/* Password input + Copy button */}
      <div className="flex shadow rounded-lg overflow-hidden mb-4 border border-gray-300">

        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3 text-gray-800 bg-gray-50"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />

        {/* Copy button */}
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 shrink-0"
        >
          Copy
        </button>

      </div>


          {/* Options section */}
      <div className="flex items-center justify-between text-sm gap-x-4">

        {/* Password length */}
        <div className="flex items-center gap-x-2">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(Number(e.target.value))}
          />

          <label className="text-gray-700">
            Length: {length}
          </label>
        </div>

        {/* Numbers checkbox */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
          />

          <label
            htmlFor="numberInput"
            className="text-gray-700"
          >
            Numbers
          </label>
        </div>

        {/* Characters checkbox */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
          />

          <label
            htmlFor="characterInput"
            className="text-gray-700"
          >
            Characters
          </label>
        </div>

      </div>

    </div>
  )
}

export default App