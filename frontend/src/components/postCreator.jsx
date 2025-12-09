import { useState } from "react"

export default function Create({createPost}) {
    const [postField, setPostField] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = postField.trim();
        if (!trimmed) return;
        createPost(trimmed);
        setPostField("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={postField}
                onChange={(e) => setPostField(e.target.value)}
                placeholder="spit it out!"
            ></input>
            <button type="submit">Create</button>
        </form>
    )
} 