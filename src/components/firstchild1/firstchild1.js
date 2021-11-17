import { useParams } from "react-router-dom";
function FirstChild1() {
  let { id } = useParams();
  return (
    <div >
      FirstChild1 : {id}
    </div>
  );
}

export default FirstChild1;
