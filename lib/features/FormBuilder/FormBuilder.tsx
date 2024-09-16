import React, { Fragment } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import Draggable from "./Draggable";
import Droppable from "./Droppable";
import { Container, Text, Icon, FormField } from "../../components/";
import type {
  FormBuilderColumn,
  FormBuilderData,
  FormBuilderRow,
} from "./type";
//constant
import { FORMBUILDER_COMPONENTS } from "./constant";

const FormBuilder: React.FC = () => {
  const [values, setValues] = React.useState<FormBuilderRow[]>([]);

  const handleDragEnd = ({ over, active }: DragEndEvent) => {
    if (!over?.id) return;
    if (!active.data.current) return;
    const dragData = active.data.current;
    const overId = over?.id;
    const overIndex =
      overId === "new-row"
        ? values.length
        : values.findIndex((r) => r.id === overId);

    const columnId = `${dragData.name}-${new Date().getTime()}`;

    let row = [...values];
    const columnData: FormBuilderData = {
      type: "column",
      id: columnId,
      name: columnId,
      data: dragData as FormField,
    };
    if (overId === "new-row") {
      row[overIndex] = {
        type: "row",
        id: `row-${new Date().getTime()}`,
        data: [],
      };
    }
    row[overIndex].data.push(columnData);
    setValues(row);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex w-full h-full">
        <section className="w-[320px] h-full border-r border-gray-300 ">
          <ul className="p-2 grid gap-2 grid-cols-2">
            {FORMBUILDER_COMPONENTS.map((c, i) => (
              <Fragment key={i}>
                {c && c.data && c.id && (
                  <Draggable
                    id={(c?.id as string) || ""}
                    data={c?.data as FormField}
                    className="z-50"
                  >
                    <li className="flex items-center justify-start p-2 border border-gray-400 rounded bg-gray-50 space-x-2">
                      <Icon name={c.icon} />
                      <span>{c.name}</span>
                    </li>
                  </Draggable>
                )}
              </Fragment>
            ))}
          </ul>
        </section>
        <section className="flex-1 px-2 py-3 space-y-2">
          <Container>
            <Text tag="h2">Form Builder</Text>
            <Text tag="p">Please drag and drop the components below</Text>
            {values.map((row) => (
              <React.Fragment key={row.id}>
                <Droppable id={row.id} data={row.data} />
              </React.Fragment>
            ))}
            <Droppable id="new-row" data={[] as FormBuilderColumn[]} />
          </Container>
        </section>
      </div>
    </DndContext>
  );
};

export default FormBuilder;
