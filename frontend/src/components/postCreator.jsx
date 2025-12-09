import { useState } from "react"

export default function Create({createPost}) {
    const [postField, setPostField] = useState("")
    return (
        <form onSubmit={createPost}>
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