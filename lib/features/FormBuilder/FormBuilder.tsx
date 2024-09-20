import React, { Fragment } from "react";
import _ from "lodash";
import { DndContext, DragEndEvent, DragOverlay } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Button, Container, Text, Icon, FormField } from "../../components/";
import type { FormBuilderData, FormBuilderRow } from "./type";
//constant
import { FORMBUILDER_COMPONENTS } from "./constants/component_type";
import { FormBuilderProvider } from "./contexts/FormBuilderContext";
import Droppable from "./components/Droppable";
import SortableItem from "./components/SortableItem";

export type FormBuilderProps = {
  value?: FormBuilderRow[];
};
const FormBuilder: React.FC<FormBuilderProps> = ({ value }) => {
  const [values, setValues] = React.useState<FormBuilderRow[]>(value || []);

  const addRow = (): FormBuilderRow => {
    return {
      type: "row",
      id: `row-${new Date().getTime()}`,
      data: [],
    };
  };

  const addItem = (data: FormField) => {
    const overIndex = values.length;
    const columnId = `${data.name}-${new Date().getTime()}`;

    let row = [...values];
    const columnData: FormBuilderData = {
      type: "column",
      id: columnId,
      name: columnId,
      data: data,
    };
    row[overIndex] = addRow();
    row[overIndex].data.push(columnData);
    setValues(row);
  };

  const handleDragEnd = ({ over, active }: DragEndEvent) => {
    if (!(over && over.id !== active.id)) return;
    // console.log("handleDragEnd");
    // console.log("over", over);
    // console.log("active", active);

    let newIndex = _.findIndex(values, (o) => o.id === over.id);
    let oldIndex = _.findIndex(values, (o) => o.id === active.id);
    // for row to another row column
    if (newIndex < 0 && /\-horizontal$/.test(over.id as string)) {
      const overId = (over.id as string).replace("-horizontal", "");
      newIndex = _.findIndex(values, (o) => o.id === overId);
      let rows = [...values];
      if (oldIndex >= 0) {
        rows[newIndex].data = [...rows[newIndex].data, ...rows[oldIndex].data];
        rows.splice(oldIndex, 1);
        setValues([...rows]);
      } else {
        oldIndex = _.findIndex(values, (r) =>
          _.some(r.data, (d) => d.id === active.id)
        );
        const item = values[oldIndex].data.find((d) => d.id === active.id);
        rows[oldIndex].data = values[oldIndex].data.filter(
          (d) => d.id !== active.id
        );
        rows[newIndex].data = [...rows[newIndex].data, item as FormBuilderData];

        setValues([...rows]);
      }
      return;
    }
    //sub column to parent row
    if (newIndex < 0 && over.id + "" === "row") {
      let rows = [...values];
      const itemIndex = _.findIndex(values, (r) =>
        _.some(r.data, (d) => d.id === active.id)
      );
      const item = values[itemIndex].data.find((d) => d.id === active.id);

      rows[itemIndex].data = values[itemIndex].data.filter(
        (d) => d.id !== active.id
      );
      let overIndex = rows.length;
      rows[overIndex] = addRow();
      rows[overIndex].data.push(item as FormBuilderData);
      setValues([...rows]);
      return;
    }

    // for sort row only
    const newValues = arrayMove(values, oldIndex, newIndex);
    setValues(newValues);
  };

  const handleSubmit = () => {
    console.log("values", JSON.stringify(values, null, 2));
  };

  return (
    <FormBuilderProvider values={values} setValues={setValues}>
      <div className="flex w-full h-full">
        <section className="w-[320px] h-full border-r border-gray-300 ">
          <ul className="p-2 grid gap-2 grid-cols-2">
            {FORMBUILDER_COMPONENTS.map((c, i) => (
              <Fragment key={i}>
                {c && c.data && c.id && (
                  <li className="border border-gray-400 rounded bg-gray-50 space-x-2">
                    <button
                      type="button"
                      className="flex items-center justify-start w-full p-2 gap-2"
                      onClick={() => addItem(c.data as FormField)}
                    >
                      <Icon name={c.icon} />
                      <span>{c.name}</span>
                    </button>
                  </li>
                )}
              </Fragment>
            ))}
          </ul>
        </section>
        <section className="flex-1 px-2 py-3">
          <Container className="space-y-2">
            <Text tag="h2">Form Builder</Text>
            <Text tag="p">Please drag and drop the components below</Text>
            <div className="-mx-4 form-builder-container">
              <DndContext onDragEnd={handleDragEnd}>
                <SortableContext
                  items={values.map((r) => r.id)}
                  strategy={verticalListSortingStrategy}
                >
                  <Droppable id="row" className="space-y-2">
                    {values.length > 0 &&
                      values.map((row) => (
                        <SortableItem
                          key={row.id}
                          id={row.id}
                          data={row.data}
                        />
                      ))}
                  </Droppable>
                </SortableContext>
                <DragOverlay></DragOverlay>
              </DndContext>
              {values.length === 0 && (
                <div className="flex items-center justify-center p-2 mx-4 border border-gray-300 border-dashed">
                  <Text tag="p">There is no components here</Text>
                </div>
              )}
            </div>
          </Container>
        </section>
      </div>
      <div className="fixed bottom-0 flex justify-end w-full p-2 bg-white border-t border-gray-300">
        <Button type="button" variant="primary" onClick={handleSubmit}>
          Save
        </Button>
      </div>
    </FormBuilderProvider>
  );
};

export default FormBuilder;
