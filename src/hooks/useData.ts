import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import Axios from "../services/api-client";
import { GameQuery } from "../App";

interface DataResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dep?: GameQuery[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    () => {
      const controller = new AbortController();
      setIsLoading(true);
      Axios.get<DataResponse<T>>(`/${endpoint}`, {
        signal: controller.signal,
        ...requestConfig,
      })
        .then((res) => {
          setData(res.data.results);
          setErrors("");
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setErrors(err.message);
          setIsLoading(false);
        });

      return () => controller.abort();
    },
    dep ? [...dep] : []
  );
  return { data, errors, isLoading };
};

export default useData;
