import React from 'react'
const ImageCard = () => {
    const tags = Image.tags.split(',');
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={Image.webformatURL} alt="No image" className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                    Photo by {Image.user}
                </div>
                <ul>
                    <li>
                        <strong>Views:</strong>
                        {Image.views}
                    </li>
                    <li>
                        <strong>Downloads:</strong>
                        {Image.downloads}
                    </li>
                    <li>
                        <strong className="heart">Likes:</strong>
                        {Image.Likes}
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {tags.map((tag, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full
                   px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        #{tags}
                    </span>
                ))}
            </div>

        </div>
    )
}

export default ImageCard
