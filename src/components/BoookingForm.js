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
  const today = new Date()
  const formatDate = date => {
    var year = date.toLocaleString("default", { year: "numeric" });
    var month = date.toLocaleString("default", { month: "2-digit" });
    var day = date.toLocaleString("default", { day: "2-digit" });

    return `${year}-${month}-${day}`
  }

  const { errors, touched, getFieldProps, handleSubmit, resetForm, values: formValues, setFieldValue } = useFormik({
    initialValues: {
      date: formatDate(today),
      time: '',
      guests: 2,
      occasion: ''
    },
    onSubmit: (values) => submit('', values),
    validationSchema: object({
      date: date().default(() => formatDate(today)).min(formatDate(today), 'Please input a valid date.').required(),
      time: mixed()
        .required()
        .oneOf(props.availableTimes),
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
    // <VStack w={{ md: '1024px' }} p={{ base: 0, md: 32 }} alignItems="flex-start">
    //   <Heading as="h1" id="contactme-section">
    //     Reserve a Table
    //   </Heading>
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
                min={formatDate(today)}
              />
              <FormErrorMessage>{errors.date}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={touched.time && errors.time}>
              <FormLabel htmlFor="time">Time</FormLabel>
              <Select id="time" name="time" placeholder="Select Time" {...getFieldProps('time')}>
                {props.availableTimes.map(timeSlot => <option key={timeSlot} value={timeSlot}>{timeSlot}</option>)}
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
              <Select id="occasion" name="occasion" placeholder="Select an Ocassion" {...getFieldProps('occasion')}>
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
    // </VStack>
  );
};

export default BookingForm;
