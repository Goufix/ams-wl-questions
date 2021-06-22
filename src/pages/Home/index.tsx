import { Button } from "@material-ui/core";
import Checkbox from "../../components/Checkbox";
import { QUESTIONS } from "../../data/questions";
import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <div style={{ border: "1px solid #fff" }}>
        {QUESTIONS.map((question) => {
          return (
            <>
              <Checkbox level={question.level} text={question.text} />
              <br />
            </>
          );
        })}
        <Button
          style={{ display: "flex", justifyContent: "center" }}
          variant="contained"
          color="secondary"
          onClick={() => window.location.reload()}
        >
          Reset
        </Button>
      </div>
    </Container>
  );
}
