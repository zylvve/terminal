import { useState } from 'react'
import styles from './TerminalScreen.module.css'
import { Log } from '../ts/types';
import EntryContainer from './EntryContainer';

const TerminalScreen = () => {
  const [log, setLog] = useState<Log>([
    {command: "command 1", output: "output 1"},
    {command: "command 2", output: "output 2"},
    {command: "command 3", output: "output 3"},
    {command: "command 4", output: "output 4"},
  ]);
  return (
    <main className={styles.terminal_screen}>
      <div className={styles.output_container}>
        {log.map(entry => <EntryContainer {...entry}/>)}
      </div>
    </main>
  )
}

export default TerminalScreen
