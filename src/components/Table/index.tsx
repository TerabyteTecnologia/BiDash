import { ReactNode } from "react";
import { ResponsiveContainer, TransactionsContainer, TransactionsTable } from "./styles";

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

/** Component */

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
      <tr>
        {objectKeys(item).map((itemProperty) => {
          const customRenderer = props.customRenderers?.[itemProperty];

          if (customRenderer) {
            return <td>{customRenderer(item)}</td>;
          }

          return (
            <td>{isPrimitive(item[itemProperty]) ? String(item[itemProperty]) : ""}</td>
          );
        })}
      </tr>
    );
  }

  return (
    <TransactionsTable>
      <thead>
        {objectValues(props.headers).map((headerValue) => (
          <th>{headerValue}</th>
        ))}
      </thead>
      <tbody>{props.items.map(renderRow)}</tbody>
    </TransactionsTable>
  );
}
