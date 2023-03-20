import { useState, useEffect } from 'react';
import {
  Grid,
  Button,
} from '@chakra-ui/react';
import MyCard from './CardAddress';
import { errorToast } from "../../../components/toast/toast";

import { API } from "../../../middleware/middleware";
import AddressModal from "./AddressModal";


function Addresses() {
  const [items, setItems] = useState([
    {
      id: "cee38f43-8725-4d0b-aea3-5f401e54453c",
      full_name: "1",
      phone_number: "1",
      address1: "1",
      address2: "1",
      city: "1",
      county: "1",
      country: "1",
      pincode: "1",
      houseNumber: 1,
      isDefault: true,
      userId: "6e840550-96ed-4096-8a04-c1659db3fb42",
    },

    // { fullName: 'WebMart', phoneNumber: '(324) 234-6231', address_t: 'B city', address_d: '', city: 'C street', state: 'DD', zip_code: '15215', isDefault: false },
    // { fullName: 'Woocommerce', phoneNumber: '(324) 234-6231', address_t: 'C city', address_d: '', city: 'D street', state: 'EA', zip_code: '15156', isDefault: false }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    API.get("/address/get_user_address")
      .then(res => {
        if (res.status === 200) {
          console.log(res, 'adresses');
          setItems(res.data)
        }
      })
      .catch(err => errorToast("Getting User Addresses    error !"));
  }, [])


  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  }

  const createCardItems = () => {
    return (
      items.map((item, index) => (
        <MyCard key={index} values={item}></MyCard>
      ))
    )
  }

  return (
    <>
      <Button bg="blue.500" onClick={handleModalOpen}>Add New Address</Button>
      <Grid
        mt='20px'
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={6}
      >
        {createCardItems()}
      </Grid>
      <AddressModal isOpen={isModalOpen} onClose={handleModalClose} ></AddressModal>
    </>
  )
}

export default Addresses
