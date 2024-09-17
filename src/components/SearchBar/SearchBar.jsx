import { Field, Form, Formik } from "formik";
import { AiOutlineSearch } from "react-icons/ai";
import s from "./SearchBar.module.css";

const SearchBar = () => {
  const handleSubmit = () => {};

  return (
    <header className={s.heder}>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={handleSubmit}
        // validationSchema={orderSchema}
      >
        <Form className={s.form}>
          <div className={s.box}>
            <Field
              className={s.field}
              type="text"
              name="search"
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
    </header>
  );
};

export default SearchBar;
