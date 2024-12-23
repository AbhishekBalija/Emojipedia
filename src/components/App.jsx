import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  function createEntry(entry) {
    return (
      <Entry
        key={entry.id}
        emoji={entry.emoji}
        name={entry.name}
        description={entry.meaning}
      />
    );
  }
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
