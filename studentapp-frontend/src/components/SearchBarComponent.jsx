import Select from "react-select";

const SearchBar = (props) => {
  return (
    <div>
      <Select
        defaultValue={props.data[0]}
        placeholder={props.label}
        className="basic-single"
        classNamePrefix="select"
        isDisabled={props.disabled}
        isLoading={props.loading}
        isClearable={props.clearable}
        isRtl={props.rtl}
        isSearchable={props.searchable}
        name="color"
        options={props.data}
        onChange={props.func}
      />

      <div
        style={{
          color: "hsl(0, 0%, 40%)",
          display: "inline-block",
          fontSize: 12,
          fontStyle: "italic",
          marginTop: "1em",
        }}
      ></div>
    </div>
  );
};

export default SearchBar;
