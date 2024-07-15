import React, { useState } from 'react';

const TagInput = () => {
    const [tags, setTags] = useState('');
    const [error, setError] = useState('');

    const handleTagChange = (e) => {
        const input = e.target.value;
        setTags(input);

        // Validate tags
        const tagArray = input.split(',').map(tag => tag.trim()).filter(tag => tag);

        if (tagArray.length > 3) {
            setError('Solo se permiten 3 tags.');
        } else {
            const invalidTags = tagArray.filter(tag => !tag.startsWith('#') || tag.includes(' '));
            if (invalidTags.length > 0) {
                setError('Los tags deben comenzar con # y no contener espacios.');
            } else {
                setError('');
            }
        }
    };

    return (
        <div>
            <label htmlFor="tags" className="block text-sm font-medium mb-2">
                Tags (formato: #tag1, #tag2, #tag3)
            </label>
            <textarea
                id="tags"
                value={tags}
                onChange={handleTagChange}
                className="w-full p-3 text-white rounded-md bg-bidcraft-grey-2 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
                placeholder="#usado, #apple, #iphone"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default TagInput;