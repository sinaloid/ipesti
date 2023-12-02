import { useEffect, useRef, useState } from "react";

import endPoint from "../../services/endPoint";
import request from "../../services/request";
import { Input } from "../../components/Input";
import { useFormik } from "formik";
import { pagination } from "../../services/function";
import AppRoute from "../../routes/AppRoute";

const initData = {
  nom: "",
  description: "",
  parent: "",
  image: "",
};
export const Categorie = () => {
  const [datas, setDatas] = useState({
    all: [],
    small: [],
  });
  const [categories, setCategories] = useState([]);
  const [pages, setPages] = useState({
    list: [],
    counter: 0,
    index: 0,
  });
  const close = useRef();
  useEffect(() => {
    get();
  }, []);

  const formik = useFormik({
    initialValues: initData,
    onSubmit: (values) => {
      console.log(values);
      post(values);
    },
  });
  const get = () => {
    request
      .get(endPoint.categories)
      .then((res) => {
        console.log(res.data);

        const tab = pagination(res.data.data, 10);


        if (tab.counter !== 0) {
          setDatas({
            all: res.data.data,
            small: tab.list[0],
          });
          setPages(tab);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const post = (values) => {
    request
      .post(endPoint.categories, values)
      .then((res) => {
        console.log(res.data);
        close.current.click();
        get();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changePage = (e, values) => {
    e.preventDefault();
    const pageNumber = pages.index + parseInt(values);
    console.log(pageNumber);
    if (pageNumber >= 0 && pageNumber < pages.counter) {
      setPages({ ...pages, index: pageNumber });
      setDatas({
        ...datas,
        small: pages.list[pageNumber],
      });
    }
  };
  return (
    <>
      <AppRoute type={"categorie"} />
    </>
  );
};
