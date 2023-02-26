import { QueryClient } from "react-query";

export const queryCache = {
  cache: new QueryClient(),

  read<U>(keys: Array<string>): Array<U> | undefined {
    const values = this.cache.getQueryData<Array<U>>(keys);
    if (values) {
      return values;
    }
    return undefined;
  },

  readById<U>(keys: Array<string>, id: string): U | undefined {
    const state = this.cache.getQueryState(keys);

    if (state && Date.now() - state.dataUpdatedAt <= 60 * 1000) {
      const data = state.data as Array<U>;
      const result = data.find((d) => {
        const u = d as any;
        return u._id === id;
      });
      return result;
    }

    return undefined;
  },

  updateFragment<U>(id: string | undefined, keys: Array<string>, data: U) {
    const values = this.cache.getQueryData<Array<U>>(keys);
    let newValues: Array<U> = [];
    if (values) {
      if (id === undefined) {
        newValues = [...values, data];
      } else {
        const index = values.findIndex((b: any) => b._id === id) as number;
        if (index === -1) {
          newValues?.push(data);
        } else {
          newValues?.splice(index, 1, data);
        }
      }
    } else {
      newValues = [data];
    }
    this.cache.setQueryData(keys, newValues);
  },

  removeFragment<U>(id: string, keys: Array<string>) {
    const values = this.cache.getQueryData<Array<U>>(keys);
    if (values) {
      const index = values.findIndex((b: any) => b._id === id) as number;
      if (index > -1) {
        values.splice(index, 1);
        this.cache.setQueryData(keys, values);
      }
    }
  },
};
