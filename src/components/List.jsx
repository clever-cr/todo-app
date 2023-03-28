import { AiTwotoneDelete } from "react-icons/ai";

const List = ({ item, handle, handleChecked }) => {
  return (
    <div>
      <div className="flex items-center justify-between w-[500px]">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            onChange={handleChecked}
            checked={item.checked}
          />
          {item.checked ? (
            <h1>
              <del>{item.text}</del>
            </h1>
          ) : (
            <h1>{item.text}</h1>
          )}
        </label>
        <AiTwotoneDelete onClick={handle} className="text-red-600" />
      </div>
    </div>
  );
};
export default List;
