import { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  VStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import useSubmit from './../hooks/useSubmit'

import { mixed, number, date, object } from 'yup';


const BookingForm = (props) => {
  const { isLoading, response, submit } = useSubmit();
  const occasions = ['birthday', 'anniversary']
  const availableTimesByDate = (date) => props.availableTimes[date] ?? []

  const { errors, touched, getFieldProps, handleSubmit, resetForm, values: formValues, setFieldValue } = useFormik({
    initialValues: {
      date: props.today,
      time: '',
      guests: 2,
      occasion: ''
    },
    onSubmit: (values) => submit(props.onSubmitForm, values),
    validationSchema: object({
      date: date().default(() => props.today).min(props.today, 'Please input a valid date.').required(),
      time: mixed().required(),
      // time: mixed()
      //   .required()
      //   .oneOf(availableTimesByDate(props.today)), // @TODO: replace with dynamic checking (actual date value from form)
      guests: number().min(1).max(10).required('Number of Guests cannot be empty'),
      occasion: mixed().required()
        .oneOf(occasions)
    }),
  });


  useEffect(() => {
    if (response) {
      const { type, message } = response
      alert(`${type}: ${message}`)

      if (type === 'success') {
        console.log('successfully opened')
        resetForm()
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
            <FormControl isInvalid={touched.date && errors.date}>
              <FormLabel htmlFor="date">Date</FormLabel>
              <Input
                id='date'
                {...getFieldProps('date')}
                onChange={handleChangeDate}
                type='date'
                min={props.today}
              />
              <FormErrorMessage>{errors.date}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={touched.time && errors.time}>
              <FormLabel htmlFor="time">Time</FormLabel>
              <Select id="time" name="time" placeholder="Select Time" {...getFieldProps('time')}>
                {availableTimesByDate(formValues.date).map(timeSlot => <option key={timeSlot} value={timeSlot}>{timeSlot}</option>)}
              </Select>
              <FormErrorMessage>{errors.time}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={touched.guests && errors.guests}>
              <FormLabel htmlFor="guests">Number of Guests</FormLabel>
              <NumberInput
                id='guests'
                {...getFieldProps('guests')}
                onChange={(guestsString, guests) => setFieldValue('guests', guests)}
                min={1}
                max={10}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormErrorMessage>{errors.guests}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={touched.occasion && errors.occasion}>
              <FormLabel htmlFor="occasion">Occasion</FormLabel>
              <Select id="occasion" name="occasion" placeholder="Select an Occasion" {...getFieldProps('occasion')}>
                {occasions.map(occasion => <option key={occasion} value={occasion}>{occasion}</option>)}
              </Select>
              <FormErrorMessage>{errors.occasion}</FormErrorMessage>
            </FormControl>
            <Button isLoading={isLoading} loadingText='Submitting' type="submit" colorScheme="purple" width="full">
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
  );
};

export default BookingForm;
