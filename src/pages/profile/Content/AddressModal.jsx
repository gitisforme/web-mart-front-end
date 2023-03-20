import React from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Checkbox,
  Grid,
} from '@chakra-ui/react';

import { useState } from 'react';

function AddressModal({ isOpen = false, onClose = () => { }, modalValue = {} }) {

  const { id, full_name, phone_number, address1, address2, city, county, country, pincode, houseNumber, isDefault, userId } = modalValue;
  const [addressData, setAddressData] = useState(modalValue);
  // const [isCheck, setChecked] = useState(modalValue.is_default);

  const handleCheck = (e) => {
    setAddressData({ ...addressData, is_default: e.target.checked });
  }


  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        {addressData.full_name == null ?
          <ModalHeader>Add New Address</ModalHeader>
          :
          <ModalHeader>{addressData.full_name}</ModalHeader>
        }
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Full Name</FormLabel>
            <Input placeholder="Enter full name" value={addressData.full_name}
              onChange={e => setAddressData({ ...addressData, full_name: e.target.value })}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Phone Number</FormLabel>
            <InputGroup>
              <Input placeholder="Enter phone number" value={addressData.phone_number}
                onChange={e => setAddressData({ ...addressData, phone_number: e.target.value })}
              />
            </InputGroup>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Address</FormLabel>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <Input placeholder="Address line 1" value={addressData.address1}
                onChange={e => setAddressData({ ...addressData, address1: e.target.value })}
              />
              <Input placeholder="Address line 2" value={addressData.address2}
                onChange={e => setAddressData({ ...addressData, address2: e.target.value })}
              />
            </Grid>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>City</FormLabel>
            <Input placeholder="Enter city" value={addressData.city}
              onChange={e => setAddressData({ ...addressData, city: e.target.value })}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>State</FormLabel>
            <Input placeholder="Enter state" value={addressData.county}
              onChange={e => setAddressData({ ...addressData, county: e.target.value })}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Zip Code</FormLabel>
            <NumberInput value={parseInt(addressData.pincode)}
              onChange={e => setAddressData({ ...addressData, pincode: e })}
            >
              <NumberInputField placeholder="Enter zip code" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <Checkbox mt={4} onChange={handleCheck} >Make as default address</Checkbox>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save changes</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddressModal;
