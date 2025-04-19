import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dictionary = () => {
    const [wordData, setWordData] = useState(null);  
    const [searchWord, setSearchWord] = useState("");  

    const fetchData = async (wordToSearch) => {
        try {
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordToSearch}`);
            setWordData(response.data[0]); 
        } catch (err) {
            setWordData(null);
        }
    };

    useEffect(() => {
        if (searchWord.trim().length > 0) {
            fetchData(searchWord);
        }
    }, [searchWord]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
            <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-white text-center mb-4">Dictionary</h1>
                <input
                    type="text"
                    placeholder="Enter a word"
                    onChange={(e) => setSearchWord(e.target.value)}
                    value={searchWord}
                    className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <div className="mt-4 text-center">
                    {wordData ? (
                        <div>
                            <h2 className="text-xl font-semibold text-blue-400">{wordData.word}</h2>
                            <p className="text-gray-300 mt-2">{wordData.meanings[0]?.definitions[0]?.definition || "No definition available"}</p>
                        </div>
                    ) : (
                        <p className="text-gray-500 mt-2">No result found</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dictionary;
