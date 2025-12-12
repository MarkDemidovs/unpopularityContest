import { useState } from "react";

export default function Create({ createPost, cooldown = 10 }) { // cooldown in seconds
  const [postField, setPostField] = useState("");
  const [lastPostTime, setLastPostTime] = useState(0); // timestamp of last post
  const [remaining, setRemaining] = useState(0); // remaining cooldown for UI

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = postField.trim();
    const now = Date.now();

    // check if cooldown is active
    if (now - lastPostTime < cooldown * 1000) {
      const wait = Math.ceil((cooldown * 1000 - (now - lastPostTime)) / 1000);
      setRemaining(wait);
      return;
    }

    if (!trimmed) return;

    createPost(trimmed);
    setPostField("");
    setLastPostTime(now);
    setRemaining(cooldown);
    
    // countdown timer for UI
    const interval = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={postField}
        onChange={(e) => setPostField(e.target.value)}
        placeholder="spit it out!"
        disabled={remaining > 0} // disable while cooldown
      ></textarea>
      <button type="submit" disabled={remaining > 0}>
        {remaining > 0 ? `Wait ${remaining}s` : "Create"}
      </button>
    </form>
  );
}
