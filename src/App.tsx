import { useCallback, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Row } from "./types/RowItem.types";
import { CustomTable } from "./components/Table/Table";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState<Row[]>([]);
  const [page, setPage] = useState(1);
  const LIMIT = 5;

  const handleEdit = useCallback(
    (data: Row) => {
      const newData = tableData?.map((row: Row) =>
        data.login.uuid === row.login.uuid ? data : row
      );
      setTableData(newData);
    },
    [tableData]
  );

  // Load the table data
  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      setIsLoading(true);
      const {
        data: { results },
      } = await axios.get(
        `https://randomuser.me/api/?seed=dexi-interview&results=${LIMIT}&page=${page}`
      );
      setTableData((prev) => [...prev, ...results]);
      setIsLoading(false);
    };
    fetchData();
  }, [page]);

  return (
    <div className="App container mt-3">
      <CustomTable data={tableData} handleEdit={handleEdit} />
      <Button onClick={loadMore}>
        {isLoading ? "Loading.." : "Load More"}
      </Button>
    </div>
  );
};

export default App;
