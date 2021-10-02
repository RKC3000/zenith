import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function FAQ() {
  return (
    <div
      id="faq"
      className="min-h-screen flex flex-col items-center justify-center space-y-5 text-left"
    >
      <h1 className="text-5xl font-bold">FAQ</h1>

      <div className="w-56 group bg-gray-800 p-2 flex flex-col border-2 rounded-xl text-white md:w-[800px]">
        <div className="flex items-center justify-between">
          <p>1. How to register for Zenith?</p>
          <ExpandMoreIcon />
        </div>
        {/* symbol */}
        <div className="hidden p-4 group-hover:block">
          Forms will be out soon.
        </div>
      </div>
      <div className="w-56 group bg-gray-800 p-2 flex flex-col border-2 rounded-xl text-white md:w-[800px]">
        <div className="flex items-center justify-between">
          <p>2. What are the dates of Zenith 2021?</p>
          <ExpandMoreIcon />
        </div>
        {/* symbol */}
        <div className="hidden p-4 group-hover:block">
          Follow our timelines.
        </div>
      </div>
      <div className="w-56 group bg-gray-800 p-2 flex flex-col border-2 rounded-xl text-white md:w-[800px]">
        <div className="flex items-center justify-between">
          <p>3. is the entry free for all? Who can attend it?</p>
          <ExpandMoreIcon />
        </div>
        {/* symbol */}
        <div className="hidden p-4 group-hover:block">
          Well, it begins with the mask !!! and the rest is included in
          commodities.
        </div>
      </div>
      <div className="w-56 group bg-gray-800 p-2 flex flex-col border-2 rounded-xl text-white md:w-[800px]">
        <div className="flex items-center justify-between">
          <p>4. What should I do to attend Zenith?</p>
          <ExpandMoreIcon />
        </div>
        {/* symbol */}
        <div className="hidden p-4 group-hover:block">
          Grab your goodies and have fun.
        </div>
      </div>
      <div className="w-56 group bg-gray-800 p-2 flex flex-col border-2 rounded-xl text-white md:w-[800px]">
        <div className="flex items-center justify-between">
          <p>5. What I will get from Zenith?</p>
          <ExpandMoreIcon />
        </div>
        {/* symbol */}
        <div className="hidden p-4 group-hover:block">
          It’s a gateway for some to enter the new life of tech that they wanna
          live and experience ahead and for others a step keener towards their
          goal, just the difference is …. It comes with breaks of fun to re_LOAD
          the joy and life that one procures.
        </div>
      </div>
    </div>
  );
}

export default FAQ;
