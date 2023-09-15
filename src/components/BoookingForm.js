import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  VStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Grid,
  GridItem,
  background
} from "@chakra-ui/react";

import useSubmit from './../hooks/useSubmit'

import { string, mixed, number, date, object } from 'yup';


const BookingForm = (props) => {
  const navigate = useNavigate();
  const { isLoading, response, submit } = useSubmit();
  const occasions = ['Birthday', 'Anniversary']
  const availableTimesByDate = (date) => props.availableTimes[date] ?? []

  const { errors, touched, getFieldProps, handleSubmit, values: formValues, setFieldValue } = useFormik({
    initialValues: {
      date: props.today,
      time: '',
      guests: 2,
      occasion: ''
    },
    onSubmit: (values) => submit(props.onSubmitForm, values),
    validationSchema: object({
      date: date().default(() => props.today).min(props.today, 'Please input a valid date.').required(),
      time: string().required('Please select available time.'),
      guests: number().min(1).max(10).required('Number of Guests cannot be empty.'),
      occasion: mixed().optional()
        .oneOf(occasions)
    }),
  });


  useEffect(() => {
    if (response) {
      const { type } = response

      if (type === 'success') {
        navigate('/booking-confirmed')
      }
    }
  }, [response])

  const handleChangeDate = (e) => {
    setFieldValue('date', e.target.value)
    props.onChangeDate(e.target.value)
  }

  return (
    <Box p={{ base: 0, md: 6 }} rounded="md" w="100%">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <Grid w='100%' templateColumns='repeat(3, 1fr)' gap={6}>
            <GridItem colSpan={2}>
              <FormControl isRequired isInvalid={touched.date && errors.date}>
                <FormLabel htmlFor="date">Date</FormLabel>
                <Input
                  id='date'
                  {...getFieldProps('date')}
                  onChange={handleChangeDate}
                  type='date'
                  min={props.today}
                  data-testid='date-input'
                />
                <FormErrorMessage>{errors.date}</FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired isInvalid={touched.time && errors.time}>
                <FormLabel htmlFor="time">Time</FormLabel>
                <Select id="time"
                  name="time"
                  placeholder="Select Time"
                  {...getFieldProps('time')}
                  data-testid='time-input'
                >
                  {availableTimesByDate(formValues.date).map(timeSlot => <option key={timeSlot} value={timeSlot}>{timeSlot}</option>)}
                </Select>
                <FormErrorMessage>{errors.time}</FormErrorMessage>
              </FormControl>
            </GridItem>
          </Grid>
          <FormControl isRequired isInvalid={touched.guests && errors.guests}>
            <FormLabel htmlFor="guests">Number of Guests</FormLabel>
            <NumberInput
              id='guests'
              {...getFieldProps('guests')}
              onChange={(guestsString, guests) => setFieldValue('guests', guests)}
              min={1}
              max={10}
            >
              <NumberInputField data-testid='guests-input' />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormErrorMessage>{errors.guests}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={touched.occasion && errors.occasion}>
            <FormLabel htmlFor="occasion">Occasion</FormLabel>
            <Select id="occasion"
              name="occasion"
              placeholder="Select an Occasion"
              {...getFieldProps('occasion')}
              data-testid="occasion-input">
              {occasions.map(occasion => <option key={occasion} value={occasion}>{occasion}</option>)}
            </Select>
            <FormErrorMessage>{errors.occasion}</FormErrorMessage>
          </FormControl>
          <Button bg="brand.secondary" text="black" _hover='brand.secondary' isLoading={isLoading} loadingText='Submitting' type="submit" width="full">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default BookingForm;
