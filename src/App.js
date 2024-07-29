import React from 'react';
import './App.css';
import backgroundImage from './images/pic3.png'; 

function App() {
  return (
    <div className="App">
      <main>
        <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="overlay">
            <div className="content-container">
              <section className="main-menu">
                <h1 className="headline-1">Бронируйте у нас!</h1>
                <h1 className="headline-2">Откройте красоту путешествия</h1>
               
                <div className="booking">
                  <form>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="location">Местоположение:</label>
                        <input type="text" id="location" name="location" defaultValue="Якутия" />
                      </div>

                      <div className="form-group">
                        <label htmlFor="date-range">Выберите даты:</label>
                        <input type="text" id="date-range" name="date-range" className="date-picker" />
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
    </div>
  );
}

export default App;
