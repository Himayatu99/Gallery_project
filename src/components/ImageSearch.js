import React, { useState } from 'react'

const ImageSearch = ({ searchText }) => {
    const [text, setText] = useState('');
    const onsubmit = (e) => {
        e.preventDefult();
        searchText(text);
    }
    return (
        <form onSubmit={onsubmit} className="w-full max-w-sm">
            <div className="flex items-center border-b border-teal-500 py-2">
                <input onChange={e => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name" />
                <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 
                text-sm border-4 text-white py-1 px-2 rounded"
                    type="submit">
                    Search
                </button>
            </div>
        </form>
    )
}

export default ImageSearch
