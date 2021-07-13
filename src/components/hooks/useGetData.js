import { useEffect, useState } from "react";
import { getGroupIds, getGroup, getIndex } from "../../contracts/contract";

export const useGetData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const initGetData = async () => {
      const groupIds = await getGroupIds();
      const groups = await Promise.all(
        groupIds.map(async (groupId) => getGroup(groupId))
      );
      const data = await Promise.all(
        groups.map(async (group) => {
          const indexesData = await Promise.all(
            group.indexes.map((indexId) => getIndex(indexId))
          );
          return {
            name: group.name,
            data: indexesData,
          };
        })
      );
      setData(data);
    };
    initGetData();
  }, []);

  return data;
};
