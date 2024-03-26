import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabData = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Read Books</Tab>
        <Tab>Wishlist Books</Tab>
      </TabList>
      <TabPanel>
        <p>This is Reading List</p>
      </TabPanel>
      <TabPanel>
        <p>This is wish List</p>
      </TabPanel>
    </Tabs>
  );
};

export default TabData;