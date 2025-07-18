import { HStack, VStack, Image, Heading, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Card = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <a
      href={projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <HStack
        spacing={6}
        bg="white"
        boxShadow="md"
        borderRadius="md"
        p={4}
        align="center"
        _hover={{ boxShadow: "lg", transform: "translateY(-2px)" }}
        transition="all 0.2s ease-in-out"
      >
        <Image
          src={imageUrl}
          alt={title}
          boxSize="100px"
          objectFit="cover"
          borderRadius="md"
        />

        <VStack align="start" spacing={1} flex="1">
          <Heading size="md">{title}</Heading>
          <Text fontSize="sm" color="gray.600">
            {description}
          </Text>
        </VStack>

        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </a>
  );
};

export default Card;
