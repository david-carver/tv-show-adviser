import s from "./SearchBar.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";
import { useState } from "react";

export default function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");

  function submit(event) {
    if (event.key === "Enter" && event.target.value.trim().length > 0) {
      onSubmit(event.target.value);
      setValue("");
    }
  }

  function onChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className={s.container}>
      <SearchIcon size={27} className={s.icon} />
      <input
        onKeyUp={submit}
        className={s.input}
        type="text"
        placeholder="Search a tv show you may like"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
