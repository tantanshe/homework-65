import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {PageApi, pages} from '../../types';
import axiosApi from '../../axiosApi';
import Spinner from '../../components/Spinner/Spinner';

const initialState: PageApi = {
  title: '',
  content: '',
};

const Admin = () => {
  const [selectedPageId, setSelectedPageId] = useState<string>('');
  const [page, setPage] = useState<PageApi>(initialState);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const fetchPage = async (pageId: string) => {
    setIsLoading(true);
    try {
      const response = await axiosApi.get<PageApi>(`pages/${pageId}.json`);
      if (response.data) {
        setPage(response.data);
      } else {
        setPage(initialState);
      }
    } catch (error) {
      console.error(error);
      setPage(initialState);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (selectedPageId) {
      void fetchPage(selectedPageId);
    }
  }, [selectedPageId]);

  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value;
    setSelectedPageId(selectedId);
  };

  const onFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setPage((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await axiosApi.put(`pages/${selectedPageId}.json`, page);
      navigate(`/pages/${selectedPageId}`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="row mt-3">
      {isLoading && (<Spinner/>)}
      <div className="col">
        <form onSubmit={onFormSubmit}>
          <h2>Edit the page</h2>
          <div className="form-group mt-2">
            <label className="mb-2" htmlFor="name">Page name</label>
            <select
              id="name"
              name="name"
              className="form-control"
              value={selectedPageId}
              onChange={onSelectChange}
              required
            >
              <option value="" disabled>Select a page</option>
              {pages.map(page => (
                <option key={page.id} value={page.id}>{page.title}</option>
              ))}
            </select>
          </div>
          <div className="form-group mt-2">
            <label className="mb-2" htmlFor="title">Page title</label>
            <input
              id="title"
              type="text"
              name="title"
              className="form-control"
              value={page.title}
              onChange={onFieldChange}
              required
            />
          </div>
          <div className="form-group mt-2">
            <label className="mb-2" htmlFor="content">Page content</label>
            <textarea
              id="content"
              name="content"
              className="form-control"
              value={page.content}
              onChange={onFieldChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3 ps-5 pe-5">
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;