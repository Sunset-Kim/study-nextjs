import { useRef } from "react";
import Button from "../ui/button/button";
import S from "./event-search.module.scss";

function EventSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function submitHanlder(event) {
    event.preventDefault();

    const selectedInput = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedInput, selectedMonth);
  }

  return (
    <form className={S.form} onSubmit={submitHanlder}>
      <div className={S.controls}>
        <div className={S.control}>
          <label htmlFor="year">Year</label>
          <select ref={yearInputRef} id="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={S.control}>
          <label htmlFor="month">Month</label>
          <select ref={monthInputRef} id="month">
            <option value="5">May</option>
            <option value="6">June</option>
          </select>
        </div>
      </div>

      <Button>Search</Button>
    </form>
  );
}

export default EventSearch;
