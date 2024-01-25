import React, { createContext, useContext } from "react";
import useDatabase from "../hooks/useDatabase";
import useForceUpdate from "../hooks/useForceUpdate";

interface DatabaseContextType {
  db: ReturnType<typeof useDatabase>;
  createDatabase: () => Promise<void>;
  getAllItems: () => Promise<AudioModel[]>;
  addItem: (path: string, fileName: string) => void;
}

const DatabaseContext = createContext<DatabaseContextType | undefined>(
  undefined
);

export function useDatabaseContext() {
  const context = useContext(DatabaseContext);
  if (!context) {
    throw new Error(
      "useDatabaseContext should be used within a Database Provider"
    );
  }
  return context;
}

interface Props {
  children: React.ReactNode;
}

export const DatabaseContextProvider: React.FC<Props> = ({ children }) => {
  const db = useDatabase();
  const [forceUpdate, setForceUpdate] = useForceUpdate();

  const createDatabase = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "create table if not exists audios (id integer primary key not null, path text, fileName text)",
          [],
          () => {
            console.log("Table created successfully");
            forceUpdate();
            resolve();
          },
          (_, error) => {
            console.error("Error creating table: ", error);
            reject(error);
            return false;
          }
        );
      });
    });
  };

  const addItem = (path: string, fileName: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (path.trim() === "") {
        reject(new Error("Invalid task parameters"));
        return;
      }

      db.transaction((tx) => {
        tx.executeSql(
          "insert into audios (path, fileName) VALUES (?, ?)",
          [path, fileName],
          (_, results) => {
            console.log("Audios added successfully");
            getAllItems().then(() => {
              forceUpdate();
              resolve();
            });
          },
          (_, error) => {
            console.error("Error adding audio: ", error);
            reject(error);
            return false;
          }
        );
      });
    });
  };

  const getAllItems = (): Promise<AudioModel[]> => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'select * from audios',
          [],
          (_, { rows }) => {
            const { length } = rows;
            const items = [];
  
            for (let i = 0; i < length; i++) {
              const item = rows.item(i);
              items.push(item);
            }

            resolve(items);
          },
          (_, error) => {
            console.error('Error fetching items: ', error);
            reject(error);
            return false; 
          }
        );
      });
    });
  };
  const contextValue: DatabaseContextType = {
    db,
    createDatabase,
    addItem,
    getAllItems,
  };

  return (
    <DatabaseContext.Provider value={contextValue}>
      {children}
    </DatabaseContext.Provider>
  );
};
