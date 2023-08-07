import TextField from "@mui/material/TextField";
import { useEffect, ReactNode } from "react";
// import { MainContext } from "../comescript/MainContext";
import { Autocomplete, AutocompleteRenderInputParams } from "@mui/material";
// import { debounce } from "@mui/material/utils";

// interface MainTextMatchedSubstrings {
//     offset: number;
//     length: number;
//   }

// interface StructuredFormatting {
//     main_text: string;
//     secondary_text: string;
//     main_text_matched_substrings?: readonly MainTextMatchedSubstrings[];
//   }

// interface PlaceType {
//     description: string;
//     structured_formatting: StructuredFormatting;
//   }

export default function FirstName() {
  useEffect(() => {
    console.log("rr-FirstName");
  }, []);

//   const MainC = useContext(MainContext);
//   const fetch = debounce(() => {
//     console.log("ddd");
//   }, 400);

    // const [valueFirstName, setValueFirstName] = useState(null);
    // const [inputValue, setInputValue] = useState('');
    // const [options, setOptions] = useState<readonly PlaceType[]>([]);

    // const handleChangeFirstName = () => {}
    // const handleInputChangeFirstName = (event: any, newValue: any) => {
    //     // setOptions(newValue ? [newValue, ...options] : options);
    //     // setValue(newValue);
    //   }


  const renderAction = function (
    params: AutocompleteRenderInputParams
  ): ReactNode {
    return (
      <TextField
        {...params}
        required
        id="firstName"
        name="firstName"
        label="Имя"
        fullWidth
        autoComplete="given-name"
        variant="standard"
        InputProps={{
          ...params.InputProps,
          type: "search",
        }}
      />
    );
    // throw new Error("Error 20021.");
  };

  const optionsL = ["100", "200", "300"];

  return (
    <Autocomplete
      id="first-name"
      freeSolo
      disableClearable
      autoComplete
      includeInputInList
      filterSelectedOptions
      options={optionsL}
      noOptionsText="Имя ..."
      // value={valueFirstName}
      // onChange={handleChangeFirstName}
      // onInputChange={handleInputChangeFirstName}

      renderInput={renderAction}
    />
  );
}
