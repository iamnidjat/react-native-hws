import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import React, { Component } from "react";
import { Field, FieldProps, Formik } from "formik";
import * as Yup from "yup";

interface FormData {
  firstName: string;
  lastName: string;
  height: number;
  weight: number;
  age: number;
}

const validationSchema: Yup.Schema<FormData> = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Name must be more than 1")
    .max(12, "Name must be less than 13")
    .required("Name is required"),
  lastName: Yup.string()
    .min(2, "Last name must be more than 1")
    .max(12, "Last name must be less than 13")
    .required("Last name is required"),
  height: Yup.number()
    .required("Height is required")
    .min(150, "Height must be at least 1m 50 cm")
    .max(200, "Height must be at most 2m"),
  weight: Yup.number()
    .required("Weight is required")
    .min(40, "Weight must be at least 40kg")
    .max(100, "Weight must be at most 100kg"),
  age: Yup.number()
    .required("Age is required")
    .min(16, "Age must be at least 16")
    .max(100, "Age must be at most 100"),
});

const BaseScreen = () => {
  const values: FormData = {
    firstName: "",
    lastName: "",
    height: 0,
    weight: 0,
    age: 0,
  };

  const handleSubmitForm = (values: FormData) => {
    console.log("values", values);
  };

  return (
    <Formik
      initialValues={values}
      onSubmit={handleSubmitForm}
      validationSchema={validationSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <Field name="firstName">
            {({ field }: FieldProps<string>) => (
              <>
                {touched.firstName && errors.firstName && (
                  <Text
                    style={{
                      color: "red",
                    }}
                  >
                    {errors.firstName}
                  </Text>
                )}
                <TextInput
                  placeholder="Enter first name..."
                  style={styles.input}
                  onChangeText={handleChange("firstName")}
                  onBlur={handleBlur("firstName")}
                  value={values.firstName}
                />
              </>
            )}
          </Field>
          <Field name="lastName">
            {({ field }: FieldProps<string>) => (
              <>
                {touched.lastName && errors.lastName && (
                  <Text
                    style={{
                      color: "red",
                    }}
                  >
                    {errors.lastName}
                  </Text>
                )}
                <TextInput
                  placeholder="Enter last name..."
                  style={styles.input}
                  onChangeText={handleChange("lastName")}
                  onBlur={handleBlur("lastName")}
                  value={values.lastName}
                />
              </>
            )}
          </Field>
          <Field name="height">
            {({ field }: FieldProps<string>) => (
              <>
                {touched.height && errors.height && (
                  <Text
                    style={{
                      color: "red",
                    }}
                  >
                    {errors.height}
                  </Text>
                )}
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("height")}
                  onBlur={handleBlur("height")}
                  value={values.height.toString()}
                  keyboardType="numeric"
                />
              </>
            )}
          </Field>
          <Field name="weight">
            {({ field }: FieldProps<string>) => (
              <>
                {touched.weight && errors.weight && (
                  <Text
                    style={{
                      color: "red",
                    }}
                  >
                    {errors.weight}
                  </Text>
                )}
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("weight")}
                  onBlur={handleBlur("weight")}
                  value={values.weight.toString()}
                  keyboardType="numeric"
                />
              </>
            )}
          </Field>
          <Field name="age">
            {({ field }: FieldProps<string>) => (
              <>
                {touched.age && errors.age && (
                  <Text
                    style={{
                      color: "red",
                    }}
                  >
                    {errors.age}
                  </Text>
                )}
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("age")}
                  onBlur={handleBlur("age")}
                  value={values.age.toString()}
                  keyboardType="numeric"
                />
              </>
            )}
          </Field>
          <Button
            // @ts-ignore
            onPress={handleSubmit}
            title="Submit"
            style={{
              backgroundColor: "green",
              width: 100,
            }}
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default BaseScreen;
