import { LINK_GROUP } from "./constants/links";

function App() {
  return (
    <div className=" h-screen bg-black px-[10px] py-[50px] text-center text-cyan-50">
      <div className=" mb-[20px] ">
        <img
          className=" inline-block h-32 w-32 rounded-full ring-2 ring-white"
          src="/profile.jpg"
          alt=""
        ></img>

        <h1 className="h-30 mb-[10px] mt-[15px] text-[22px] font-light text-[#BBBBBB]">
          tlowac.dev
        </h1>

        <div className="mb-[10px] mt-[15px]">
          <span className="rounded-md px-2 py-1 text-xs font-medium text-[#40cf8e] outline">
            FullStack Developer
          </span>
        </div>
      </div>

      <div className=" flex flex-col items-center">
        {LINK_GROUP.map((link) => {
          return (
            <div className=" mb-[10px] flex h-[50px] w-2/3 items-center justify-center rounded-sm border border-[#2d2d2d] bg-[#1C1C1C] shadow-md sm:w-[450px]">
              <a
                href={link.url}
                className="flex h-full w-full items-center justify-center text-center font-light text-[#BBBBBB]"
              >
                {link.target}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
