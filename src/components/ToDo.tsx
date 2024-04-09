import { Box, Heading, Input, InputGroup } from "@chakra-ui/react";
import { useState } from "react";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  return (
    <Box>
      <Heading>To-Do-List</Heading>
      <InputGroup>
        <Input
          borderRadius={20}
          placeholder="Enter a Task..."
          variant="filled"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
      </InputGroup>
    </Box>
  );
};

export default ToDo;
