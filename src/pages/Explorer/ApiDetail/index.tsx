import { useParams } from "react-router-dom";

const Index = (props) => {
  const { id } = useParams();

  return id;
};

export default Index;
