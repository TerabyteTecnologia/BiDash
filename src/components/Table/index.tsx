import { ReactNode } from "react";
import { TransactionsTable } from "./styles";

function objectValues<T extends {}>(obj: T) {
  return Object.keys(obj).map((objKey) => obj[objKey as keyof T]);
}

function objectKeys<T extends {}>(obj: T) {
  return Object.keys(obj).map((objKey) => objKey as keyof T);
}

type PrimitiveType = string | Symbol | number | boolean;

function isPrimitive(value: any): value is PrimitiveType {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean" ||
    typeof value === "symbol"
  );
}
interface MinTableItem {
  id: PrimitiveType;
}

type TableHeaders<T extends MinTableItem> = Record<keyof T, string>;

type CustomRenderers<T extends MinTableItem> = Partial<
  Record<keyof T, (it: T) => ReactNode>
>;

interface TableProps<T extends MinTableItem> {
  items: T[];
  headers: TableHeaders<T>;
  customRenderers?: CustomRenderers<T>;
}

export default function Table<T extends MinTableItem>(props: TableProps<T>) {
  function renderRow(item: T) {
    return (
      <>
        {objectKeys(item).map((itemProperty, index) => {
          const customRenderer = props.customRenderers?.[itemProperty];

          if (customRenderer) {
            return <td key={index}>{customRenderer(item)}</td>;
          }

          return (
            <td key={index}>{isPrimitive(item[itemProperty]) ? String(item[itemProperty]) : ""}</td>
          );
        })}
      </>
    );
  }

  return (
    <TransactionsTable>
      <thead>
        <tr>
          {objectValues(props.headers).map((headerValue) => (
            <th key={headerValue}>{headerValue}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.items.map((item, index) => (
          <tr key={index}>{renderRow(item)}</tr>
        ))}
      </tbody>
    </TransactionsTable>
  );
}
