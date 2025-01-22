import { help } from "./commands";
import { ParsedCommand } from "./types";
interface Commands {
  [command: string]: (...args: string[]) => string;
}

export const commands: Commands = {
  help,
}

export const parseCommand = (command: string) => {
  const args = command.split(' ');
  const parsedCommand: ParsedCommand = {
    command: args[0],
    arguments: args.slice(1), 
  }
  if (commands[parsedCommand.command]) {
    return parsedCommand;
  }
}

export const executeCommand = (parsedCommand: ParsedCommand) => {
  return commands[parsedCommand.command](...parsedCommand.arguments);
}