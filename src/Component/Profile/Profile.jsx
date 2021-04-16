import React from "react";
import authRedirect from "../../HOC/authRedirect";
import style from "./Profile.module.scss";
import ava from "./../../assets/Img/avatar.jpg";
import { useSelector } from "react-redux";
import { getLogin } from "../../Redux/auth/authSelector";

const Profile = () => {
  const login = useSelector((state) => getLogin(state));
  return (
    <div className={style.inner}>
      <div className={style.content}>
        <img className={style.avatar} src={ava} />
        <div className={style.description}>
          <h1 className={style.title}>{login}</h1>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia
            sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas.
            Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed
            volutpat massa. Egestas ornare vel volutpat. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Elementum volutpat orci turpis
            urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor
            orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia
            eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare
            vel volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere
            tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt
            arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam
            sit sed volutpat massa. Egestas ornare vel volutpat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default authRedirect(Profile);
