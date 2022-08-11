import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormField, Button, Label } from "semantic-ui-react";

export default function PersonelAdd() {
  const initialValues = {
    birimId: "",
    gorevId: "",
    medeniDurumId: "",
    kanGrubuId: "",
    ad: "",
    soyad: "",
    baba_Ad: "",
    ana_Ad: "",
  };

  const schema = Yup.object({
    ad: Yup.string().required("Personel adı zorunlu!"),
    soyad: Yup.string().required("Personel soyadı zorunlu!"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="ui form">
        <FormField>
          <Field name="ad" placeholder="Personel adı"></Field>
          <ErrorMessage
            name="ad"
            render={(error) => (
              <Label pointing basic color="red" content={error}></Label>
            )}
          ></ErrorMessage>
        </FormField>
        <FormField>
          <Field name="soyad" placeholder="Personel Soyadı"></Field>
          <ErrorMessage
            name="soyad"
            render={(error) => (
              <Label pointing basic color="red" content={error}></Label>
            )}
          ></ErrorMessage>
        </FormField>
        <Button color="green" type="submit">
          Ekle
        </Button>
      </Form>
    </Formik>
  );
}
