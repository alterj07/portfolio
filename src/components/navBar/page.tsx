import * as React from 'react';
import { Tabs } from '@base-ui-components/react/tabs';
import '../../css/navBar.css';
// import React from 'react';

export default function NavBar() {
  return (
    <Tabs.Root className="Tabs" defaultValue="overview">
      <Tabs.List className="List">
        <Tabs.Tab className="Tab" value="overview">
          Home
        </Tabs.Tab>
        <Tabs.Tab className="Tab" value="projects">
          Projects
        </Tabs.Tab>
        <Tabs.Tab className="Tab" value="account">
          Performances
        </Tabs.Tab>
        <Tabs.Indicator className="Indicator" />
      </Tabs.List>
      <Tabs.Panel className="Panel" value="overview">
        {/* <OverviewIcon className="Icon" /> */}
        <h2>Welcome to the Home Tab</h2>
      </Tabs.Panel>
      <Tabs.Panel className="Panel" value="projects">

      </Tabs.Panel>
      <Tabs.Panel className="Panel" value="account">

      </Tabs.Panel>
    </Tabs.Root>
  )
}