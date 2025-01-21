import { prompt } from "../ts/prompt"
import { Entry } from "../ts/types"

const EntryContainer = ({command, output}: Entry) => {
  return (
    <div>
      <span>{prompt}</span>
      <span>{command}</span>
      <div>{output}</div>
    </div>
  )
}

export default EntryContainer