import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {PageApi} from '../../types';
import axiosApi from '../../axiosApi';
import Spinner from '../../components/Spinner/Spinner';

const Home = () => {
  const {pageName} = useParams<{ pageName: string }>();
  const [pageApi, setPageApi] = useState<PageApi | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchPageApi = async () => {
    if (pageName) {
      setIsLoading(true);
      try {
        const response = await axiosApi.get<PageApi>(`pages/${pageName}.json`);
        if (response.data) {
          setPageApi(response.data);
        } else {
          setPageApi(null);
        }
      } catch (error) {
        console.error(error);
        setPageApi(null);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    void fetchPageApi();
  }, [pageName]);

  return (
    <div>
      {isLoading && (<Spinner/>)}
      {!isLoading && pageApi && (
        <div className="card mt-4">
          <div className="card-header">
            <h1 className="card-title">{pageApi.title}</h1>
          </div>
          <div className="card-body">
            <p className="card-text">{pageApi.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;