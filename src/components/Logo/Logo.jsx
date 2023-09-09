import s from "./Logo.module.css";

export default function Logo({ img, title, subtitle }) {
  return (
    <>
      <div className={s.container}>
        <img className={s.img} src={img} alt="Logo" />
        <div className={s.title} >{title}</div>
      </div>
      <div className={s.subtitle}>{subtitle}</div>
    </>
  );
}
