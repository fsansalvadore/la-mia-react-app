import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';
import Slider from './Slider';

const Wrapper = styled.div`
  padding: 10px;
  height: 100%;
`;

const StyledTabs = styled(Tabs)`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;

  .react-tabs__tab-list {
    margin: 0;
    display: inline-flex;
    background: #fff;
    border-radius: 15px 15px 0 0;
    border: none;
    padding: 0;

    .react-tabs__tab {
      border-radius: 15px 15px 0 0;
      border: none;
      background: transparent;
      padding: 10px 15px;
      margin: 0;
      font-weight: bold;
      color: rgb(1, 23, 95);
    }

    .react-tabs__tab--selected {
      background: rgb(83, 116, 231);
      color: #fff;
    }
  }
`;

const PanelWrapper = styled.div`
  width: 100%;
  flex: 1;
  padding: 10px;
  background: linear-gradient(0deg, #77b9f5 0%, #5374e7 100%);
  border-radius: 0 15px 15px 15px;
`;

export default () => (
  <Wrapper>
    <StyledTabs>
      <TabList>
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
      </TabList>

      <PanelWrapper>
        <TabPanel>
          <Slider />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </PanelWrapper>
    </StyledTabs>
  </Wrapper>
);
