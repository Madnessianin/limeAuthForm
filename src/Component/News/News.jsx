import React from "react";
import { useSelector } from "react-redux";
import { getNews } from "../../Redux/news/newsSelector";
import style from "./News.module.scss";

const Post = ({ text, img }) => {
  return (
    <div className={style.item}>
      <div className={style.content}>
        <img className={style.img} src={img} alt="" />
        <p className={style.text}>{text}</p>
      </div>
    </div>
  );
};

const News = () => {
  const news = useSelector((state) => getNews(state));

  const newsBlopck = news.map((item) => (
    <Post key={item.id} text={item.text} img={item.img} />
  ));
  return <div className={style.inner}>{newsBlopck}</div>;
};

export default News;
