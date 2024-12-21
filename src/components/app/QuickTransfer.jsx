import { Button, Input } from 'components/ui';
import { ReactComponent as SendIcon } from 'assets/icons/send.svg';
import Icon from 'components/ui/Icon';

export const QuickTransfer = ({ userDetails }) => {
  return (
    <div className="flex flex-col gap-4 p-2">
      <div className="flex flex-row justify-between">
        {userDetails?.map((user) => (
          <div key={user.accountNumber} className="flex flex-col">
            {user.profileImage}
            <p>{user.name}</p>
            <p>{user.position}</p>
          </div>
        ))}
        <p className="font-inter text-sm font-normal leading-4 text-primary">
          View all
        </p>
      </div>
      <div className="flex flex-row justify-between p-3 gap-2">
        <p>Write Amount</p>
        <div
          style={{
            clipPath: 'polygon(0 0, 100% 0, 90% 50%, 100% 100%, 0 100%)',
          }}
          className="flex items-center  border-gray-300 bg-light-gray py-2 px-9 rounded-l-3xl  max-w-xs w-full"
        >
          <Input
            type="number"
            className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
        <Button className="flex flex-row min-w-24 justify-around items-center bg-black text-white py-1 px-1 rounded-full hover:bg-gray-800 transition-all">
          Send
          <Icon icon={SendIcon} />
        </Button>
      </div>
    </div>
  );
};
