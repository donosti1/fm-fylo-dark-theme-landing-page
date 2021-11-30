import React, {FunctionComponent} from "react";
import {Button, FormControl, FormErrorMessage, Input, Stack, Text} from "@chakra-ui/react";
import {Field, Form, Formik} from "formik";

interface RegisterProps {}

function validateEmail(value: string) {
  let error;

  if (!value) {
    error = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Please enter a valid email address";
  }

  return error;
}

const Register: FunctionComponent<RegisterProps> = () => {
  return (
    <Stack
      alignItems="center"
      backgroundColor="secondary.400"
      borderRadius="lg"
      boxShadow=" rgba(0, 0, 0, 0.6) 4px 4px 6px"
      className="Register"
      height={[80, 80]}
      justifyContent="center"
      paddingX={[4, 16]}
      paddingY={[6, 8]}
      position="relative"
      spacing={[2, 8]}
      top={[32, 40]}
      width={["90%", "4xl"]}
    >
      <Text fontSize={["md", "3xl"]} fontWeight="700" paddingBottom={2}>
        Get early access today
      </Text>
      <Text fontSize={["xs", "md"]} paddingBottom={4} textAlign="center">
        It only takes a minute to sign up and our free starter tier is extremely generous. If you
        have any questions, our support team would be happy to help you.
      </Text>

      <Formik
        initialValues={{email: ""}}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <Form>
            <Stack direction={["column", "row"]} spacing={[4, 2]}>
              <Field name="email" validate={validateEmail}>
                {({field, form}: {field: any; form: any}) => (
                  <FormControl isInvalid={form.errors.email && form.touched.email}>
                    <Input variant="filled" {...field} id="email" placeholder="email@example.com" />
                    <FormErrorMessage fontSize="xs" marginStart={8}>
                      {form.errors.email}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button isLoading={props.isSubmitting} type="submit" variant="solid">
                Get Started For Free
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Stack>
  );
};

export default Register;
