import React, { useState } from 'react';
import './App.css';
import backgroundImage from './images/pic3.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ru } from 'date-fns/locale';

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="App">
      {/* Меню */}
      <nav className="menu">
        <a href="#menu" className="menu-item">МЕНЮ</a>
        <a href="#about" className="menu-item">О НАС</a>
        <a href="#rental" className="menu-item">АРЕНДА</a>
        <a href="#entertainment" className="menu-item">РАЗВЛЕЧЕНИЯ</a>
      </nav>
      
      <main style={{ marginTop: '60px' }}> {/* Учитываем высоту меню */}
        <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="overlay">
            <div className="content-container">
              <section className="main-menu">
                <h1 className="headline-1">Бронируйте у нас!</h1>
                <h2 className="headline-2">Откройте красоту путешествия</h2>

                <div className="booking">
                  <form>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="location">Местоположение:</label>
                        <input type="text" id="location" name="location" defaultValue="Якутия" />
                      </div>

                      <div className="form-group">
                        <label htmlFor="date-range">Выберите даты:</label>
                        <DatePicker
                          selected={startDate}
                          onChange={(dates) => {
                            const [start, end] = dates;
                            setStartDate(start);
                            setEndDate(end);
                          }}
                          startDate={startDate}
                          endDate={endDate}
                          selectsRange
                          inline
                          placeholderText="Выберите даты"
                          locale={ru}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="guests">Количество человек:</label>
                        <input type="number" id="guests" name="guests" min="1" max="10" defaultValue="2" />
                      </div>

                      <button type="submit" className="search-button">Поиск</button>
                    </div>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Подвал с контактной информацией */}
      <footer className="footer">
        <div className="footer-info">
          <p>&copy; 2024 Ваша Компания. Все права защищены.</p>
          <p>
            <a href="mailto:contact@yourcompany.com">contact@yourcompany.com</a>
          </p>
          <p>
            Телефон: <a href="tel:+1234567890">+1 (234) 567-890</a>
          </p>
          <p>
            Адрес: Улица Примерная, 123, Город, Страна
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
