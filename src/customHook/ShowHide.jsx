import useToggle from "./customHook/useToggle";

const ShowHide = () => {
  const [isShow, Toggle] = useToggle();
  return (
    <div className="">
      <button className=" outline outline-2 m-4 p-1 " onClick={Toggle}>
        {`${isShow ? "Hide" : "Show"}`}
      </button>
      {isShow && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          beatae.
        </p>
      )}
    </div>
  );
};

export default ShowHide;
