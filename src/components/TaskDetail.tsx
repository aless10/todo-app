import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Grid, Typography, TextField, Autocomplete, Chip } from "@mui/material";
import { ITask, Tag } from "../types";

type Props = {
  task: ITask | undefined;
  handleChangeTitle: (e: Event) => void;
  handleChangeTags: (tags: Tag[]) => void;
  handleChangeDescription: (e: Event) => void;
};

const TAGS: Tag[] = [
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

export default function TaskDetail({
  task,
  handleChangeTitle,
  handleChangeTags,
  handleChangeDescription,
}: Props) {
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
                value={task.title}
                //@ts-ignore
                onChange={(e) => handleChangeTitle(e)}
              />
              <Typography sx={{ m: 2 }} variant="body2">
                {new Date(task.createdAt).toDateString()}
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
                //@ts-ignore
                onChange={(_: Event, value: Tag[]) => handleChangeTags(value)}
                renderInput={(params) => <TextField label="tags" {...params} />}
              />
            </Grid>
          </Grid>
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            value={task.text || ""}
            //@ts-ignore
            onChange={handleChangeDescription}
          />
        </Item>
      )}
    </>
  );
}
