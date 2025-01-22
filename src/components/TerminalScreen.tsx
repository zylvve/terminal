import './TerminalScreen.css'
import { FormEventHandler, useRef, useState } from 'react'
import { Log } from '../ts/types';
import EntryContainer from './EntryContainer';
import InputContainer from './InputContainer';
import { executeCommand, parseCommand } from '../ts/commandHelpers';
import { welcome } from '../ts/commands';

const TerminalScreen = () => {
  const [log, setLog] = useState<Log>([
    {
      id: 1, 
      commandString: "welcome", 
      output: welcome(),
    }
  ]);
  const [pendingCommand, setPendingCommand] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);
  const focusInput = () => {
    if (inputRef.current) inputRef.current.focus();
  }
  
  const submitCommand: FormEventHandler = (event) => {
    event.preventDefault();
    if (pendingCommand === '') return;
    handleCommand(pendingCommand);

    setPendingCommand("");
    inputRef.current!.value = "";
  }
  
  const handleCommand = (pendingCommand: string) => {
    const parsed = parseCommand(pendingCommand);
    if (parsed) {
      addToLog(pendingCommand, executeCommand(parsed));
    }
  }

  const addToLog = (commandString: string, output: string) => {
    setLog([...log, {
      id: log.length + 1,
      commandString,
      output,
    }])  
  }
  
  return (
    <main className="terminal_screen" onClick={focusInput}>
      <form className="text_container" onSubmit={submitCommand}>
        {log.map(entry => <EntryContainer {...entry} key={entry.id}/>)}
        <InputContainer 
          setPendingCommand={setPendingCommand}
          ref={inputRef}
        />
      </form>
    </main>
  )
}

export default TerminalScreen
