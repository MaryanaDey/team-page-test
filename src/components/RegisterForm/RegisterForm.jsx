import { useEffect } from 'react';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';
import { useFormik } from 'formik';

import CommonInput from 'components/UI-kit/inputs/CommonInput';
import RadioInput from 'components/UI-kit/inputs/RadioInput';
import ImageInput from 'components/UI-kit/inputs/ImageInput';
import CommonButton from 'components/UI-kit/buttons/CommonButton';

import { validateCreateUser } from 'helpers/validateCreateUser';

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  position_id: '',
  photo: '',
};

const RegisterForm = ({
  positionsList,
  isFetching,
  isCompleted,
  loadSettings,
  createUser,
}) => {
  const form = useFormik({
    initialValues: INITIAL_FORM,
    validate: validateCreateUser,
    enableReinitialize: true,
    onSubmit: (data) => {
      console.log(data);
      createUser(data);
    },
  });

  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
    touched,
    errors,
  } = form;

  useEffect(() => {
    loadSettings();
  }, []);

  if (isCompleted) return <div>completed</div>;

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <ContainerInput>
          <CommonInput
            name="name"
            label="Your name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && errors.name ? errors.name : null}
          />
        </ContainerInput>

        <ContainerInput>
          <CommonInput
            name="email"
            label="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email ? errors.email : null}
          />
        </ContainerInput>

        <ContainerInput>
          <CommonInput
            name="phone"
            label="Phone"
            helper="+38 (XXX) XXX - XX - XX"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.phone && errors.phone ? errors.phone : null}
          />
        </ContainerInput>

        <ContainerRadio>
          <RadioInput
            list={positionsList}
            name="position_id"
            label="Select your position"
            value={values.position_id}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.position_id && errors.position_id
                ? errors.position_id
                : null
            }
          />
        </ContainerRadio>

        <ContainerPhotoInput>
          <ImageInput
            name="photo"
            label="Upload"
            onChange={setFieldValue}
            fileName={values?.photo?.name}
            error={errors.photo}
          />
        </ContainerPhotoInput>

        <ContainerButton>
          <CommonButton
            title="Sign up"
            disabled={false}
            isFetching={isFetching}
            type="submit"
          />
        </ContainerButton>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 100px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerInput = styled.div`
  width: 328px;
  margin-top: 50px;

  &:first-child {
    margin-top: 0;
  }

  @media ${breakpoints.tablet} {
    width: 380px;
  }
`;

const ContainerRadio = styled.div`
  margin-top: 43px;
`;

const ContainerButton = styled.div`
  margin-top: 50px;
`;

const ContainerPhotoInput = styled.div`
  width: 328px;
  margin-top: 47px;

  &:first-child {
    margin-top: 0;
  }

  @media ${breakpoints.tablet} {
    width: 380px;
  }
`;

export default RegisterForm;
