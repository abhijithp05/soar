import { useState } from 'react';
import { Button, Input } from 'components/ui';
import { ReactComponent as SendIcon } from 'assets/icons/send.svg';
import { ReactComponent as NextIcon } from 'assets/icons/next.svg';
import { ReactComponent as PreviousIcon } from 'assets/icons/previous.svg';

import Icon from 'components/ui/Icon';

export const QuickTransfer = ({ userDetails }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next button click
  const handleNext = () => {
    if (currentIndex + 3 < userDetails.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  // Function to handle previous button click
  const handlePrevious = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  // Get the slice of 3 items to display
  const displayedItems = userDetails.slice(currentIndex, currentIndex + 3);

  return (
    <div className="flex w-full flex-col h-full gap-4 p-2 justify-evenly">
      <div className="flex flex-row justify-between">
        {currentIndex > 0 && (
          <Button onClick={handlePrevious} className="btn btn-prev">
            <Icon icon={PreviousIcon} width="25px" height="25px" />
          </Button>
        )}
        {displayedItems?.map((user) => (
          <div
            key={user.accountNumber}
            className="flex flex-col gap-2 w-1/3 items-center"
          >
            {user.profileImage}
            <p className="text-base font-normal leading-5">{user.name}</p>
            <p className="text-sm font-normal leading-4 text-light-gray-100">
              {user.position}
            </p>
          </div>
        ))}
        <Button
          onClick={handleNext}
          disabled={currentIndex + 3 >= userDetails.length}
          className="flex justify-center items-center btn btn-next"
        >
          <Icon icon={NextIcon} width="50px" height="50px" />
        </Button>
      </div>

      <div className="flex flex-row justify-between items-center p-3 gap-2 relative">
        <p className="text-base font-inter font-normal text-light-gray-100">
          Write Amount
        </p>
        <div
          style={{
            clipPath: 'polygon(0 0, 100% 0, 90% 50%, 100% 100%, 0 100%)',
          }}
          className="flex items-center  border-gray-300 bg-light-gray py-2 pl-4 pr-20 rounded-l-3xl  max-w-72 w-[60%] h-12 relative"
        >
          <Input
            type="number"
            className="w-full bg-transparent outline-none text-light-gray-100 placeholder-gray-400"
          />
        </div>
        <Button className="flex flex-row min-w-24 h-12 justify-around items-center bg-black text-white py-1 px-1 rounded-full hover:bg-gray-800 transition-all absolute right-[-8px] top-1/2 transform -translate-y-1/2 z-10">
          Send
          <Icon icon={SendIcon} />
        </Button>
      </div>
    </div>
  );
};
