import React, { useState } from 'react'
import { Box, Tabs, Tab } from '@mui/material';
import Icon from '@mdi/react';
import { mdiHandshakeOutline } from '@mdi/js';
import TabPanel from './TabPanel';

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function VerticalTabMenu({ children }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100%', minHeight: '90vh'}}
      component='section'
    >
      <Tabs
        component='nav'
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        sx={{ borderRight: 1, borderColor: 'divider', width: '20vw' }}
        TabIndicatorProps={{ style: { left: 0, width: 4, borderRadius: 5, backgroundColor: '#00AD8C' } }}
      >
        <Tab icon={
          <Icon path={mdiHandshakeOutline} title="User Profile" size={1.5} />
        } iconPosition="start" sx={{ height: 75 }} style={{ color: '#00AD8C' }} label="Notas Fiscais" {...a11yProps(0)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        { children }
      </TabPanel>
    </Box>
  );
}

export default VerticalTabMenu;