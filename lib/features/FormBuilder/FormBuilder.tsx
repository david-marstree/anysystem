import React, { Fragment } from "react";
import _ from "lodash";
import {
  DndContext,
  DragStartEvent,
  DragOverEvent,
  DragEndEvent,
  DragOverlay,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import type { FormBuilderRow, FormBuilderColumn } from "./type";
//constant
import { FORMBUILDER_COMPONENTS } from "./constants/component_type";
//context
import { FormBuilderProvider } from "./contexts/FormBuilderContext";
//component
import { Button, Container, Text, Icon, FormField } from "../../components/";
import BuilderRow from "./components/BuilderRow";

export type FormBuilderProps = {
  value?: FormBuilderRow[];
};
const FormBuilder: React.FC<FormBuilderProps> = ({ value }) => {
  const [values, setValues] = React.useState<FormBuilderRow[]>(value || []);
  const [activeItem, setActiveItem] = React.useState<
    FormBuilderRow | FormBuilderColumn | null
  >(null);

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
    const columnData: FormBuilderColumn = {
      type: "column",
      id: columnId,
      name: columnId,
      data: data,
    };
    row[overIndex] = addRow();
    row[overIndex].data.push(columnData);
    setValues(row);
  };

  const handleDragStart = ({ active }: DragStartEvent) => {
    if (!active) return;
    const activeIndex = _.findIndex(values, (v) => v.id === active.id);
    if (activeIndex === -1) {
      const activeRowIndex = _.findIndex(values, (row) =>
        _.some(row.data, (d) => d.id === active.id)
      );
      if (activeRowIndex === -1) return;
      const item = _.find(
        values[activeRowIndex].data,
        (d) => d.id === active.id
      );
      if (!item) return;
      setActiveItem(item);
      return;
    }
    setActiveItem(values[activeIndex]);
  };

  const handleDragOver = ({ over, active }: DragOverEvent) => {
    if (!over) return;
    if (active.id === over.id) return;
    const activeIndex = _.findIndex(values, (v) => v.id === active.id);
    let overIndex = _.findIndex(values, (v) => v.id === over.id);

    // insert to row
    if (activeIndex === -1) {
      const activeRowIndex = _.findIndex(values, (row) =>
        _.some(row.data, (d) => d.id === active.id)
      );

      if (activeRowIndex === -1) return;
      const item = _.find(
        values[activeRowIndex].data,
        (d) => d.id === active.id
      );
      if (!item) return;
      console.log("handleDragOver");
      console.log("over", over);
      console.log("active", active);
      if (overIndex === -1) {
        return;
      }
      setValues((prev) => {
        let newValues = [...prev];
        newValues[activeRowIndex].data = newValues[activeRowIndex].data.filter(
          (d) => d.id !== active.id
        );
        if (newValues[overIndex].data.length === 0) {
          newValues.splice(overIndex, 1);
        }
        return newValues;
      });
    }
  };

  const handleDragEnd = ({ over, active }: DragEndEvent) => {
    console.log("handleDragEnd");
    console.log("over", over);
    console.log("active", active);
    if (!over) {
      const activeIndex = _.findIndex(values, (v) => v.id === active.id);
      if (activeIndex === -1) {
        setValues((prev) => {
          let newValues = [...prev];
          let rowData = addRow();
          rowData.data.push(activeItem as FormBuilderColumn);
          newValues.push(rowData);
          return newValues;
        });
      }
      setActiveItem(null);
      return;
    }
    if (active.id === over.id) return;

    const activeIndex = _.findIndex(values, (v) => v.id === active.id);
    const overIndex = _.findIndex(values, (v) => v.id === over.id);

    setValues((prev) => {
      if (activeIndex === -1 && overIndex >= 0) {
        let newValues = [...prev];
        newValues[overIndex].data.push(activeItem as FormBuilderColumn);
        return newValues;
      }
      if (activeIndex === -1 && overIndex === -1) {
        const overRowIndex = _.findIndex(values, (row) =>
          _.some(row.data, (d) => d.id === over.id)
        );

        let newValues = [...prev];
        if (!newValues[overRowIndex].data.some((d) => d.id === active.id)) {
          newValues[overRowIndex].data.push(activeItem as FormBuilderColumn);
        } else {
          const overColumnIndex = _.findIndex(
            newValues[overRowIndex].data,
            (d) => d.id === over.id
          );
          const activeColumnIndex = _.findIndex(
            newValues[overRowIndex].data,
            (d) => d.id === active.id
          );
          newValues[overRowIndex].data = arrayMove(
            newValues[overRowIndex].data,
            activeColumnIndex,
            overColumnIndex
          );
        }
        newValues = _.filter(newValues, (l) => l.data.length > 0);
        return newValues;
      }
      return arrayMove(prev, activeIndex, overIndex);
    });
    setActiveItem(null);
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
              <DndContext
                onDragEnd={handleDragEnd}
                onDragOver={handleDragOver}
                onDragStart={handleDragStart}
              >
                <SortableContext
                  items={values.map((r) => r.id)}
                  strategy={verticalListSortingStrategy}
                >
                  {values.map((row) => (
                    <BuilderRow key={row.id} id={row.id} data={row} />
                  ))}
                </SortableContext>
                <DragOverlay>
                  <div className="p-10 rounded bg-gray-50"></div>
                </DragOverlay>
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
