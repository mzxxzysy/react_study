import { Detail } from "./components/Detail";
import { Qna } from "./components/Qna";
import { Review } from "./components/Review";

export function ContentsContainer(props) {
  if (props.listName === "detail") {
    return <Detail />;
  } else if (props.listName === "qna") {
    return <Qna />;
  } else if (props.listName === "review") {
    return <Review />;
  }
}
