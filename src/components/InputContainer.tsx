import { Dispatch, forwardRef, SetStateAction } from "react"
import { prompt } from "../ts/prompt"

const InputContainer = forwardRef<HTMLInputElement, {setPendingCommand: Dispatch<SetStateAction<string>>}>(
  ({setPendingCommand}, ref) => {
  return (
    <div className="input_container">
      <span>{prompt}</span>
      <input 
        onChange={(e) => setPendingCommand(e.target.value)}
        ref={ref}
        type="text"
        autoFocus
      />
    </div>
  )
})

export default InputContainer