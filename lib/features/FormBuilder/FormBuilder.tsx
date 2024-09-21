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
import BuilderColumn from "./components/BuilderColumn";

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

    setValues((prev) => {
      const activeIndex = _.findIndex(prev, (v) => v.id === active.id);
      let overIndex = _.findIndex(prev, (v) => v.id === over.id);

      // insert to row
      if (activeIndex !== -1) return prev;
      if (overIndex === -1) return prev;
      const activeRowIndex = _.findIndex(prev, (row) =>
        _.some(row.data, (d) => d.id === active.id)
      );

      if (activeRowIndex === -1) return prev;
      const item = _.find(prev[activeRowIndex].data, (d) => d.id === active.id);
      if (!item) return prev;

      let newValues = [...prev];
      newValues[activeRowIndex].data = newValues[activeRowIndex].data.filter(
        (d) => d.id !== item.id
      );
      if (newValues[overIndex].data.length === 0) {
        newValues.splice(overIndex, 1);
      }
      return newValues;
    });
  };

  const handleDragEnd = ({ over, active }: DragEndEvent) => {
    if (!over) {
      // 如果元件被拖到了空白處, 就新增一個新的行把元件放進去
      setValues((prev) => {
        const activeIndex = _.findIndex(values, (v) => v.id === active.id);
        if (activeIndex > 0) return prev;
        let newValues = [...prev];
        let rowData = addRow();
        rowData.data.push(activeItem as FormBuilderColumn);
        newValues.push(rowData);
        return newValues;
      });
      setActiveItem(null);
      return;
    }

    if (active.id === over.id) return;

    setValues((prev) => {
      const activeIndex = _.findIndex(prev, (v) => v.id === active.id);
      const overIndex = _.findIndex(prev, (v) => v.id === over.id);
      if (activeIndex === -1 && overIndex >= 0) {
        // 新增或拖元件到某一行
        const activeRowIndex = _.findIndex(prev, (row) =>
          _.some(row.data, (d) => d.id === active.id)
        );
        let newValues = [...prev];
        if (activeRowIndex >= 0) {
          // 新增元件到某一行
          newValues[activeRowIndex].data = newValues[
            activeRowIndex
          ].data.filter((d) => d.id !== active.id);
        }
        newValues[overIndex].data.push(activeItem as FormBuilderColumn);
        return newValues;
      }
      if (activeIndex === -1 && overIndex === -1) {
        // 新增元件到某一行column 的最後一欄
        const activeRowIndex = _.findIndex(prev, (row) =>
          _.some(row.data, (d) => d.id === active.id)
        );
        const overRowIndex = _.findIndex(prev, (row) =>
          _.some(row.data, (d) => d.id === over.id)
        );

        let newValues = [...prev];
        if (!newValues[overRowIndex].data.some((d) => d.id === active.id)) {
          // 如果該行中沒有active元件就新增
          newValues[overRowIndex].data.push(activeItem as FormBuilderColumn);
          newValues[activeRowIndex].data = newValues[
            activeRowIndex
          ].data.filter((d) => d.id !== active.id);
        } else {
          // 如果該行中有active元件就交換位置
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
    console.log("values", JSON.stringify(values));
  };

  return (
    <FormBuilderProvider values={values} setValues={setValues}>
      <div className="flex flex-col w-full h-full md:flex-row">
        <section className="hidden md:block w-[320px] h-full border-r border-gray-300 ">
          <ul className="p-2 grid gap-2 grid-cols-2">
            {FORMBUILDER_COMPONENTS.map((c, i) => (
              <Fragment key={i}>
                {c && c.data && c.id && (
                  <li className="border border-gray-400 rounded bg-gray-50 dark:bg-gray-800 space-x-2">
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
            <Text tag="p" className="hidden md:block">
              Please drag and drop the components below
            </Text>
            <Text tag="p" className="block md:hidden">
              Please use computer device to the components drag and drop
            </Text>
            <div className="p-4 -m-4 border border-gray-300 border-dashed rounded form-builder-container">
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
                  {activeItem?.type === "row" && (
                    <BuilderRow
                      id={activeItem.id}
                      data={activeItem}
                      className="bg-white opacity-70 dark:bg-gray-800"
                    />
                  )}
                  {activeItem?.type === "column" && (
                    <BuilderColumn
                      id={activeItem.id}
                      data={activeItem}
                      className="bg-white opacity-70 dark:bg-gray-800"
                    />
                  )}
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
      <div className="fixed bottom-0 flex justify-end w-full p-2 bg-white border-t border-gray-300 dark:bg-gray-800">
        <Button type="button" variant="primary" onClick={handleSubmit}>
          Save
        </Button>
      </div>
    </FormBuilderProvider>
  );
};

export default FormBuilder;
