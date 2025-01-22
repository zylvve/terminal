import './TerminalScreen.css'
import { FormEventHandler, useRef, useState } from 'react'
import { Log } from '../ts/types';
import EntryContainer from './EntryContainer';
import InputContainer from './InputContainer';

const TerminalScreen = () => {
  const [log, setLog] = useState<Log>([
    {command: "command 1", output: "output 1"},
    {command: "command 2", output: "output 2"},
    {command: "command 3", output: "output 3"},
    {command: "command 4", output: "output 4"},
  ]);
  const [pendingCommand, setPendingCommand] = useState<string>("");
  
  const inputRef = useRef<HTMLInputElement>(null);
  const focusInput = () => {
    if (inputRef.current) inputRef.current.focus();
  }
  
  const submitCommand: FormEventHandler = (event) => {
    event.preventDefault();
    if (pendingCommand === '') return;
    setPendingCommand("");
    inputRef.current!.value = "";
  }
  
  return (
    <main className="terminal_screen" onClick={focusInput}>
      <form className="text_container" onSubmit={submitCommand}>
        {log.map(entry => <EntryContainer {...entry}/>)}
        <InputContainer 
          setPendingCommand={setPendingCommand}
          ref={inputRef}
        />
      </form>
    </main>
  )
}

export default TerminalScreen
