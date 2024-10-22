import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, setFilter } from '../store/DataSlice';

const DataList = () => {
  const dispatch = useDispatch();
  const { items, loading, error, filter } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      <h1>Список пользователей</h1>
      <input
        type="text"
        placeholder="Фильтр по имени"
        value={filter}
        onChange={handleFilterChange}
      />
      {filteredItems.length === 0 ? (
        <p>Ничего не найдено</p>
      ) : (
        <ul>
          {filteredItems.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataList;
