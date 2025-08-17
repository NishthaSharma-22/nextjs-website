"use client";
import { useState, useRef, useEffect } from "react";
import Window from "./Window";
import styles from "../styles/Terminal.module.css";

export default function IntroCard({ onClose }) {
  const [lines, setLines] = useState([
    "welcome to nishthaOS terminal. type 'help' for commands",
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const commands = {
    help: () =>
      "available commands: help, about, clear, date, star, links, echo <msg>",
    about: () =>
      "this is nishtha0S terminal - my very own terminal, gang. feel free to explore my projects, ideas and random stuff in a webOS styled way!",
    date: () => new Date().toString(),
    clear: () => {
      setLines(["welcome to nishthaOS terminal. type 'help' for commands"]);
      return "";
    },
    star: () => `
    ⠀⠀⠀⠀⠀⠀⠀⣀⡄⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠐⢿⠓⠀⢀⡴⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠹⡒⠤⣀⡀⠀⢀⡴⠋⢠⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠱⡀⠀⠉⠑⠋⠀⠀⣸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢱⡄⠀⠀⠀⠀⠀⠉⠒⠤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⡴⠋⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣈⠵⠦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢀⡤⠋⣀⣀⣀⣤⠀⠀⠀⢰⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠈⠉⠁⠀⠀⠀⠀⢧⠀⠀⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢐⣶⣆⠀⠀⢠⠈⢇⢰⠃⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⣰⡄⠀⠀⠀⠀⠀⠀
⠀⠈⠙⠀⠀⠀⣏⣧⠈⠟⠀⠀⠀⠀⠀⠀⠽⡿⠆⠀⠀⠀⢀⣿⣿⣦⣶⣶⠟⠀⠀
⠀⠀⠀⠀⣀⣸⣿⣯⢧⠤⢤⣤⣴⠦⠀⠀⠀⠁⠀⠀⠛⠿⣿⣿⣿⣿⣿⡁⠀⠀⠀
⠀⠙⠯⡻⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠰⣄⣠⡇⠀⠀⠀⠀⢸⣿⡿⠛⠛⠿⣆⠀⠀
⠀⠀⠀⠈⢻⣿⣿⣿⣿⣿⠁⠀⠀⠀⣠⢿⣿⠟⠒⠀⠀⠀⠸⠊⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⡾⣿⠿⠺⢝⡯⢧⠀⠀⠀⠀⠀⠻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢼⠓⠁⠀⠀⠀⠉⠺⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⠈⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢟⡒⠒⠛⠁⠀⠘⠒⠒⢲⡶⠂⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⡆⠀⠈⢢⠀⠀⠀⠀⡤⠚⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⠉⠀⢠⠇⢀⡤⣀⠀⢳⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡿⠊⠁⠀⠈⠳⣼⡄⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡄⠀⣀⠀⠀⢀⣄⡀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠶⢾⣿⣟⠁⠀⠀⠺⡟⠃
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡏⢉⠓⠀⠀⠀⠀⠀
    `,
    echo: (args) => args.join(" "),
    hi: () => "well hi! :)",
  };
  const handleCommand = (raw) => {
    const [cmd, ...args] = raw.trim().split(" ");
    if (commands[cmd]) {
      return commands[cmd](args);
    } else {
      return `unknown command: ${cmd}. enter an identified command`;
    }
  };
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      const output = handleCommand(input);
      setLines((prev) => [
        ...prev,
        `webOS> ${input}`,
        ...(output ? [output] : []),
      ]);
      setInput("");
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <Window
      title="terminal"
      initialPosition={{ x: 300, y: 100 }}
      onClose={onClose}
    >
      <div className={styles.terminalWindow}>
        {lines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
        <div className={styles.inputContainer}>
          <span>webOS&gt;&nbsp;</span>
          <input
            type="text"
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            className={styles.input}
          />
        </div>
      </div>
    </Window>
  );
}
