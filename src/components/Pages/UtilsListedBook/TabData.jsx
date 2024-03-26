import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Readlist from './Readlist';
import WishList from './WishList';

const TabData = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Read Books</Tab>
        <Tab>Wishlist Books</Tab>
      </TabList>
      <TabPanel>
        <Readlist></Readlist>
      </TabPanel>
      <TabPanel>
        <WishList></WishList>
      </TabPanel>
    </Tabs>
  );
};

export default TabData;