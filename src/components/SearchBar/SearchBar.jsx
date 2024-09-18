import { Field, Form, Formik } from "formik";
import { AiOutlineSearch } from "react-icons/ai";
import s from "./SearchBar.module.css";

const SearchBar = ({ setQuery }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values) => {
    console.log(values);
    setQuery(values.query);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <div className={s.box}>
          <Field
            className={s.field}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={s.button} type="submit">
            <AiOutlineSearch size="20" />
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SearchBar;
