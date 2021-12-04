import { Box } from "@mui/system";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <main
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </main>
  );
}

export default TabPanel;