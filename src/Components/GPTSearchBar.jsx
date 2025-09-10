import React, { useRef, useState } from 'react'
import LanguageOptions from "./LanguageOptions"
import openai from "../utils/Openai"

const GPTSearchBar = () => {

    const [Language, setLanguage] = useState("en");
    const [results, setResults] = useState("");

    const SearchText = useRef(null)
    const HandleGPTClickSearch = async () => {
        console.log(SearchText.current.value)
        const GPTquery = `Suggest 5 Indian movies or web series related to "${SearchText.current.value}". 
                            For each result, provide:
                            1. Title (only Indian names, no foreign titles) 
                            2. Release Year
                            3. IMBD rating
                            4. A two-line description. 
                            Reply only in ${Language}.`
        const GPTResult = await openai.chat.completions.create({
            messages: [{ role: "user", content: GPTquery }],
            model: "gpt-4o-mini"
        });
        
        console.log(GPTResult);
        setResults(GPTResult.choices[0].message.content);
    }
    return (<>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-20 mb-10 px-4">
            <select
                value={Language}
                onChange={(e) => setLanguage(e.target.value)}
                className="px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="es">Spanish</option>
                <option value="guj">gujrati</option>
            </select>
            <form
                className="w-full max-w-2xl flex"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    ref={SearchText}
                    type="text"
                    placeholder={LanguageOptions[Language].placeholder}
                    className="flex-grow px-4 py-3 rounded-l-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <button
                    className="px-6 py-3 bg-red-600 text-white font-semibold rounded-r-xl hover:bg-red-700 transition-all duration-200"
                    onClick={HandleGPTClickSearch}
                >
                    {LanguageOptions[Language].button}
                </button>
            </form>
        </div>
        {results && (
            <div className="mt-10 p-6 bg-gray-900 rounded-xl text-white max-w-3xl mx-auto shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-red-400 border-b border-gray-700 pb-2">
                    🎬 Movie Recommendations
                </h2>
                <pre className="whitespace-pre-line text-gray-300 leading-relaxed">
                    {results}
                </pre>
            </div>
        )}  
    </>)
}
export default GPTSearchBar
