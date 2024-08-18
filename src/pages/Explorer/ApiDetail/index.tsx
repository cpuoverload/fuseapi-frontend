import { useParams } from "react-router-dom";

const Index = () => {
  const { id } = useParams();

  return id;
};

export default Index;
