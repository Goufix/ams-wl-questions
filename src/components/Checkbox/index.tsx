import {
  Checkbox as MUICheckbox,
  FormControlLabel,
  Typography
} from "@material-ui/core";
import { useCallback, useState } from "react";

interface Props {
  text: string;
  level: number;
}

export default function Checkbox(props: Props) {
  const [checked, setChecked] = useState(false);

  const check = useCallback(() => {
    setChecked(!checked);
  }, [checked]);


  return (
    <>
      <FormControlLabel
        style={{ marginLeft: `${props.level * 10}px`, marginTop: 0 }}
        control={
          <MUICheckbox
            size="small"
            title={props.text}
            checked={checked}
            onChange={check}
          />
        }
        label={
          <Typography
            style={{
              textDecoration: checked ? "line-through" : "none",
              color: "#fff",
            }}
          >
            {props.text}
          </Typography>
        }
      />
    </>
  );
}
