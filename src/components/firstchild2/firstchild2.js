import { useParams } from "react-router-dom";
function FirstChild2() {
  let { id } = useParams();
  return (
    <div >
      FirstChild2 : {id}
    </div>
  );
}

export default FirstChild2;
