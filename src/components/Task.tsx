import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import { Button, Stack, Typography } from "@mui/material";
import { ITask } from "../types";
import { Delete, TaskAlt } from "@mui/icons-material";
import { MouseEvent } from "react";

type TaskProps = {
  task: ITask;
  markCompleted: (id: string) => void;
  markDeleted: (id: string) => void;
  setCurrentActive: (e: MouseEvent<HTMLDivElement>) => void;
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginBottom: 5,
  color: theme.palette.text.secondary,
}));

export const Task = ({
  setCurrentActive,
  markCompleted,
  markDeleted,
  task,
}: TaskProps) => {
  const { id, state, active, title, tags } = task;
  if (["completed", "deleted"].includes(state)) return null;

  return (
    <>
      <Item onClick={setCurrentActive}>
        <Grid
          container
          id={id}
          sx={{
            p: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            borderColor: active ? "green" : undefined,
          }}
        >
          <Grid item xs={8}>
            <Typography
              sx={{ cursor: "pointer", fontWeight: "bold", m: 2 }}
              variant="h6"
            >
              {title}
            </Typography>
            {tags?.map((tag) => (
              <Chip
                key={tag.label}
                label={tag.label}
                sx={{ ml: 1, bgcolor: tag.color, color: "white" }}
              />
            ))}
          </Grid>
          <Grid item xs={4}>
            <Stack direction="row" spacing={2}>
              <Button
                onClick={() => markCompleted(id)}
                variant="contained"
                sx={{ color: "#566459", backgroundColor: "#a0eebb" }}
              >
                <TaskAlt />
              </Button>

              <Button
                variant="contained"
                onClick={() => markDeleted(id)}
                sx={{ color: "#566459", backgroundColor: "#ffbf9b" }}
              >
                <Delete />
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Item>
    </>
  );
};
