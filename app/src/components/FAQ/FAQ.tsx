import { useState, type FC } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

interface FAQProps {
  a: string;
  q: string;
}


export const FAQ: FC<FAQProps> = ({
  a,
  q
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="cursor-pointer flex justify-between text-xl" onClick={() => setIsOpen(!isOpen)}>
        {q}
        <div className="text-3xl">{isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</div>
      </div>
      {isOpen && (
        <div className='font-normal'>
          <p>{a}</p>
        </div>
      )}
    </>
  )
}
