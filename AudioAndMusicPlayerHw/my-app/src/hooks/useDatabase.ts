import * as SQLite from "expo-sqlite";
import { Platform } from "react-native";

const openDatabase = () => {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return { executeSql: () => {} };
      },
    };
  }
  const db = SQLite.openDatabase("myDb.db");

  return db;
};

const db = openDatabase();

export default function useDatabase() {

    return db;
}
