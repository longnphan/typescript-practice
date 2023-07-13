import { ChangeEvent } from "react";

const EventComponent: React.FC = () => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return (
    <div>
      <input onChange={onChange} />
    </div>
  );
};

export default EventComponent;
