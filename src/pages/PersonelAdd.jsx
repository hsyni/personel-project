import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import DanistayTextInput from "../utilities/customFormControls/DanistayTextInput";

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
        <DanistayTextInput name="ad" placeholder="Personel Adı" />
        <DanistayTextInput name="soyad" placeholder="Personel Soyadı" />

        <Button color="green" type="submit">
          Ekle
        </Button>
      </Form>
    </Formik>
  );
}
