import { Droppable, Draggable } from "react-beautiful-dnd";
import boyblue from "../assets/boy/boyblue.png"
import girlblue from "../assets/girl/girlblue.png"

const Candidates = (props) => {
  const itemList = props.items;

  return (
    <div className="mx-auto mt-2 min-w-[300px] w-[370px] px-3 overflow-hidden">
      <h1
        className={`text-center p-2 text-[27px] font-bold tracking-wide bg-blue-600 text-white font-Kanit rounded-t-lg`}
      >
        {props.name}
      </h1>
      <Droppable droppableId={props.droppableId}>
        {(provided) => (
          <ul
            className="bg-blue-600 pb-[1px]"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {itemList.map((item, index) => {
              return (
                <Draggable
                  key={item.id.toString()}
                  draggableId={item.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`font-sans p-3 text-[15px] bg-blue-100 200 mb-2 mx-2`}
                    >
                      <div className="flex justify-between">
                        <img
                          className="block w-[60px] h-[60px]"
                          src={
                            item.gender == "male" ? boyblue : girlblue
                          }
                          alt=""
                        />
                        <div className="font-Kanit font-semibold tracking-wide w-full h-[60px] ml-3 text-center flex items-center text-[18px]">
                          <span className="text-center w-full text-blue-600">
                            {item.name}
                          </span>
                        </div>
                      </div>
                      <div className="w-full font-sans leading-7 font-medium text-blue-600 text-justify mt-5 text-[18px]">
                        {item.desc}
                      </div>
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
};

export default Candidates;
