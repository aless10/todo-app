import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Grid, Typography, TextField, Autocomplete, Chip } from "@mui/material";
import { ITask } from "../types";

type Props = {
  task: ITask | undefined;
};

type TaskProps = ITask & {
  markCompleted: (id: string) => void;
  markDeleted: (id: string) => void;
  setCurrentActive: () => void;
};

const TAGS = [
  { label: "Work", color: "red" },
  { label: "Hobby", color: "cyan" },
  { label: "Life", color: "green" },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginBottom: 5,
  color: theme.palette.text.secondary,
}));

//{setCurrentActive, markCompleted, markDeleted, id, text, state, createdAt, active, title, tags}: TaskProps

export default function TaskDetail({ task }: Props) {
  if (!task || ["completed", "deleted"].includes(task.state)) return null;

  return (
    <>
      {task && (
        <Item>
          <Grid
            container
            sx={{
              p: 1,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Grid item xs={6}>
              <TextField
                id="standard-basic"
                label="Title"
                variant="standard"
                defaultValue={"A Title"}
              />
              {/*<Typography sx={{ m: 2 }} variant='body2'>{createdAt.toDateString()}</Typography>  */}
              <Typography sx={{ m: 2 }} variant="body2">
                2022-10-01
              </Typography>
              <Autocomplete
                multiple
                size="small"
                options={TAGS}
                renderTags={(tagValue, getTagProps) =>
                  tagValue.map((option, index) => (
                    <Chip
                      size="small"
                      sx={{ color: option.color }}
                      label={option.label}
                      {...getTagProps({ index })}
                      key={option.label}
                    />
                  ))
                }
                renderInput={(params) => <TextField label="tags" {...params} />}
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ justifyContent: "flex-end", alignItems: "flex-end" }}
            >
              <Button
                variant="contained"
                sx={{ color: "#566459", backgroundColor: "#a0eebb" }}
              >
                Update
              </Button>
            </Grid>
          </Grid>
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
          />
        </Item>
      )}
    </>
  );
}
