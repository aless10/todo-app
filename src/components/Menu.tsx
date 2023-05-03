import Button from "@mui/material/Button";
import { CSVLink } from "react-csv";

import SaveIcon from "@mui/icons-material/Save";
import DownloadIcon from "@mui/icons-material/Download";
import Stack from "@mui/material/Stack";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import { csvData } from "../types";

type Props = {
  save: () => void;
  csvExportData: csvData;
};

function IconLabelButtons({ save, csvExportData }: Props) {
  const csvSerializedData = () => {
    const serializedTasks = csvExportData.data.map((task) => {
      return {
        ...task,
        tags: task.tags?.map((tag) => tag.label),
      };
    });
    return {
      ...csvExportData,
      data: serializedTasks,
    };
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#00ab55" }}
        startIcon={<SaveIcon />}
        onClick={save}
      >
        Save
      </Button>
      <CSVLink {...csvSerializedData()}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#3366ff" }}
          startIcon={<DownloadIcon />}
        >
          Export
        </Button>
      </CSVLink>
    </Stack>
  );
}

export default function Menu({ save, csvExportData }: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ background: "white", color: "black" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CheckIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ToDo App
          </Typography>
          <IconLabelButtons save={save} csvExportData={csvExportData} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
