import buttonImg from "./img/Button.png";
import img from "./img/Image.png";

export default function App() {
  return (
    <div className="flex flex-col h-[812px] w-[375px] bg-white">
      <div className="w-full">
        <img src={img} alt="Woman with a flower" />
      </div>

      <section
        className="flex justify-between items-center ml-7 pr-5 border-b-solid border-b-2 border-b-gray-100
      "
      >
        <h1 className="text-3xl pt-3 pb-2 font-bold">FKA Twigs</h1>
        <a>
          <img src={buttonImg} alt="Album Options Button" />
        </a>
      </section>
    </div>
  );
}
