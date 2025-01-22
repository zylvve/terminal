import { prompt } from "../ts/prompt"
import { Entry } from "../ts/types"

const EntryContainer = ({commandString, output}: Entry) => {
  return (
    <div className="entry_container">
      <span>{prompt}</span>
      <span>{commandString}</span>
      <div>{output}</div>
    </div>
  )
}

export default EntryContainer