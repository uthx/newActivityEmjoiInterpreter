import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

const activityMap = {
  "โท๏ธ": "Skier",
  "๐": "Snowboarder",
  "๐โโ๏ธ": "Surfing",
  "๐โโ๏ธ": "Swimming",
  "๐๏ธโโ๏ธ": "Lifting Weights",
  "๐ดโโ๏ธ": "Biking",
  "๐ตโโ๏ธ": "Mountain Biking",
  "๐คผโโ๏ธ": "Wrestling",
  "๐คนโโ๏ธ": "Juggling"
};

const emojiKeys = Object.keys(activityMap);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");
  const [selectedEmoji, setSelectedEmoji] = useState("");
  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in activityMap) {
      setMeaning(activityMap[inputEmoji]);
      setSelectedEmoji(inputEmoji);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setSelectedEmoji(inputEmoji);
    setMeaning(activityMap[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Magicien {selectedEmoji ? selectedEmoji : `๐ช`}</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search by either emoji or emoji word"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      {emojiKeys.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          key={uuidv4()}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
