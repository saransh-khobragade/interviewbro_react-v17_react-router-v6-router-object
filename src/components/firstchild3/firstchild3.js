import { useParams } from "react-router-dom";
function FirstChild3() {
  let { id } = useParams();
  return (
    <div >
      FirstChild3 : {id}
    </div>
  );
}

export default FirstChild3;
