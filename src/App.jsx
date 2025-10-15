import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Flex,
  FlexItem,
  Image,
  Section,
  Text,
  TextContentHeading,
  TextContentTitle,
  TextHeading,
} from "sds-library";
import "sds-library/style";

function App() {
  return (
    <Section padding="1200">
      <Flex container gap="1200" direction="column" alignSecondary="stretch">
        <TextContentHeading heading="Heading" subheading="Subheading" />
        <FlexItem>
          <Flex wrap direction="column" gap="1200">
            <Card
              asset={
                <Image alt="Card image 1" aspectRatio="1-1" size="small" />
              }
              direction="horizontal"
              variant="stroke"
            >
              <TextHeading>Title</TextHeading>
              <Text>
                Body text for whatever you'd like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.
              </Text>
              <ButtonGroup>
                <Button onPress={() => {}} variant="neutral">
                  Button
                </Button>
              </ButtonGroup>
            </Card>
            <Card
              asset={
                <Image alt="Card image 2" aspectRatio="1-1" size="small" />
              }
              direction="horizontal"
              variant="stroke"
            >
              <TextHeading>Title</TextHeading>
              <Text>
                Body text for whatever you'd like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.
              </Text>
              <ButtonGroup>
                <Button onPress={() => {}} variant="neutral">
                  Button
                </Button>
              </ButtonGroup>
            </Card>
            <Card
              asset={
                <Image alt="Card image 3" aspectRatio="1-1" size="small" />
              }
              direction="horizontal"
              variant="stroke"
            >
              <TextHeading>Title</TextHeading>
              <Text>
                Body text for whatever you'd like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.
              </Text>
              <ButtonGroup>
                <Button onPress={() => {}} variant="neutral">
                  Button
                </Button>
              </ButtonGroup>
            </Card>
          </Flex>
        </FlexItem>
      </Flex>
    </Section>
  );
}

export default App;
