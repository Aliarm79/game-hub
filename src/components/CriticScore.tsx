import { Badge } from "@chakra-ui/react";

const CriticScore = ({ score }: { score: number }) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge fontSize="14px" paddingX={2} colorScheme={color} borderRadius={3}>
      {score}
    </Badge>
  );
};

export default CriticScore;
