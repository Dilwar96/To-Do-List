import {
  background,
  Box,
  Button,
  Center,
  Heading,
  Input,
  InputGroup,
  ListItem,
  OrderedList,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import deleteTask from "../services/deleteTask";
import moveTaskUp from "../services/moveTaskUp";
import moveTaskDown from "../services/moveTaskDown";

const ToDo = () => {
  const { onToggle } = useDisclosure();
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  return (
    <>
      <Heading fontSize="4rem">To-Do-List</Heading>
      <Center>
        <Stack>
          <InputGroup>
            <Input
              borderRadius={20}
              placeholder="Enter a Task..."
              variant="filled"
              value={newTask}
              onChange={(event) => setNewTask(event.target.value)}
            />
            <Button
              transition="background-color 0.5 ease"
              cursor="pointer"
              borderRadius={20}
              border="none"
              fontWeight="bold"
              padding="10px 20px"
              fontSize="1.7rem"
              onClick={() => {}}
            >
              Add
            </Button>
          </InputGroup>
        </Stack>
      </Center>
      <OrderedList>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <Text>{task}</Text>
            <Button
              cursor="pointer"
              borderRadius={20}
              border="none"
              fontWeight="bold"
              padding="10px 20px"
              fontSize="1.7rem"
              onClick={() => deleteTask}
            >
              Delete
            </Button>
            <Button
              cursor="pointer"
              borderRadius={20}
              border="none"
              fontWeight="bold"
              padding="10px 20px"
              fontSize="1.7rem"
              onClick={(index) => {
                moveTaskUp;
              }}
            >
              Up
            </Button>
            <Button
              cursor="pointer"
              borderRadius={20}
              border="none"
              fontWeight="bold"
              padding="10px 20px"
              fontSize="1.7rem"
              onClick={(index) => {
                moveTaskDown;
              }}
            ></Button>
          </ListItem>
        ))}
      </OrderedList>
    </>
  );
};

export default ToDo;
