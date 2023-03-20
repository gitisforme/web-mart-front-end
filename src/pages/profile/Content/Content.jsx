import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

import AccountSettings from './AccountSettings'
import Addresses from './Addresses'
import ChangePassword from './ChangePassword'

const Content = () => {
  const tabs = ['Account', 'Adresses', 'Change Password']

  return (
    <Box
      as="main"
      flex={3}
      d="flex"
      flexDir={"column"}
      justifyContent="space-between"
      pt={5}
      bg="white"
      rounded="md"
      borderWidth={1}
      borderColor="gray.200"
      boxSizing='content-box'
      overflow='auto'
      minHeight='60vh'
      width='95%'
      style={{ transform: 'translateY(-100px)' }}
    >

      <Tabs orientation='vertical'>
        <TabList px={5} width='40vh'>
          {tabs.map(tab => (
            <Tab
              key={tab}
              mx={3}
              px={0}
              py={3}
              fontWeight="semibold"
              color="brand.cadet"
              // borderBottomWidth={1}
              _active={{ bg: 'transparent' }}
              _selected={{ color: 'brand.dark', borderColor: 'brand.blue' }}
            >
              {tab}
            </Tab>
          ))}
        </TabList>
        <TabPanels px={3} mt={5} width='60vh'>
          <TabPanel>
            <AccountSettings />
          </TabPanel>
          <TabPanel>
            <Addresses />
          </TabPanel>
          <TabPanel>
            <ChangePassword />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Content
