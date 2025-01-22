export type Entry = {
  id: number,
  commandString: string,
  output: string,
}

export type ParsedCommand = {
  command: string,
  arguments: string[];
}

export type Log = Entry[];
